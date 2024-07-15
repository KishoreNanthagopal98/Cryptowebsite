import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import GameNavSec from "../../GameNavSec/GameNavSec";
import "../../titleSection/titleSection.scss";
import "./classicsnake.scss";

const start = {
  active: false,
  speed: 120, // ms
  direction: "right",
  snake: [[50, 70], [60, 70], [70, 70], [80, 70]], // Start with 4 block snake
  food: [200, 70],
  score: 0,
  high_score: localStorage.getItem("high_score") || 0
};

const ClassicSnake = () => {
  const [state, setState] = useState(start);
  const [intervalId, setIntervalId] = useState(null);

  const startStop = useCallback((manual) => {
    let active = state.active;
    if (manual) {
      setState(prevState => ({ ...prevState, active: !active }));
    }
    if (!active) {
      const interval = setInterval(() => updateSnake(), state.speed);
      setIntervalId(interval);
    } else {
      clearInterval(intervalId);
      let high_score = state.high_score;
      if (state.score > high_score) {
        high_score = state.score;
      }
      localStorage.setItem("high_score", high_score);
      setState({
        active: false,
        speed: 120, // ms
        direction: "right",
        snake: [[50, 70], [60, 70], [70, 70], [80, 70]], // Start with 4 block snake
        food: [200, 70],
        score: 0,
        high_score: high_score
      });
    }
  }, [state, intervalId]);

  const updateSnake = useCallback(() => {
    var direction = state.direction;
    var currentSnake = [...state.snake];
    var snakeHead = currentSnake[currentSnake.length - 1];
    var newHead = [];
    var target = state.food;

    switch (direction) {
      case "up":
        newHead = [snakeHead[0], snakeHead[1] - 10];
        break;
      case "right":
        newHead = [snakeHead[0] + 10, snakeHead[1]];
        break;
      case "down":
        newHead = [snakeHead[0], snakeHead[1] + 10];
        break;
      case "left":
        newHead = [snakeHead[0] - 10, snakeHead[1]];
        break;
      default:
        newHead = [snakeHead[0], snakeHead[1]];
    }
    currentSnake.push(newHead);

    currentSnake.forEach((val, i, array) => {
      if (i !== array.length - 1 && val.toString() === newHead.toString()) {
        startStop(true);
      }
    });

    if (newHead[0] > 390 || newHead[0] < 0 || newHead[1] > 320 || newHead[1] < 30) {
      let teleHead = currentSnake[currentSnake.length - 1];
      if (newHead[0] > 390) {
        teleHead[0] -= 400;
        currentSnake.shift();
      }
      if (newHead[0] < 0) {
        teleHead[0] += 400;
        currentSnake.shift();
      }
      if (newHead[1] > 320) {
        teleHead[1] -= 300;
        currentSnake.shift();
      }
      if (newHead[1] < 30) {
        teleHead[1] += 300;
        currentSnake.shift();
      }
    } else {
      if (newHead[0] === target[0] && newHead[1] === target[1]) {
        let posX = Math.floor(Math.random() * 38) * 10;
        let posY = Math.floor(Math.random() * 28) * 10 + 30;
        setState(prevState => ({
          ...prevState,
          snake: currentSnake,
          food: [posX, posY],
          score: prevState.score + 1
        }));
      } else {
        currentSnake.shift();
        if (state.active) {
          setState(prevState => ({ ...prevState, snake: currentSnake }));
        }
      }
    }
  }, [state, startStop]);

  const handleKeys = useCallback((event) => {
    let currentD = state.direction;
    if (event.keyCode === 13) {
      startStop(true);
    }
    if (event.keyCode === 65 && currentD !== "right") {
      setState(prevState => ({ ...prevState, direction: "left" }));
    }
    if (event.keyCode === 68 && currentD !== "left") {
      setState(prevState => ({ ...prevState, direction: "right" }));
    }
    if (event.keyCode === 87 && currentD !== "down") {
      setState(prevState => ({ ...prevState, direction: "up" }));
    }
    if (event.keyCode === 83 && currentD !== "up") {
      setState(prevState => ({ ...prevState, direction: "down" }));
    }
  }, [state.direction, startStop]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeys, false);
    return () => {
      document.removeEventListener("keydown", handleKeys, false);
    };
  }, [handleKeys]);

  useEffect(() => {
    let score = state.score;
    if (score % 3 === 0 && score > 0) {
      speedUp();
    }
  }, [state.score]);

  const speedUp = useCallback(() => {
    let speed = state.speed;
    if (speed > 50) {
      speed -= 2;
    }
    clearInterval(intervalId);
    const interval = setInterval(() => updateSnake(), speed);
    setIntervalId(interval);
    setState(prevState => ({ ...prevState, speed: speed }));
  }, [state.speed, updateSnake]);

  return (
    <div className="gameDiv">
      <GameNavSec />
      <div className="title-section" id="titleSection">
        <h1 className="title">Classic Snake 🐍</h1>
      </div>
      <div id="snakeRoot">
        <Menu active={state.active} />
        <Score score={state.score} high_score={state.high_score} />
        {state.snake.map((val, i) => (
          <Part
            key={i}
            transition={state.speed}
            direction={state.direction}
            top={val[1]}
            left={val[0]}
          />
        ))}
        <Food top={state.food[1]} left={state.food[0]} />
      </div>
    </div>
  );
};

const Menu = ({ active }) => {
  const menu_list = active ? "menu hidden" : "menu";
  return (
    <div className={menu_list}>
      Press <span>enter</span> to start<br />
      <span>w a s d</span> keys to control
    </div>
  );
};

const Score = ({ score, high_score }) => {
  return (
    <div className="score">
      <span>
        Score: <strong>{score}</strong>
      </span>
      <span>
        High Score: <strong>{high_score}</strong>
      </span>
    </div>
  );
};

const Part = ({ transition, direction, top, left }) => {
  const classes = "part " + direction;
  return (
    <article
      style={{
        transition: transition + 50 + "ms",
        top: top + "px",
        left: left + "px"
      }}
      className={classes}
    />
  );
};

const Food = ({ top, left }) => {
  return (
    <div
      style={{ top: top + "px", left: left + "px" }}
      className="food"
    />
  );
};

export default ClassicSnake;

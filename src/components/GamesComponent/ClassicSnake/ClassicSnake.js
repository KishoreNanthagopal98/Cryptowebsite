import React, { useState, useEffect, useCallback } from 'react';
import GameNavSec from "../../GameNavSec/GameNavSec";
import "../../titleSection/titleSection.scss";
import "./classicsnake.scss";

const startState = {
  active: false,
  speed: 120, // ms
  direction: "right",
  snake: [[50, 70], [60, 70], [70, 70], [80, 70]], // Start with 4 block snake
  food: [200, 70],
  score: 0,
  high_score: localStorage.getItem("high_score") || 0
};

const ClassicSnake = () => {
  const [state, setState] = useState(startState);
  const [intervalId, setIntervalId] = useState(null);
  const [menuVisible, setMenuVisible] = useState(true); // State to manage menu visibility

  const startStopGame = useCallback((manual) => {
    setState(prevState => {
      let active = manual ? !prevState.active : true; // Always set active to true on start

      if (active) {
        const interval = setInterval(updateSnake, prevState.speed);
        setIntervalId(interval);
        setMenuVisible(false); // Hide menu on game start
      } else {
        clearInterval(intervalId);
        let high_score = Math.max(prevState.score, prevState.high_score);
        localStorage.setItem("high_score", high_score);
        return {
          ...startState,
          high_score: high_score
        };
      }

      return { ...prevState, active: active };
    });
  }, [intervalId]);

  const updateSnake = useCallback(() => {
    setState(prevState => {
      let direction = prevState.direction;
      let currentSnake = [...prevState.snake];
      let snakeHead = currentSnake[currentSnake.length - 1];
      let newHead = [];
      let target = prevState.food;

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

      // Check if the new head collides with the snake's body
      for (let i = 0; i < currentSnake.length - 1; i++) {
        if (currentSnake[i][0] === newHead[0] && currentSnake[i][1] === newHead[1]) {
          startStopGame(true); // Game over, reset
          return startState;
        }
      }

      // Teleport through walls
      if (newHead[0] >= 500) newHead[0] = 0;
      if (newHead[0] < 0) newHead[0] = 490;
      if (newHead[1] >= 500) newHead[1] = 0;
      if (newHead[1] < 0) newHead[1] = 490;

      currentSnake.push(newHead);

      // Check if food is eaten
      if (newHead[0] === target[0] && newHead[1] === target[1]) {
        let posX = Math.floor(Math.random() * 50) * 10;
        let posY = Math.floor(Math.random() * 50) * 10;
        return {
          ...prevState,
          snake: currentSnake,
          food: [posX, posY],
          score: prevState.score + 1
        };
      } else {
        currentSnake.shift(); // Remove tail segment
      }

      return {
        ...prevState,
        snake: currentSnake
      };
    });
  }, [startStopGame]);

  const handleKeys = useCallback((event) => {
    setState(prevState => {
      let currentD = prevState.direction;

      if (event.keyCode === 13) {
        startStopGame(true);
      }

      if (event.keyCode === 65 && currentD !== "right") {
        return { ...prevState, direction: "left" };
      }

      if (event.keyCode === 68 && currentD !== "left") {
        return { ...prevState, direction: "right" };
      }

      if (event.keyCode === 87 && currentD !== "down") {
        return { ...prevState, direction: "up" };
      }

      if (event.keyCode === 83 && currentD !== "up") {
        return { ...prevState, direction: "down" };
      }

      return prevState;
    });
  }, [startStopGame]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeys, false);
    return () => {
      document.removeEventListener("keydown", handleKeys, false);
    };
  }, [handleKeys]);

  useEffect(() => {
    if (state.score % 3 === 0 && state.score > 0) {
      speedUp();
    }
  }, [state.score]);

  const speedUp = useCallback(() => {
    setState(prevState => {
      let newSpeed = prevState.speed > 50 ? prevState.speed - 2 : prevState.speed;
      clearInterval(intervalId);
      const interval = setInterval(updateSnake, newSpeed);
      setIntervalId(interval);
      return { ...prevState, speed: newSpeed };
    });
  }, [intervalId, updateSnake]);

  return (
    <div className="gameDiv">
      <GameNavSec />
      <div className="title-section" id="titleSection">
        <h1 className="title">Classic Snake 🐍</h1>
      </div>
      <div id="snakeRoot">
        {menuVisible && <Menu />}
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

const Menu = () => {
  return (
    <div className="menu">
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

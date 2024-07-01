import React, { useState, useEffect, useRef } from "react";
import "./wackamole.scss";
import "../../titleSection/titleSection.scss";
import ScoreSection from "../ScoreSection/ScoreSection";

const difficultyLevels = {
  easy: { min: 700, max: 1000 },
  normal: { min: 500, max: 700 },
  hard: { min: 300, max: 500 },
};

const Wackamole = () => {
  const [hits, setHits] = useState(0);
  const [currentDifficulty, setCurrentDifficulty] = useState("normal");
  const [gameInterval, setGameInterval] = useState(null);
  const [finished, setFinished] = useState(0);
  const lastMoleClicked = useRef(null);
  const moles = useRef(Array(6).fill(null));

  useEffect(() => {
    return () => {
      clearInterval(gameInterval);
    };
  }, [gameInterval]);

  const getRandomNumber = (min, max) => Math.round(Math.random() * (max - min) + min);

  const toggleMole = (mole, milliseconds) => {
    mole.classList.add("out");
    setTimeout(() => {
      mole.classList.remove("out");
    }, milliseconds);
  };

  const getRandomIndex = (lastIndex, limit = 6) => {
    const index = Math.floor(Math.random() * limit);
    return lastIndex === index ? getRandomIndex(lastIndex) : index;
  };

  const toggleButtons = (option = false) => {
    document.querySelectorAll(".btn").forEach((button) => {
      button.disabled = option;
    });
  };

  const start = () => {
    toggleButtons(true);
    clearInterval(gameInterval);
    setFinished(0);
    let lastIndex = null;
    const { min, max } = difficultyLevels[currentDifficulty];
    const milliseconds = getRandomNumber(min, max);
    const delay = 150;
    setHits(0);
    document.querySelector(".btn-play").textContent = "Go!";
    const interval = setInterval(() => {
      const index = getRandomIndex(lastIndex);
      const currentMole = moles.current[index];
      lastIndex = index;
      toggleMole(currentMole, getRandomNumber(min, max));
    }, milliseconds + delay);
    setGameInterval(interval);

    // Update finished state after 20 seconds
    setTimeout(() => {
      setFinished(1);
      toggleButtons(false);
      document.querySelector(".btn-play").textContent = "Play";
      clearInterval(interval);
    }, 20000); // 20000 ms = 20 seconds
  };

  const handleClick = (e, mole) => {
    if (lastMoleClicked.current === mole || !e.isTrusted) return;
    setHits((prevHits) => prevHits + 1);
    mole.classList.remove("out");
    lastMoleClicked.current = mole;
  };

  const handleDifficulty = (difficulty) => {
    setCurrentDifficulty(difficulty);
    document.querySelectorAll(".btn-difficulty").forEach((button) => {
      button.classList.remove("btn-active");
    });
    document.querySelector(`.btn-difficulty:contains(${difficulty})`).classList.add("btn-active");
  };

  const modalHandle = () => {
    setFinished(0);
    setHits(0);
  }

  return (
    <div className="gameDiv">
      <div className="title-section" id="titleSection">
        <h1 className="title">Wack-A-Mole!</h1>
      </div>
      <div className="scoreSection">
        <span className="score">Hits</span>
        <span className="hits">{hits}</span>
      </div>
      <div className="wackMoleMainDiv">
        <main className="game-board gameContainer">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              className="mole-box"
              key={index}
              onClick={(e) => handleClick(e, moles.current[index])}
            >
              <span
                className="icon mole"
                ref={(el) => (moles.current[index] = el)}
              ></span>
              <span className="icon hole"></span>
            </div>
          ))}
          <div className="controls">
            <div className="difficulty">
              {Object.keys(difficultyLevels).map((level) => (
                <button
                  className={`btn btn-difficulty ${level === "normal" ? "btn-active" : ""
                    }`}
                  key={level}
                  onClick={() => handleDifficulty(level)}
                >
                  {level}
                </button>
              ))}
            </div>
            <button className="btn btn-play" onClick={start}>
              Play
            </button>
          </div>
        </main>
      </div>
      <div className={finished == 1 ? 'gameover' : 'gameon'}>
        <ScoreSection score={100} handleModal = {modalHandle} />
      </div>
    </div>
  );
};

export default Wackamole;

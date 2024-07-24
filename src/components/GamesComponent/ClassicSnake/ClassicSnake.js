import { useState, useEffect } from "react";
import ClassicSnakeDesktop from "../ClassicSnakeDesktop/ClassicSnakeDesktop";
import ClassicSnakeMobile from "../ClassicSnakeMobile/ClassicSnakeMobile";
import TitleSection from "../../titleSection/TitleSection";
import GameNavSec from "../../GameNavSec/GameNavSec";
import "./classicsnake.scss";

function ClassicSnake() {
  const [checkedValue, setCheckedValue] = useState("Desktop");

  useEffect(() => {
    if (window.innerWidth < 720) {
      setCheckedValue("Mobile")
    } else {
      setCheckedValue("Desktop")
    }
  },[window.innerWidth]);

  return (
    <>
      <div className="gameDiv">
        <GameNavSec />
        <TitleSection title="Classic Snake 🐍" />
        <div className="switches-container">
          <input
            type="radio"
            id="switchDesktop"
            name="switchDevice"
            value="Desktop"
            checked={checkedValue === "Desktop"}
            onChange={(e) => setCheckedValue(e.target.value)}
          />
          <input
            type="radio"
            id="switchMobile"
            name="switchDevice"
            value="Mobile"
            checked={checkedValue === "Mobile"}
            onChange={(e) => setCheckedValue(e.target.value)}
          />
          <label htmlFor="switchDesktop">
            <i className="navicon far fa-desktop"></i>
          </label>
          <label htmlFor="switchMobile">
            <i className="navicon far fa-mobile"></i>
          </label>
          <div className="switch-wrapper">
            <div className="switch">
              <div>
                <i className="navicon far fa-desktop" />
              </div>
              <div>
                <i className="navicon far fa-mobile" />
              </div>
            </div>
          </div>
        </div>
        <div className="gameSwtichComp">
          {checkedValue == "Desktop"? (
            <ClassicSnakeDesktop />
          ) : (
            <ClassicSnakeMobile />
          )}
        </div>
      </div>
    </>
  );
}

export default ClassicSnake;

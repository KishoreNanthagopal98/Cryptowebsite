import { useState } from "react";
import ClassicSnakeDesktop from "../ClassicSnakeDesktop/ClassicSnakeDesktop";
import ClassicSnakeMobile from "../ClassicSnakeMobile/ClassicSnakeMobile";
import GameNavSec from "../../GameNavSec/GameNavSec";
import "../../titleSection/titleSection.scss";
import "./classicsnake.scss";

function ClassicSnake() {
  const [checkedValue, setCheckedValue] = useState("Desktop");

  return (
    <>
      <div className="gameDiv">
        <GameNavSec />
        <div className="title-section" id="titleSection">
          <h1 className="title">Classic Snake 🐍</h1>
        </div>
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
          {checkedValue == "Desktop" ? (
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

import "./gamedispsection.scss";
import wackamole from "../../assets/whackamole.jpg";
import classicSnake from "../../assets/nokias-classic-snake.webp";

import { Link } from "react-router-dom";

function GameDispSection() {
  return (
    <>
      <div className="game-dis-cont container">
        <div className="game-area" id="gameSection">
          <div className="card">
            <div className="image-container ">
              <img src={wackamole} alt="image" className="game-image"/>
            </div>
            <div className="description-container">
              <h2>Whack a Mole</h2>
              <p>"Get ready for a blast from the past! Whack-a-Mole is back, bringing old-school arcade fun to a new generation of mole-mashing masters."</p>
            </div>
						<Link to = "/whack-a-mole"  className="linktag">
							<div className="play">
								<h2 className="play-name">Play</h2>
							</div>
						</Link>
          </div>
          <div className="card">
            <div className="image-container">
              <img src={classicSnake} alt="image" className="game-image"/>
            </div>
            <div className="description-container">
              <h2>Snake Classic</h2>
              <p>"Get ready to relive the pixelated past with Snake Classic, the iconic game that slithered its way into our hearts in the 90s."</p>
            </div>
						<Link to = "/classic-snake" className="linktag">
							<div className="play">
								<h2 className="play-name">Play</h2>
							</div>
						</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameDispSection;

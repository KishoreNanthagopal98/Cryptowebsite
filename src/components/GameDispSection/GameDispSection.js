import "./gamedispsection.scss";
import wackamole from "../../assets/whackamole.jpg";

import { Link } from "react-router-dom";

function GameDispSection() {
  return (
    <>
      <div className="game-dis-cont container">
        <div className="game-area">
          <div className="card">
            <div className="image-container">
              <img src={wackamole} alt="image" className="game-image"/>
            </div>
            <div className="description-container">
              <h2>Whack a Mole</h2>
              <p>"Get ready for a blast from the past! Whack-a-Mole is back, bringing old-school arcade fun to a new generation of mole-mashing masters."</p>
            </div>
						<Link to = "/whack-a-mole">
							<div className="play">
								<h2 className="play-name">Play</h2>
							</div>
						</Link>
          </div>
          <div className="card">
            <div className="image-container">
              <img src={wackamole} alt="image" className="game-image"/>
            </div>
            <div className="description-container">
              <h2>Whack a Mole</h2>
              <p>"Get ready for a blast from the past! Whack-a-Mole is back, bringing old-school arcade fun to a new generation of mole-mashing masters."</p>
            </div>
						<Link to = "/whack-a-mole" className="linktag">
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

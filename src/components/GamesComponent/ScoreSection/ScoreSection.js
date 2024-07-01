import "../ScoreSection/scoresection.scss";

function ScoreSection({score, handleModal}) {
  return ( 
		<>
			<div class="backdrop"></div>
			<div className="gameover-modal">
				<h2 className="gameover-title">Game Over!!</h2>
				<p className="gameover-score">Your Score is: {score}</p>
				<br />
				<button className="closebtn" onClick={handleModal}>
          Close
        </button>
			</div>
		</>
	);
}

export default ScoreSection;

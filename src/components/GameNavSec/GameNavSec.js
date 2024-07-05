import { Link } from "react-router-dom";
import "./gamenavsec.scss";

function GameNavSec() {
	return (
		<>
			<nav>
				<Link to = "/">
					<i className="fas fa-home"></i>
					<b>home</b>
				</Link>
				<span></span>
			</nav>
		</>
	)
}

export default GameNavSec;

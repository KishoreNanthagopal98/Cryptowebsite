import { Link } from "react-router-dom";
import { SocialIcon } from 'react-social-icons'
import "./navbar.scss";

function Navbar() {
	return (
		<>
			<nav className="navBar container">
				<div className="navbarMainDiv">
					<Link to="/">
						<p>Crypto</p>
					</Link>
					<ul className="navList">
						<li>
							<a href="#home">Home</a>
						</li>
						<li>
							<a href="#market">Market</a>
						</li>
						<li>
							<a href="#joinus">Join Us</a>
						</li>
					</ul>
					<div>
						<SocialIcon network="github" url="https://githuv.com/"/>
					</div>
				</div>
			</nav>
		</>
	);
}

export default Navbar;

import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  return (
    <>
      <nav className="navBar">
				<div className="navbarMainDiv">
					<Link to="/">
						<h2>Crypto</h2>
					</Link>
					<ul className="navList">
						<li>
							<a href = "#home">Home</a>
						</li>
						<li>
							<a href = "#market">Market</a>
						</li>
						<li>
							<a href = "#joinus">Join Us</a>
						</li>
					</ul>
				</div>
      </nav>
    </>
  );
}

export default Navbar;

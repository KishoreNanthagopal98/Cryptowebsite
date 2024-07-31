import React, { useEffect } from "react";
import { useLocation } from 'react-router-dom';

import "./navbar.scss";

function Navbar() {
  const location = useLocation();
  const urlPath = location.pathname;
  const path = {
    home: urlPath === "/" ? "#" : "/",
    games: urlPath === "/" ? "#gameSection" : "/#gameSection",
    aboutUs: urlPath === "/about-us" ? "#" : "/about-us"
  };
  useEffect(() => {
    let list = document.querySelectorAll(".list");

    list.forEach((element, index) => {
      element.addEventListener("click", function (event) {
        list.forEach((item) => (item.className = "list"));
        element.className = "list active";

        let bg = document.querySelector("body");
        let color = event.currentTarget.getAttribute("data-color");
        bg.style.backgroundColor = color;
      });
    });

    // Clean up event listeners on component unmount
    return () => {
      list.forEach((element) => {
        element.replaceWith(element.cloneNode(true));
      });
    };
  }, []);

  return (
    <>
      <div className="navbarPar">
        <div className="navigation">
          <ul>
            <li className="list active" data-color="#dc143c">
              <a href={path.home}>
                <span className="icon">
                  <i className="far fa-home"></i>
                </span>
                <span className="titleNav">Home</span>
              </a>
            </li>
            <li className="list" data-color="#3c40c6">
              <a href={path.games}>
                <span className="icon">
                  <i className="far fa-gamepad"></i>
                </span>
                <span className="titleNav">Games</span>
              </a>
            </li>
            <li className="list" data-color="#05c46b">
              <a href={path.aboutUs}>
                <span className="icon">
                  <i className="far fa-info"></i>
                </span>
                <span className="titleNav">About</span>
              </a>
            </li>
            <li className="list" data-color="#0fbcf9">
              <a href="#">
                <span className="icon">
                  <i className="far fa-question-circle"></i>
                </span>
                <span className="titleNav">Help</span>
              </a>
            </li>
            {/* <li className="list" data-color="#ffa801">
              <a href="#">
                <span className="icon">
                  <i className="far fa-user"></i>
                </span>
                <span className="titleNav">Profile</span>
              </a>
            </li> */}
            <div className="indicator"></div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;

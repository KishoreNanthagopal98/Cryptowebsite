import "./navbar.scss";

function Navbar() {
  let list = document.querySelectorAll(".list");
  for (let i = 0; i < list.length; i++) {
    list[i].onclick = (e) => {
      let j = 0;
      while (j < list.length) {
        list[j++].className = "list";
      }
      list[i].className = "list active";
    };
  } 
  
  list.forEach((elements) => {
    elements.addEventListener("click", function (event) {
      console.log("reached");
      let bg = document.querySelector("body");
      let color = event.target.getAttribute("data-color");
      console.log(event.target)
      bg.style.backgroundColor = color;
    });
  });
  return ( 
    <>
      {/* <div className="navbarPar"> */}
        <div className="navigation">
          <ul>
            <li className="list active" data-color="#dc143c">
              <a href="#">
                <span className="icon">
                  <i className="far fa-home"></i>
                </span>
                <span className="title">Home</span>
              </a>
            </li>
            <li className="list" data-color="#3c40c6">
              <a href="#">
                <span className="icon">
                  <i className="far fa-info"></i>
                </span>
                <span className="title">About</span>
              </a>
            </li>
            <li className="list" data-color="#05c46b">
              <a href="#">
                <span className="icon">
                  <i className="far fa-comment"></i>
                </span>
                <span className="title">Messages</span>
              </a>
            </li>
            <li className="list" data-color="#0fbcf9">
              <a href="#">
                <span className="icon">
                  <i className="far fa-question-circle"></i>
                </span>
                <span className="title">Help</span>
              </a>
            </li>
            <li className="list" data-color="#ffa801">
              <a href="#">
                <span className="icon">
                  <i className="far fa-cog"></i>
                </span>
                <span className="title">Settings</span>
              </a>
            </li>
            <div className="indicator"></div>
          </ul>
        </div>
      {/* </div> */}
    </>
  );
}

export default Navbar;

import "./aboutus.scss";
import TitleSection from "../../components/titleSection/TitleSection";

function Aboutus() {
  return (
    <>
      <div className="titleSection">
        <TitleSection title="About" />
      </div>
      <div className="about_us">
        <div className="details_section">
          <div className="aboutsite">
            <div className="paraone">
              Welcome to 90s Game Vault, your ultimate destination for a blast
              from the past! Our website is dedicated to bringing back the
              nostalgia of the 90s gaming era, with a vast collection of classic
              games that will transport you back in time.
            </div>
            <div className="paratwo">
              Hi, I'm Kishore, a passionate software developer by day and a
              retro gaming enthusiast by night. When I'm not coding away at
              Justdial in Bangalore, you can find me reliving the nostalgia of
              90s games or exploring new ones. With a keen eye for detail and a
              love for all things retro, I created this website to share my
              passion with fellow gamers and bring back the joy of classic
              gaming. Join me on this epic adventure through the world of 90s
              games! <br /> <br /> Reach me @
            </div>
            <div className="reachMenuSection">
              <div className="icons linkedin">
                <i class="fa-linkedin-in"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;

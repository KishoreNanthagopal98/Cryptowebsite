import CloudBackground from "../../components/CloudBackground/CloudBackground";
import Navbar from "../../components/Navbar/Navbar";
import TitleSection from "../../components/titleSection/TitleSection";
import DescSection from "../../components/DescSection/DescSection";
import GameDispSection from "../../components/GameDispSection/GameDispSection";

function Home() {
  return (
    <>
      <CloudBackground />
      <Navbar />
      <div className="titleDescSection">
        <TitleSection />
        <DescSection />
      </div>
      <GameDispSection />
    </>
  );
}

export default Home;

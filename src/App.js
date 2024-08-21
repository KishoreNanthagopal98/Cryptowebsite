import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import WackamolePage from "./pages/Games/Wackamole";
import ClassicSnakePage from "./pages/Games/ClassicSnake";
import AboutSection from "./pages/AboutSection/AboutSection";
import HelpPage from "./pages/HelpSection/helpSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/whack-a-mole" element={<WackamolePage />} title="Whack a Mole!"/>
        <Route path="/classic-snake" element={<ClassicSnakePage />}  title="Classic Snake"/>
        <Route path="/about-us" element={<AboutSection />}  title="About Us"/>
        <Route path="/help" element={<HelpPage />}  title="Help"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

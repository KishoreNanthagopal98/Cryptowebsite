import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import WackamolePage from "./pages/Games/Wackamole";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/wack-a-mole" element={<WackamolePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

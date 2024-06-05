import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Coindetail from "./pages/coindetails/Coindetail";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/coindetails" element={<Coindetail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

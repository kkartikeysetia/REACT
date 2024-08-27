import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Detail from "./components/Detail";
import Home from "./components/Home";
import Fav from "./components/Fav";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      {/*to swicth from one page to another */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={<Fav />} />
        {/* for each food item is differnet  */}
        <Route path="/recipe-item/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

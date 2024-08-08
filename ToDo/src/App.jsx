import "./App.css";
import "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Toggle from "./components/Toggle";
import Login from "./components/Login";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Toggle />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/dashboard" element={<div>Dashboard Page</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

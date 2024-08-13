import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Outlet />
      {/* yeh upar nd niche ka same rkhta h bceech mai chnages karlo */}
      <Footer />
    </>
  );
}

export default App;

import { useState } from "react";

import "./App.css";
import Cardd from "./components/Cardd"; // jo card wala component bnaya hnusko yaha export

function App() {
  // eslint-disable-next-line no-unused-vars
  const [count, setCount] = useState(0);
  let object = {
    name: "kar",
    age: 21,
  };
  let array = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-400 text-black p-6 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Cardd chanel="my" someObject={object} p={array} />/
      <Cardd username="me myslef" btntext="click me"></Cardd>
    </>
  );
}

export default App;

import { useState } from "react";
function App() {
  // eslint-disable-next-line no-unused-vars
  let [color, setColor] = useState("pink");
  return (
    <div
      className="w-full h-screen duration-200 relative"
      style={{ backgroundColor: color }}
    >
      <div
        className="fixed flex flex-wrap justify-center bottom-12 
      inset-x-0 px-2"
      >
        <div className="flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
// colors are changing toh isko kissi var mai hold krna pdhna & vo ui mai reflect hoga ie; update : required state

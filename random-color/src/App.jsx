import "./App.css";
import { useState } from "react";

export default function App() {
  const [typeofcolor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function handleCreateHex() {
    let colr = "#";
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    for (let i = 0; i < 6; i++) {
      let he = Math.floor(Math.random() * 16); // Generate a random integer between 0 and 15
      colr += hex[he];
    }
    setColor(colr);
  }

  function handleCreateRgb() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setColor(`rgb(${r},${g},${b})`);
  }

  return (
    <div style={{ backgroundColor: color }} className="w-screen h-screen p-10">
      <button className="bg-green-200" onClick={() => setTypeOfColor("rgb")}>
        Create RGB Color
      </button>
      <button onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
      <button
        onClick={typeofcolor === "hex" ? handleCreateHex : handleCreateRgb}
      >
        Create Random Color
      </button>
      <div className="w-10 h-10 p-10 m-10">
        <p className="bg-red-500">Hello</p>
      </div>
    </div>
  );
}

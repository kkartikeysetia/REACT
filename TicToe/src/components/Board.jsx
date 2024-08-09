import { useState } from "react";
import Square from "./Square";
// arrays lengye initial value per null hoga start mai
const Board = () => {
  const [state] = useState(Array(9).fill(null));
  // trap current kon h 0 ya x agar ture toh x ki turn
  const [isXTurn, setIsXTurn] = useState(true);

  const handleClick = (index) => {
    const copyState = [...state]; //exisitng state
    copyState[index] = isXTurn ? "X" : "0"; //jiss index per userclick krta h
    // x ki turn ko false krna h
    setIsXTurn(!setIsXTurn);
  };
  return (
    <div className="Board-Container">
      <div className="board-row">
        <Square onClick={() => handleClick(0)} value={state[0]} />
        <Square onClick={() => handleClick(1)} value={state[1]} />
        <Square onClick={() => handleClick(0)} value={state[2]} />
      </div>
      <div className="board-row">
        <Square onClick={() => handleClick(0)} value={state[3]} />
        <Square value={state[4]} />
        <Square value={state[5]} />
      </div>
      <div className="board-row">
        <Square value={state[6]} />
        <Square value={state[7]} />
        <Square value={state[8]} />
      </div>
    </div>
  );
};

export default Board;

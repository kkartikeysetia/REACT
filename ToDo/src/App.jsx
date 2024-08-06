// eslint-disable-next-line no-unused-vars
import { useState } from "react";

import "./App.css";

function App() {
  const [list, setList] = useState("");

  return (
    <div>
      <h2>To Do List</h2>
      <input
        type="text"
        value={list}
        placeholder="text"
        onChange={(e) => {
          setList(e.target.value);
        }}
      >
        <label>Text</label>
      </input>
    </div>
  );
}

export default App;

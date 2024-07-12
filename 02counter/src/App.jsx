import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// yaha react bina import kare hua hai babble sai
function App() {
  // first hook YEH UPDATE HOTI HAI JAISE NICHE UPDATE KARI HAI JAGAH JAGAH
  let [counter, setcounter] = useState(15); // isko counter ++ nhi likhna yeh apne app update hoga
  // setcounter is fun jo counter wale ko update krta hai

  // let counter = 10; // koi value inject krni h toh

  const addvalue = () => {
    console.log("clicked", counter);
    // counter++;
    counter = counter + 1;
    setcounter(counter); // OR setcounter(counter+1)
  };

  const removevalue = () => {
    setcounter(counter - 1);
  };

  return (
    <>
      <h1>project 02 {counter}</h1>
      <h2>counter value :{counter}</h2>
      <button onClick={addvalue}>Add value {counter}</button>
      <br></br>
      <button onClick={removevalue}>remove value {counter}</button>
    </>
  );
}

export default App;

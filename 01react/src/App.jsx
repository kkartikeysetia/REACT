import Chai from "./one.jsx";

function App() {
  const username = "chai aur react";
  // app is function jo html ko return krta hai & isko render karwa do gye
  return <h1>Chai {username}</h1>;
}
// INTERVIEW : {username} isko bolte hai evaluted expression { javascript ka final outcome ko likhte hai yaha}
// jo  {} kai andar h usko var ki tarah treat krengye

/* must be wrapeed in enclosing tag  ( 1 element return uske andar bohot jada)
<div>
  <h1>fdbd</h1>
  <p>dfbs</p>
  </div>
  */
export default App;

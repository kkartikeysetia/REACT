// eslint-disable-next-line no-unused-vars
import Chai from "./One.jsx";

function App() {
  const username = "chai aur react";
  // app is function jo html ko return krta hai & isko render karwa do gye
  return <h1>Chai {username}</h1>;
}
// INTERVIEW : {username} isko bolte hai evaluted expression (yaha if else nhi likh skte ){ javascript ka final outcome ko likhte hai yaha}
// jo  {iske} kai andar h usko varaible ki tarah treat krengye

// BASIC INTROO
/* JSX KA RULE HAI EK HE ELEMENT RETURN KAR SKTE H
 must be wrapeed in enclosing tag  ( 1 element return uske andar bohot jada)
<div>
  <h1>fdbd</h1>
  <p>dfbs</p>
  </div>
  */
export default App;

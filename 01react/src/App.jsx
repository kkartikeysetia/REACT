// eslint-disable-next-line no-unused-vars
import Chai from "./One.jsx";
// YEH MAIN FILE HAI YAHA APP LOAD HOTA H
// app is function jo html ko return krta hai & isko render karwa do gye

function App() {
  const username = "chai aur react";
  const x = 2 + 3;
  return (
    <h1>
      Chai {username}
      {x}
    </h1>
  );
}
export default App;
/*
function App() {
function add(x,y){
  return x+y;
}
return(
  <h2>sdvds{add(10,5)}</h2>
)
*/ // FUNCTION BHI PASS HO SKTA HAI

// feature of jsx : EMBEDDED EXPRESSION
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

// props are likhe parameter to function

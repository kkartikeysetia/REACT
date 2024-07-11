import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
function MyApp() {
  //1
  return (
    <div>
      <h1> Custom App</h1>
    </div>
  ); // jo yaha likha hai vo convert hota h reactelement mai
}
//4
const anotherElement = (
  <a href="https://google.com" target="_blank">
    VISIT GOOGLE
  </a>
);

//5 I WANT TO INJECT VARAIBLE
const a = "dgbd";

/* YEH HAM KHUD SAI KAR RHE THAI ISLIYE PRINT NHI HOO RHA THA 
YEH HMARA WALA METHOD HAI  //2

const reactElement = {
  
  type: "a", //element div h ya para ya anchor
  props: {
   
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click on me ",
};
*/

// abh react kai hisab sai bnao element KHUD KAI NHI //3
const reactelement = React.createElement(
  // phele tag , fir object
  "a",
  { href: "https://google.com", target: "_blank" },
  "VISIT GOOGLE noww", // jo text inject krna h
  a // another var inject hogya
);

ReactDOM.createRoot(document.getElementById("root")).render(reactelement);
//.render(anotherElement);
// isko <another element /> ESE NHI LIKH SKTE //(<MyApp />); // or write MyApp() ese bhi run hoga

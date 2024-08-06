import React from "react";
import ReactDOM from "react-dom/client";
// eslint-disable-next-line no-unused-vars
import App from "./App.jsx";

// eslint-disable-next-line no-unused-vars
function MyApp() {
  //1
  return (
    <div>
      <h1> Custom App</h1>
    </div>
  ); // jo yaha likha hai vo convert hota h react element mai jo hmne custom react mai padha h
}
ReactDOM.createRoot(document.getElementById("root")).render(<MyApp />);
//(<MyApp />); // or write MyApp() ese bhi run hoga

//3
// eslint-disable-next-line no-unused-vars
const anotherElement = (
  <a href="https://google.com" target="_blank">
    VISIT GOOGLE
  </a>
);
ReactDOM.createRoot(document.getElementById("root")).render(anotherElement);
// isko <another element /> ESE NHI LIKH SKTE

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
ReactDOM.createRoot(document.getElementById("root")).render(
<ReactElement /> // YEH RENDER TOH REACT NE LIKHA H BUT 
);
*/

//5 I WANT TO INJECT VARAIBLE
const aaaaaaaa = "dgbd";

// abh react kai hisab sai bnao element KHUD KAI NHI //4
const reactelement = React.createElement(
  // phele tag , fir object(prop add krta hai)
  "a",
  { href: "https://google.com", target: "_blank" },
  "VISIT GOOGLE noww", // jo text inject krna h // yaha ifelse nhi likh skte h yeh evaluted expression
  aaaaaaaa // another var inject hogya
);

ReactDOM.createRoot(document.getElementById("root")).render(reactelement);

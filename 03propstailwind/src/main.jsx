import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* props: make componment & pass a prop 
(ek bar apne card bnaya usko component mai rakh diya jaye & again use krlia jaye)

 props are like parameter to function 
function a(props){
  return
  <h2>{props.title}</h2>;
}
<a title="esrvgsfb gfsb gf bgd"></a>
*/

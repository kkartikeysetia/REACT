import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/* koi method run ho rha h jo random text de rha h 
slideer kai click krne per bhi length badh rhi h
No. per click krne per no. include ho rhe h
 iske liye hooks hai jo design kiye h 
 copy pe click krne per sirf wahi part kyun copy ho rha h

1. Methods ko page load hotey he run krle
2. kuch dependency hai (no./char)click hotey page reload ho rha h 
*/

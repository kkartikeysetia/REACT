import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// app sai dashboard sai right side sai top sai left (props kai andar props kai andar props)
// un optmised becoz right side kai andar no need still data handle (islye handle kiya becoz data agye pass krna h)
// ek global componnent bna do & ussai puch leta
// isko bolte h prop drilling

// CONTEXT API -> ek global varaible jiske andar sara data jayega

// react h state asani sai update nhi hota (agar hota toh sidhe ek global varaible.js naam sai file bna leta )
// acha syntax nhi hai : STATE MISMATCH & NO SYNCHORNIASATION
// KoI BHI VARaible ISKO UPDATE KRDEGA & JSIKO UPDATE NHI KRNA VO BHI HOJAYEGA

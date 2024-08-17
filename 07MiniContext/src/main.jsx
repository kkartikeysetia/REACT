import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// making dashboard for website
// app sai dashboard sai right side sai top sai left data pass krna hia  (props kai andar props kai andar props)
// unoptmised becoz(jinko ned nhi thi unko bhi lena pdha becoz inke andar component h )
// right side kai andar no need still data handle (islye handle kiya becoz data agye pass krna h)
// ek global componnent bna do & ussai puch leta
// component levl sai data pass kogye prop sai nhi
// isko bolte h prop drilling

// CONTEXT API -> ek global varaible jiske andar sara data jayega

// react h state asani sai update nhi hota (agar hota toh sidhe ek global varaible.js naam sai file bna leta )
// acha syntax nhi hai : STATE MISMATCH & NO SYNCHORNIASATION
// KoI BHI VARaible ISKO UPDATE KRDEGA & JSIKO UPDATE NHI KRNA VO BHI HOJAYEGA

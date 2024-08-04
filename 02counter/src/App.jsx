import { useState } from "react";

import "./App.css";

// yaha react bina import kare hua hai babble sai
function App() {
  // use state is responsible for  change it does not mean value change : iss change ko propgate kai jaata h ui kai andar (dom kai andar)
  // KUCH HOOKS KAI THROUGH DATA UPDATE HO RHA first hook YEH UPDATE HOTI HAI JAISE NICHE UPDATE KARI HAI JAGAH JAGAH
  // use state (andar kuch bhi default value doo ('',{},[] ) )
  // use state sai do cheez milti h aaray kai format mai (varaible ,function)

  let [counter, setcounter] = useState(15); // isko counter ++ nhi likhna yeh apne app update hoga
  // setcounter is function ya method jo counter wale ko update krta hai (counter is just var)
  // abh react apne aap react krega jaha jaha counter hoga apne aap update hoga har jagah APNE AAP STATE UPDATE HO JAYE GYI

  // let counter = 10; // koi value inject krni h toh

  const addvalue = () => {
    // console.log("clicked", counter);
    if (counter < 20) {
      setcounter(counter + 1);
    }
  };
  // counter = counter + 1;
  // setcounter(counter); // OR setcounter(counter+1)
  // phele value update hogyi then set counter mai aa gyi react andar sai raect kara value trigger huyi jaha jaha counter tha waha update kardi

  const removevalue = () => {
    if (counter > 0) {
      setcounter(counter - 1);
    }
  };

  return (
    <>
      <h1>project 02 </h1>
      <h2>counter value :{counter}</h2>
      <button onClick={addvalue}>Add value {counter}</button>
      <br></br>
      <button onClick={removevalue}>remove value {counter}</button>
      <p> fotter:{counter}</p>
    </>
  );
}

export default App;
/* INTERVIEW QUESTION
  const addvalue=()=>{
    setcounter(prevCounter=> prevCounter+1)
    setcounter(prevCounter=> prevCounter+1)
    setcounter(prevCounter=> prevCounter+1)
    setcounter(prevCounter=> prevCounter+1)
  }
    */

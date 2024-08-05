import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8); // length kop tract krna hai use state lgega

  const [numberallowed, setNumberAllowed] = useState(false); // number ya toh lo ya nhi ( default: true or false)

  const [charallowed, setCharAllowed] = useState(false);
  // input field kai andar bhi password aa rha hai usko bhii update krna hai , hence keep in state

  const [password, setpassword] = useState(""); //default kuch nhi liya becoz password genertae karwna hai

  // USE REF HOOK var mai store : kissi bhi cheez ka refernce lena h
  // kya copy krna hai , input field selcet uski range(kitna copy krna),clipboard ka access
  const passwordRef = useRef(null);
  // refernce kai liye apko har input kai andar pass krna hoga

  /*  useCallback you can prevent unnecessary re-renders, optimize performance,
   and ensure that your functions are only recreated when their dependencies change.
   */
  // PASSWORD GENATOR METHDO bar bar run hoo rha hai kabhi no. h ya kabhi ch

  const passwordGenerator = useCallback(() => {
    /* method ek jo bar bar run hona hai to isko memeory mai save karlo run karo jitna part use hota h karlo
 function ko run nhi MEMORISE BHI KRTA HAI cache mai rakhta hai
 mujhe number per bhi call krwana padega & char pe bhi call karwana padega TOH KOI TOH METHOD HOGA NA ?? : USE CALL BACK
  USE CALL BACK( FUNCTION, DEPENDICIES)
  useCall back isa React Hook that lets you cache a function definition between re-renders.
   number / char is dependcy becoz yeh change ho rha hai toh func dubara run hoga ( SET PASSWORD BHI EK DEPENDCY HAI )
  dependency kay hai EK ARRAY USKE ANADAR PASS KRNA HAI state  varaibles ko  )
  */

    let pass = ""; // simple var password jo empty hai jab password genertae hoga tabh set password sai isko dal dengye
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"; // sting kai andar data ayega jsi ssai mai password bnaoga
    if (numberallowed) str += "0123456789";
    if (charallowed) str += "!@#$%^&*-_+=[]{}~`";

    // ek password bnana h jo random select krega string mai sai
    for (let i = 1; i <= length; i++) {
      // loop lagaya random values nikal lega string mai sai
      let char = Math.floor(Math.random() * str.length + 1); //password bnana hai
      // character aya h array ki ki index value ayi h (string mai sai character ko uthna padega)
      pass += str.charAt(char); // + kiya concate kiya string koo //string mai sai character ko uthana padhna h  UPAR INDEX AYA NICHE CHARCTER AYEGA
    }
    setpassword(pass);
  }, [length, numberallowed, charallowed, setpassword]); // set password mai kuch chnage ho tabhi usko run krna password kuch change toh nhi ( infinite loop)
  // dependecny array differnce h use effect(kuhc bhi ched chad dubara call kardo) ka & use callback (optimise(isko run krna goal nhi cache mai rakho memory mai rakho) ) ka

  // isko bhi optimse krte h islye use callback
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    //  passwordRef.current?.setSelectionRange(0, 3); // if you want only certian charcarters should copy
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // same like use call back
  useEffect(() => {
    passwordGenerator();
  }, [length, numberallowed, charallowed, passwordGenerator]); // password generate kai liye usko call bhi krna hai inside use effect

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-8 py-4 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef} // refernce toh aya but click krne per kuch hona bhi chahiye
          />
          <button
            onClick={copyPasswordToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={15}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                //event pass kiya set length property call huyi
                setLength(e.target.value);
              }}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberallowed}
              id="numberInput"
              onChange={() => {
                //call back kiya u get prev value access
                setNumberAllowed((prev) => !prev); // previous value reverse (t/f FLIP)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charallowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

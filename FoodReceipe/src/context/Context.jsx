// to manage input form we state we need to use context its more clenaer otherwise props & pass ind items
// create context , provide context,then consume the context

// app is the combinantion of all nested componets

import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

// Globalstate revcies all children all, the nested compoents in this application
export default function Globalstate({ children }) {
  const [search, setSearch] = useState("");
async function handleSubmit(e)=>{
    e.preventDefault();
    try {
        
    } catch (e) {
        console.log(e);
        
        
    }

}


  // return will now provider will provide the state then consume
  return (
    <GlobalContext.Provider value={{search, setSearch}}>
      {children}
    </GlobalContext.Provider>
  );
  // we will accesss this using wrap compoent in root
}
// how to provide state var in context using value

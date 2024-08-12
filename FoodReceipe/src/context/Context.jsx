// to manage input form we state we need to use context its more clenaer otherwise props & pass ind items
// create context , provide context,then consume the context

// app is the combinantion of all nested componets

import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

// Globalstate revcies all children all, the nested compoents in this application
export default function Globalstate({ children }) {
  const [search, setSearch] = useState("");
  // check loading if api is loading
  const [loading, setLoading] = useState(false);
  // render the lsit of recepires
  const [recipeList, setRecipeList] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${search}`
      );

      const data = await res.json();
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        // reset the values
        setLoading(false);
        setSearch("");
      }
      console.log(data);
    } catch (e) {
      console.log(e);
      setLoading(false);
      setSearch("");
    }
  }
  // return will now provider will provide the state then consume
  return (
    <GlobalContext.Provider
      value={{ search, recipeList, loading, setSearch, handleSubmit }}
    >
      {children}
    </GlobalContext.Provider>
  );
  // we will accesss this using wrap compoent in root
}
// how to provide state var in context using value

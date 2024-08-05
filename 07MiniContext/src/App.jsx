// eslint-disable-next-line no-unused-vars
import { useState } from "react";

import UserContextProvider from "./context/UserContextProvider";

import "./App.css";
import Login from "./components/login";
import Profile from "./components/profile";

function App() {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <UserContextProvider>
      <h1>Context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
// jo component yaha lengye h1 mai uska access milega app
// so lets make 2 compomets

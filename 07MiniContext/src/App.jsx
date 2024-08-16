import UserContextProvider from "./context/UserContextProvider";
import "./App.css";
import Login from "./components/login";
import Profile from "./components/profile";

function App() {
  return (
    <UserContextProvider>
      <h1>Context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
//  This component handles user input (username and password) and updates the global state when the user submits the form.
// Context Usage: It uses setUser from the Context to update the shared user data.
// jo component yaha lengye h1 mai uska access milega app
// so lets make 2 compomets
/* 
Avoid Prop Drilling:

Without Context: If you didn’t use Context, you would have to pass
 the user data down through props from parent 
components to children, which can become cumbersome and error-pron
*/

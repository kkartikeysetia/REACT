import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  // jo bhi component aye as it is pass kardo proivder kai andar
  // jo api calls krni hai ya kardo FUTURE nd yaha jo access mila h usko niche provideer mai pass kardo
  const [user, setUser] = React.useState(null); //no need to import use state DIRECTLY
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
//wrap krne kai liye likhna padega {UserContext.Provider}
// koi data dengye usko hee provide krega na
// Provider sai wrap kiya but konsi value sai access de rhe ho [[value={user, setUser}]]
// jo upar access mila usko mila provider mai pass kardo

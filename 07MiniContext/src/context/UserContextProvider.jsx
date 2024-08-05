import React from "react";
import UserContext from "./UserContext";

// eslint-disable-next-line react/prop-types
const UserContextProvider = ({ children }) => {
  // jo bhi component aye as it is pass kardo
  const [user, setUser] = React.useState(null); //no need to import use state DIRECTLY
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserContextProvider;
// wrap krne kai liye likhna padega {UserContext.Provider}
// koi data dengye usko hee provide krega na
// provider sai wrap kiya but konsi value sai access de rhe ho [[value={user, setUser}]]
// jo upar access mila usko mila provider mai pass kardo

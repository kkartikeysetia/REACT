import { useContext } from "react";
import { useState } from "react";
import UserContext from "../context/UserContext";
function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // use context hook
  // yeh data bhejne kai liye h !!!!
  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };
  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        // State hava mai h value control krni h
        value={username}
        // koi change hoga vo state bhi update honi chahiye
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="username"
      ></input>
      {"     "}

      <input
        type="text"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
      ></input>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
export default Login;
// Main thing jo usercontext kai andar value h usko kaise fetch krna h
// Use state ki tarah he hook h

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Toggle.css";

/*
const Toggle = () => {
  const [color, setColor] = useState("light");

  const handleTogger = () => {
    setColor((prevColor) => (prevColor === "light" ? "dark" : "light"));
  };

  return (
    <div className={`container ${color}`}>
      <h1>Toggle</h1>
      <button onClick={handleTogger}>Theme Changer</button>
    </div>
  );
};

export default Toggle;
*/

const Toggle = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    // Redirect to the login page after signup
    navigate("/login");
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          value={name}
          placeholder="Enter your Name"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <br />
        <br />
        <input
          type="Password"
          value={password}
          placeholder="Enter your Password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <br />
        <br />
        <input
          type="Email"
          value={email}
          placeholder="Enter your Email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <br />
        <br />
        <br />
        <br />

        <button>Sign-up</button>
        <a>
          {" "}
          <button
            type="button"
            onClick={() => {
              navigate("/Login");
            }}
          >
            Login
          </button>
        </a>
      </form>
    </div>
  );
};

export default Toggle;

import { useEffect, useState } from "react";
import UserData from "./UserData";

const Profile = () => {
  const [username, setUsername] = useState("naman-makkar");
  const [inputValue, setInputValue] = useState(username); // Local state for input
  const [userdata, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchGitHubData() {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();
    console.log(data);

    if (data) {
      setUserData(data);
      setLoading(false);
    }
  }

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setUsername(inputValue); // Update the username state
    }
  };

  useEffect(() => {
    fetchGitHubData();
  }, [username]); // Fetch data only when username changes

  if (loading) {
    return <h1>Loading data! PLZ W8</h1>;
  }
  // vAR SIA HE NHI GIA STATE SAI HOGA update islye onchange mai state hoga
  return (
    <div>
      <div>
        <input
          type="text"
          value={inputValue}
          placeholder="Search username"
          onChange={(e) => setInputValue(e.target.value)} // Update input value
        />
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userdata !== null ? <UserData user={userdata} /> : null}
    </div>
  );
};

export default Profile;

import { useEffect } from "react";
import { useState } from "react";
import UserData from "./UserData";

const Profile = () => {
  const [username, setUsername] = useState("naman-makkar");
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
    if (username.trim()) {
      // Only fetch if username is not empty
      fetchGitHubData();
    }
  };

  useEffect(() => {
    if (username) {
      // Ensure username is not empty before fetching data
      fetchGitHubData();
    }
  }, [username]);

  if (loading) {
    return <h1>Loading data! PLZ W8</h1>;
  }
  return (
    <div>
      <div>
        <input
          type="text"
          value={username}
          placeholder="Search username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <button onClick={handleSubmit}>Search</button>
      </div>
      {userdata !== null ? <UserData user={userdata} /> : null}
    </div>
  );
};

export default Profile;

import { useContext } from "react";

import UserContext from "../context/UserContext";
function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return;
  <div>plz login</div>;

  return <div>Welcome {user.username}</div>;
}
export default Profile;
//Yaha data lene kai liye kya krna hoga set user ki jagah user likhna hai

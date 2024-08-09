import React from "react";

const UserData = ({ user }) => {
  const {
    name,
    login,
    followers,
    following,
    public_repos,
    avatar_url,
    created_at,
  } = user;

  const createdDate = new Date(created_at);
  return (
    <div className="user">
      <div>
        <img src={avatar_url} className="avatar" alt="User Avatar" />
      </div>
      <div>
        {/* login is username only */}
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
          User Joined On
          {`${createdDate.getDate()}  ${createdDate.toLocaleString("en-us", {
            month: "short",
          })}  ${createdDate.getFullYear()}"}   `}
        </p>
      </div>
      <div>
        <p>public_repos</p>
        <p>{public_repos}</p>
      </div>
      <div>
        <p>following</p>
        <p>{following}</p>
      </div>
      <div>
        <p>followers</p>
        <p>{followers}</p>
      </div>
    </div>
  );
};

export default UserData;

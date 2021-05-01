import React from 'react';

const UserMenu = ({ avatar, name, onLogout }) => {
  return (
    <div>
      <img src={avatar} alt="" width="" />
      <span>{name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;

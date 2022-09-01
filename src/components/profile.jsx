import React from 'react';

const Profile = (props) => {
  return (
    <>
      <div className="profile-container">
        <div className="toggle-theme-wrapper">
          <input type="checkbox" id="checkbox" />
          <label className="switch" htmlFor="checkbox">
            <span className="slider round"></span>
          </label>
        </div>
        <button className="alram">
          <i className="fa-regular fa-bell"></i>
        </button>
        <button className="profile-name">이</button>
      </div>
    </>
  );
};

export default Profile;

import React from 'react';

const Profile = () => {
  const setDark = () => {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  };

  const setLight = () => {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
  };

  const theme = localStorage.getItem('theme');
  const preferDark = window.matchMedia('(prefers-color-scheme:dark)').matches
    ? 'dark'
    : 'light';

  const getUserTheme = () => (theme ? theme : preferDark);

  window.onload = function () {
    if (getUserTheme === 'dark') {
      localStorage.setItem('theme', 'dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  function toggleTheme(e) {
    const className = e.target.checked;
    if (className) {
      setDark();
    } else {
      setLight();
    }
  }
  return (
    <>
      <div className="profile-container">
        <div className="toggle-theme-wrapper">
          <input
            type="checkbox"
            id="checkbox"
            className="checkbox"
            onChange={toggleTheme}
          />
          <label className="switch" htmlFor="checkbox">
            <span className="slider round"></span>
          </label>
        </div>
        <button className="alram">
          <i className="fa-solid fa-bell"></i>
        </button>
        <button className="profile-name">이</button>
      </div>
    </>
  );
};

export default Profile;

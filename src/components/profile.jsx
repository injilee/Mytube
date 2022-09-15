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

  const storedTheme = localStorage.getItem('theme');
  const preferDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme:dark)').matches;

  // localStorage에 dark가 입력되었거나, 사용자가 모드를 적용하지 않은 상태인 경우
  const defaultDark =
    storedTheme === 'dark' || (storedTheme === null && preferDark);

  if (defaultDark) {
    setDark();
  }

  function toggleTheme(e) {
    const className = e.target.checked;
    if (className) {
      setDark();
    } else {
      setLight();
    }
  }
  return (
    <div className="profile-container">
      <div className="toggle-theme-wrapper">
        <input
          type="checkbox"
          id="checkbox"
          className="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
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
  );
};

export default Profile;

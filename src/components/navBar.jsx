import React from 'react';
import SearchForm from './searchForm';
import Profile from './profile';

const NavBar = (props) => {
  return (
    <nav className="navBar">
      <div className="logo-container">
        <img className="logo" src="images/logo.png" alt="logo" />
        <h1 className="title">Mytube</h1>
      </div>
      <SearchForm></SearchForm>
      <Profile></Profile>
    </nav>
  );
};

export default NavBar;

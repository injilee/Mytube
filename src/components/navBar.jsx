import React, { Component } from 'react';
import SearchForm from './searchForm';
import Profile from './profile';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navBar">
        <div className="logo-container">
          <img className="logo" src="images/logo.png" alt="logo" />
          <h1 className="title">Youtube</h1>
        </div>
        <SearchForm></SearchForm>
        <Profile></Profile>
      </nav>
    );
  }
}

import React, { Component } from 'react';
import SearchForm from './searchForm';
import Profile from './profile';

export default class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="logo-container">
          <img src="images/logo.png" alt="logo" />
          <h1>Youtube</h1>
        </div>
        <SearchForm></SearchForm>
        <Profile></Profile>
      </nav>
    );
  }
}

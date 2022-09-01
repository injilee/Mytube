import React, { Component } from 'react';

export default class SearchForm extends Component {
  render() {
    return (
      <form action="" className="searchForm">
        <div className="search-container">
          <input type="text" placeholder="Search" className="searchInput" />
          <button className="searchBtn">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    );
  }
}

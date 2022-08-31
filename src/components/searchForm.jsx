import React, { Component } from 'react';

export default class SearchForm extends Component {
  render() {
    return (
      <form action="">
        <input type="text" placeholder="Search" />
        <button>
          <img src="images/search.png" alt="search" />
        </button>
      </form>
    );
  }
}

import React, { Component } from 'react';
import styles from './searchFrom.module.css';

export default class SearchForm extends Component {
  render() {
    return (
      <form action="" className={styles.searchForm}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search"
            className={styles.searchInput}
          />
          <button className={styles.searchBtn}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </form>
    );
  }
}

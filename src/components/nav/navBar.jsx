import React from 'react';
import SearchForm from './searchForm';
import Profile from './profile';
import styles from './navBar.module.css';

const NavBar = (props) => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="images/logo.png" alt="logo" />
        <h1 className={styles.title}>Mytube</h1>
      </div>
      <SearchForm></SearchForm>
      <Profile></Profile>
    </nav>
  );
};

export default NavBar;

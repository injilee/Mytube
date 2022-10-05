import React from 'react';
import SearchForm from './searchForm';
import Profile from './profile';
import styles from './navBar.module.css';

const NavBar = (props) => {
  const handleHome = () => {
    window.location.reload();
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="images/logo.png" alt="logo" />
        <h1 onClick={handleHome} className={styles.title}>
          Mytube
        </h1>
      </div>
      <SearchForm onSearch={props.onSearch}></SearchForm>
      <Profile></Profile>
    </nav>
  );
};

export default NavBar;

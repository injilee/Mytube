import React, { memo, useRef } from 'react';
import styles from './searchFrom.module.css';

const SearchForm = memo(({ onSearch }) => {
  const textInput = useRef();

  const handleSearch = () => {
    const value = textInput.current.value;
    onSearch(value);
    textInput.current.value = '';
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search"
        className={styles.searchInput}
        onKeyPress={onKeyPress}
        ref={textInput}
      />
      <button type="submit" className={styles.searchBtn} onClick={onClick}>
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
});

export default SearchForm;

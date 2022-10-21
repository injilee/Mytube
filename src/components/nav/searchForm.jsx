import React, { memo, useRef } from 'react';
import styles from './searchFrom.module.css';

const SearchForm = memo(({ onSearch }) => {
  const textInput = useRef();
  const searchForm = useRef();
  const moblieSearchBtn = useRef();
  const exitBtn = useRef();

  const handleSearch = () => {
    const value = textInput.current.value;
    onSearch(value);
    textInput.current.value = '';
  };

  const onInputBox = () => {
    searchForm.current.style.display = 'flex';
  };

  const onExit = (e) => {
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'path') {
      searchForm.current.style.display = 'none';
    }
    return;
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
    <>
      <div className={styles.desktopSearchContainer}>
        <input
          type="text"
          placeholder="Search"
          className={styles.desktopSearchInput}
          onKeyPress={onKeyPress}
          ref={textInput}
        />
        <button type="submit" className={styles.searchBtn} onClick={onClick}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>

      <button
        type="button"
        className={styles.showSearchForm}
        onClick={onInputBox}
        ref={moblieSearchBtn}
      >
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>

      <div className={styles.searchContainer_wrap} ref={searchForm}>
        <div className={styles.mobileSearchContainer}>
          <input
            type="text"
            placeholder="Search"
            className={styles.mobileSearchInput}
            onKeyPress={onKeyPress}
            ref={textInput}
          />
          <button type="button" className={styles.searchBtn2} onClick={onClick}>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
        <button
          type="button"
          className={styles.exitSearchForm}
          onClick={onExit}
          ref={exitBtn}
        >
          <i className="fa-solid fa-x"></i>
        </button>
      </div>
    </>
  );
});

export default SearchForm;

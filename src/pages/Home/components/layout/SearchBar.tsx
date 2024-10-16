import React, { useState, useRef } from "react";
import * as styles from "./SearchBar.css";

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: 검색 처리
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchForm}>
      <input
        ref={inputRef}
        id="search"
        type="search"
        placeholder="검색어를 입력해주세요.."
        className={styles.searchInput}
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button type="submit" className={styles.searchButton}>
        🔍
      </button>
    </form>
  );
};

export default SearchBar;

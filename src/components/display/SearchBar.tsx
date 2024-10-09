import React, { useState, useRef } from "react";
import * as styles from "./SearchBar.css";
interface SearchBarProps {
  placeholder: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
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
        placeholder={placeholder}
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

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import * as styles from "./Header.css.ts";
import { Sidebar } from "./Sidebar";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    //TODO : 검색처리
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const MobileHeader = () => (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.menuIcon} onClick={toggleSidebar}>
          ☰
        </div>
        <div className={styles.logo} onClick={() => navigate("/")}>
          service
        </div>
        <div className={styles.userActions}>
          {/* <span className={styles.userMenu}>로그인/가입</span>
          <span className={styles.userMenu}>전문가 가입안내</span> */}
        </div>
      </div>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          placeholder="업무/전문가/질문답변 검색"
          className={styles.searchInput}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className={styles.searchButton}>
          🔍
        </button>
      </form>
    </header>
  );

  const DesktopHeader = () => (
    <header className={styles.desktopHeader}>
      <div className={styles.desktopTop}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          service
        </div>
        <form onSubmit={handleSearch} className={styles.desktopSearchForm}>
          <input
            type="text"
            placeholder="업무/전문가/질문답변 검색"
            className={styles.desktopSearchInput}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className={styles.desktopSearchButton}>
            🔍
          </button>
        </form>
        <div className={styles.desktopUserActions}>
          <span className={styles.userMenu}>로그인</span>
          <span className={styles.userMenu}>전문가 가입안내</span>
        </div>
      </div>
      <nav className={styles.desktopNav}>
        <span className={styles.navItem}>전문가찾기</span>
        <span className={styles.navItem}>질문답변</span>
        <span className={styles.navItem}>포스트</span>
        <span className={styles.navItem}>비용안내</span>
      </nav>
    </header>
  );

  return (
    <>
      {isDesktop ? <DesktopHeader /> : <MobileHeader />}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

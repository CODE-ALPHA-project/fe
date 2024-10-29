import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { BellDot, Menu } from "lucide-react";
import * as styles from "./header.css";
import Sidebar from "../../pages/Home/components/layout/Sidebar";
import SearchBar from "../../pages/Home/components/layout/SearchBar";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const isDesktop = useMediaQuery({ minWidth: 768 });

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const MobileHeader = () => (
    <header className={styles.header}>
      <div className={styles.top}>
        <div className={styles.menuIcon} onClick={toggleSidebar}>
          <Menu size={24} />
        </div>
        <div className={styles.logo} onClick={() => navigate("/")}>
          LAWBOT
        </div>
        <div className={styles.mobileRightSection}>
          <div className={styles.menuIcon}>
            <BellDot size={24} />
          </div>
          <div className={styles.userActions}></div>
        </div>
      </div>
      <div className={styles.searchBarWrapper}>
        <SearchBar />
      </div>
    </header>
  );

  const DesktopHeader = () => (
    <header className={styles.desktopHeader}>
      <div className={styles.desktopTop}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          LAWBOT
        </div>
        <div className={styles.searchBarWrapper}>
          <SearchBar />
        </div>
        <div className={styles.desktopUserActions}>
          <span
            className={`${styles.userMenu} ${styles.loginMenu}`}
            onClick={() => navigate("/signin")}
          >
            로그인
          </span>
          <span className={`${styles.userMenu} ${styles.signupMenu}`}>
            전문가 가입안내
          </span>
        </div>
      </div>
      <nav className={styles.desktopNav}>
        <span className={styles.navItem}>전문가찾기</span>
        <span className={styles.navItem}>질문답변</span>
        <span className={styles.navItem}>포스트</span>
        <span className={styles.navItem}>비용안내</span>
        <span className={styles.navItem} onClick={() => navigate("/chatting")}>
          채팅하기
        </span>
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

export default Header;

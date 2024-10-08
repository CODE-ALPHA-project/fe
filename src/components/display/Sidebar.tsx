import React from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "./Sidebar.css.ts";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      <div className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}>
        <div className={styles.sidebarHeader}>
          <span className={styles.sidebarLogo}>service</span>
          <button className={styles.sidebarCloseButton} onClick={onClose}>
            ×
          </button>
        </div>
        <div className={styles.sidebarContent}>
          <div className={styles.sidebarWelcome}>
            반갑습니다. 로그인해주세요
          </div>
          <div
            className={styles.sidebarLoginButton}
            onClick={() => handleNavigation("/login")}
          >
            로그인/회원가입
          </div>
          <nav>
            <div
              className={styles.sidebarNavItem}
              onClick={() => handleNavigation("/find-expert")}
            >
              전문가찾기
            </div>
            <div
              className={styles.sidebarNavItem}
              onClick={() => handleNavigation("/qa")}
            >
              질문답변
            </div>
            <div
              className={styles.sidebarNavItem}
              onClick={() => handleNavigation("/posts")}
            >
              포스트
            </div>
            <div
              className={styles.sidebarNavItem}
              onClick={() => handleNavigation("/pricing")}
            >
              비용안내
            </div>
            <div
              className={styles.sidebarNavItem}
              onClick={() => handleNavigation("/expert-signup")}
            >
              전문가 가입안내
            </div>
            {/* <div
              className={styles.sidebarNavItem}
              onClick={() => handleNavigation("/help-center")}
            >
              헬프센터
            </div> */}
          </nav>
        </div>
      </div>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
        onClick={onClose}
      ></div>
    </>
  );
};

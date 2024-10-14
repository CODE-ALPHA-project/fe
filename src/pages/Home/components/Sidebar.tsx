import React from "react";
import { useNavigate } from "react-router-dom";
import * as styles from "./sidebar.css";
import NavItem from "./NavItem";

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
            <NavItem
              onClick={() => handleNavigation("/expert")}
              ItemName="전문가 찾기"
            />
            <NavItem
              onClick={() => handleNavigation("/qa")}
              ItemName="질문답변"
            />
            <NavItem
              onClick={() => handleNavigation("/posts")}
              ItemName="포스트"
            />
            <NavItem
              onClick={() => handleNavigation("/pricing")}
              ItemName="비용안내"
            />
            <NavItem
              onClick={() => handleNavigation("/expert-signup")}
              ItemName="전문가 가입안내"
            />
            <NavItem
              onClick={() => handleNavigation("/chatting")}
              ItemName="챗봇"
            />
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

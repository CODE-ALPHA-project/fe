import React, { useEffect } from "react";
import { MessageSquare, Settings, X } from "lucide-react";
import * as styles from "./Sidebar.css";
import img1 from "../../../assets/img1.webp";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  // 사이드바가 열릴 때 body 스크롤 방지
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // ESC 키로 사이드바 닫기
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {/* 백드롭 */}
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* 사이드바 */}
      <aside
        className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}
        role="complementary"
        aria-label="Chat history sidebar"
      >
        <div className={styles.sidebarHeader}>
          <div className={styles.logo}>History</div>
          <button
            onClick={onClose}
            className={styles.closeSidebarButton}
            aria-label="Close sidebar"
          >
            <X size={20} />
          </button>
        </div>

        <nav className={styles.nav}>
          <button className={styles.navItem}>
            <MessageSquare className={styles.navIcon} size={20} />
            New Chat
          </button>
          <button className={styles.navItem}>
            <Settings className={styles.navIcon} size={20} />
            Settings
          </button>
        </nav>

        <div className={styles.profile}>
          <img src={img1} alt="User profile" className={styles.avatar} />
          <span className={styles.userName}>User</span>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

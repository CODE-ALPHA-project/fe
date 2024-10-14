// component : 채팅 사이드바 //

import React from "react";
import { MessageSquare, Settings, X } from "lucide-react";
import * as styles from "./Sidebar.css";
import img1 from "../../../assets/img1.webp";
interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}>
      <div className={styles.sidebarHeader}>
        <div className={styles.logo}>History</div>
        {isOpen && (
          <button onClick={onClose} className={styles.closeSidebarButton}>
            <X size={24} />
          </button>
        )}
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
        <img src={img1} alt="User" className={styles.avatar} />
        <span>User</span>
      </div>
    </aside>
  );
};

export default Sidebar;

// component : 채팅 헤더 //

import React from "react";
import { Menu, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as styles from "./ChatHeader.css";

interface ChatHeaderProps {
  toggleSidebar: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <header className={styles.chatHeader}>
      <button onClick={toggleSidebar} className={styles.menuButton}>
        <Menu size={20} />
      </button>
      <h1 className={styles.chatTitle}>쏘비스</h1>
      <button className={styles.homeButton} onClick={() => navigate("/")}>
        <Home size={20} />
      </button>
    </header>
  );
};

export default ChatHeader;

import React from "react";
import { Home, Menu } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as styles from "./ChatHeader.css";

interface ChatHeaderProps {
  toggleSidebar: () => void;
  isConnected: boolean;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ toggleSidebar }) => {
  const navigate = useNavigate();

  return (
    <header className={styles.chatHeader}>
      <div className={styles.leftSection}>
        <button onClick={toggleSidebar} className={styles.button}>
          <Menu size={20} />
        </button>
        <h1 className={styles.chatTitle}>LAWBOT</h1>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.connectionStatus}></div>

        <button onClick={() => navigate("/")} className={styles.button}>
          <Home size={20} />
        </button>
      </div>
    </header>
  );
};

export default ChatHeader;

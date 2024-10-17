import React from "react";
import { Home, Menu, Wifi, WifiOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import * as styles from "./ChatHeader.css";

interface ChatHeaderProps {
  toggleSidebar: () => void;
  isConnected: boolean;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  toggleSidebar,
  isConnected,
}) => {
  const navigate = useNavigate();

  return (
    <header className={styles.chatHeader}>
      <button onClick={toggleSidebar} className={styles.menuButton}>
        <Menu size={20} />
      </button>
      <h1 className={styles.chatTitle}>E노무</h1>
      <div className={`${styles.connectionStatus}`}>
        {isConnected ? (
          <Wifi size={20} color="green" />
        ) : (
          <WifiOff size={20} color="red" />
        )}
        <span>{isConnected ? "연결됨" : "연결 끊김"}</span>
      </div>
      <button className={styles.homeButton} onClick={() => navigate("/")}>
        <Home size={20} />
      </button>
    </header>
  );
};

export default ChatHeader;

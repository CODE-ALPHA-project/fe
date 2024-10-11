import React, { useState } from "react";
import * as styles from "./ChatPage.css";
import { MessageSquare, Settings, Menu, X, HomeIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

const ChatPage = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  //   const [isMobile, setIsMobile] = useState(false);

  //   useEffect(() => {
  //     const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
  //     checkIfMobile();
  //     window.addEventListener("resize", checkIfMobile);
  //     return () => window.removeEventListener("resize", checkIfMobile);
  //   }, []);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text: input,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      setInput("");
      simulateAIResponse();
    }
  };

  const simulateAIResponse = () => {
    setTimeout(() => {
      const aiMessage: Message = {
        id: Date.now(),
        text: "어케 알았노?",
        sender: "ai",
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    }, 1000);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.themeClass}>
      <div className={styles.container}>
        <aside
          className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : ""}`}
        >
          <div className={styles.sidebarHeader}>
            <div className={styles.logo}>역사</div>
            {isSidebarOpen && (
              <button
                onClick={toggleSidebar}
                className={styles.closeSidebarButton}
              >
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
            <img
              src="/placeholder.svg?height=32&width=32"
              alt="User"
              className={styles.avatar}
            />
            <span>User</span>
          </div>
        </aside>
        <main
          className={`${styles.chatArea} ${isSidebarOpen ? styles.chatAreaWithSidebar : ""}`}
        >
          <header className={styles.chatHeader}>
            {!isSidebarOpen && (
              <button onClick={toggleSidebar} className={styles.menuButton}>
                <Menu size={24} />
              </button>
            )}
            <h1 className={styles.chatTitle}>쏘비스</h1>
            <HomeIcon
              className={styles.chatBack}
              onClick={() => navigate(-1)}
            />
          </header>
          <div className={styles.chatMessages}>
            {messages.map((message) => (
              <div
                key={message.id}
                className={
                  message.sender === "user"
                    ? styles.userMessage
                    : styles.aiMessage
                }
              >
                <div
                  className={
                    message.sender === "user"
                      ? styles.userBubble
                      : styles.aiBubble
                  }
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.inputArea}>
            <form onSubmit={handleSendMessage} className={styles.inputForm}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="입력 여기에 문자"
                className={styles.input}
              />
              <button type="submit" className={styles.sendButton}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ChatPage;

import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import * as styles from "./ChatPage.css";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
}

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSendMessage = (text: string) => {
    if (text.trim()) {
      const newMessage: Message = {
        id: Date.now(),
        text,
        sender: "user",
      };
      setMessages([...messages, newMessage]);
      dummyRes();
    }
  };

  const dummyRes = () => {
    setTimeout(() => {
      const res: Message = {
        id: Date.now(),
        text: "어케 알았노?",
        sender: "ai",
      };
      setMessages((prevMessages) => [...prevMessages, res]);
    }, 1000);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.themeClass}>
      <div className={styles.container}>
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <ChatArea
          messages={messages}
          setMessages={setMessages}
          input={input}
          setInput={setInput}
          onSendMessage={handleSendMessage}
          toggleSidebar={toggleSidebar}
        />
      </div>
    </div>
  );
};

export default ChatPage;

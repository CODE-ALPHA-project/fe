import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import * as styles from "./ChatPage.css";
import { MessageRequestProps, MessageResponseProps } from "./types/type";

const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<MessageRequestProps[]>([]);
  const [input, setInput] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //TODO : useQuery  AI 및 백엔드 서버 연결

  const handleSendMessage = (text: string) => {
    if (text.trim()) {
      const newMessage: MessageRequestProps = {
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
      const res: MessageResponseProps = {
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

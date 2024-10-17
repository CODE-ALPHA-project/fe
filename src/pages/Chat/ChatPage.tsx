import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import * as styles from "./ChatPage.css";
import { MessageRequestProps, MessageResponseProps } from "./types/type";
import { useChat } from "../../hooks/useChat";

const ChatPage: React.FC = () => {
  const [input, setInput] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { sendMessage, connected, messages: chatMessages } = useChat({
    serverUrl: "http://192.168.0.25:8080/ws",
    topic: "/topic/messages",
    chatRoomId: "12345"
  });

  const [displayMessages, setDisplayMessages] = useState<(MessageRequestProps | MessageResponseProps)[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Listen for changes in chatMessages and update displayMessages
  useEffect(() => {
    if (chatMessages.length > 0) {
      const latestMessage = chatMessages[chatMessages.length - 1];
      const newMessage: MessageResponseProps = {
        id: Date.now(),
        text: latestMessage.answer,
        sender: "ai",
        references: latestMessage.references
      };
      setDisplayMessages(prevMessages => [...prevMessages, newMessage]);
    }
  }, [chatMessages]);

  // Scroll to the bottom whenever displayMessages is updated
  useEffect(() => {
    scrollToBottom();
  }, [displayMessages]);

  const handleSendMessage = (text: string) => {
    if (text.trim() && connected) {
      const newMessage: MessageRequestProps = {
        id: Date.now(),
        text,
        sender: "user",
      };
      sendMessage(text);
      setDisplayMessages((prevMessages) => [...prevMessages, newMessage]);
      setInput("");
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={styles.themeClass}>
      <div className={styles.container}>
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <ChatArea
          messages={displayMessages}
          setMessages={setDisplayMessages}
          input={input}
          setInput={setInput}
          onSendMessage={handleSendMessage}
          toggleSidebar={toggleSidebar}
          isConnected={connected}
          messagesEndRef={messagesEndRef}
        />
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatPage;

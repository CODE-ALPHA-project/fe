import React, { useEffect, useRef, useState } from "react";
import { useChat } from "../../hooks/useChat";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import { MessageRequestProps, MessageResponseProps } from "./types/type";
import { cn } from "@/lib/utils";

const ChatPage: React.FC = () => {
  // State management
  const [input, setInput] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [displayMessages, setDisplayMessages] = useState<
    (MessageRequestProps | MessageResponseProps)[]
  >([]);

  // Refs
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Chat connection
  const {
    sendMessage,
    connected,
    messages: chatMessages,
  } = useChat({
    serverUrl: "http://192.168.174.133:8080/ws",
    topic: "/topic/messages",
    chatRoomId: "12345",
  });

  // Update messages when new ones arrive
  useEffect(() => {
    if (chatMessages.length > 0) {
      const latestMessage = chatMessages[chatMessages.length - 1];
      const newMessage: MessageResponseProps = {
        id: Date.now(),
        text: latestMessage.answer,
        sender: "ai",
        references: latestMessage.references,
      };
      setDisplayMessages((prevMessages) => [...prevMessages, newMessage]);
    }
  }, [chatMessages]);

  // Message handlers
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

  return (
    <div
      className={cn(
        "w-full h-screen",
        "bg-background text-foreground",
        "overflow-hidden",
      )}
    >
      <div className="relative flex h-full">
        {/* Sidebar with backdrop for mobile */}
        <div
          className={cn(
            "absolute inset-0 bg-background/80 backdrop-blur-sm z-40",
            "lg:hidden",
            isSidebarOpen ? "block" : "hidden",
          )}
          onClick={() => setIsSidebarOpen(false)}
        />

        {/* Sidebar */}
        <div
          className={cn(
            "absolute z-50 h-full w-72",
            "lg:relative lg:block",
            "transition-transform duration-300 ease-in-out",
            "bg-background border-r",
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0",
          )}
        >
          <Sidebar
            isOpen={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
          />
        </div>
        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <ChatArea
            messages={displayMessages}
            setMessages={setDisplayMessages}
            input={input}
            setInput={setInput}
            onSendMessage={handleSendMessage}
            toggleSidebar={() => setIsSidebarOpen(true)}
            isConnected={connected}
          />
          <div ref={messagesEndRef} />
        </div>
      </div>
    </div>
  );
};

export default ChatPage;

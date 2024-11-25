import { useEffect, useRef, useState } from "react";
import { useChat } from "../../hooks/useChat";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import { MessageRequestProps, MessageResponseProps } from "./types/type";
import { cn } from "@lib/utils";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

const ChatPage: ActivityComponentType = () => {
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
    serverUrl: "https://nomu.lisoft.kr/ws",
    topic: "/topic/messages",
    chatRoomId: "12345",
  });

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
    <AppScreen appBar={{ title: "Chatting" }}>
      <div
        className={cn(
          "w-full h-screen",
          "bg-background text-foreground",
          "overflow-hidden",
        )}
      >
        <div className="relative flex h-full">
          <div
            className={cn(
              "absolute inset-0 bg-background/80 backdrop-blur-sm z-40",
              "lg:hidden",
              isSidebarOpen ? "block" : "hidden",
            )}
            onClick={() => setIsSidebarOpen(false)}
          />
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
    </AppScreen>
  );
};

export default ChatPage;

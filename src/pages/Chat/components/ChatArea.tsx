import React,{RefObject} from "react";
import ChatHeader from "../layout/ChatHeader";
import ChatMessages from "./ChatMessage";
import ChatInput from "./ChatInput";
import * as styles from "./ChatArea.css";
import { MessageRequestProps, MessageResponseProps } from "../types/type";

interface ChatAreaProps {
  messages: (MessageRequestProps | MessageResponseProps)[];
  setMessages: React.Dispatch<React.SetStateAction<(MessageRequestProps | MessageResponseProps)[]>>;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  onSendMessage: (text: string) => void;
  toggleSidebar: () => void;
  isConnected: boolean;
  messagesEndRef: RefObject<HTMLDivElement>;
  // error:string;
}
//setMessages,
const ChatArea: React.FC<ChatAreaProps> =
  ({ messages,  input, setInput, onSendMessage, toggleSidebar, isConnected,}) =>
  {
  const handleFileUpload = () => {
    //TODO : 파일 업로드 기능 구현
  };
  return (
    <main className={styles.chatArea}>
      <ChatHeader toggleSidebar={toggleSidebar} isConnected={isConnected} />
      <div className={styles.chatContent}>
        {!isConnected && (
          <div className={styles.connectionStatus}>
            연결이 끊어졌습니다. 재연결 중...
          </div>
        )}
        <div className={styles.messagesContainer}>
          <ChatMessages messages={messages} />
        </div>
      </div>
      <div className={styles.inputWrapper}>
        <ChatInput
          input={input}
          setInput={setInput}
          onSendMessage={onSendMessage}
          onFileUpload={handleFileUpload}
          isDisabled={!isConnected}
        />
      </div>
    </main>
  );
};

export default ChatArea;
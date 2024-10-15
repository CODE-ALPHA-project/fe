// component : 채팅 영역 //

import React from "react";
import ChatHeader from "../layout/ChatHeader";
import ChatMessages from "./ChatMessage";
import ChatInput from "./ChatInput";
import * as styles from "./ChatArea.css";
import { MessageRequestProps } from "../types/type";

interface ChatAreaProps {
  messages: MessageRequestProps[];
  setMessages: React.Dispatch<React.SetStateAction<MessageRequestProps[]>>;
  input: string;
  setInput: (input: string) => void;
  onSendMessage: (text: string) => void;
  toggleSidebar: () => void;
}

const ChatArea: React.FC<ChatAreaProps> = ({
  messages,
  // setMessages,
  input,
  setInput,
  onSendMessage,
  toggleSidebar,
}) => {
  // const [uploadProgress, setUploadProgress] = useState<number | null>(null);

  const handleFileUpload = () => {
    //TODO
  };

  return (
    <main className={styles.chatArea}>
      <ChatHeader toggleSidebar={toggleSidebar} />
      <div className={styles.chatContent}>
        <div className={styles.messagesContainer}>
          <ChatMessages messages={messages} />
          {/* {uploadProgress !== null && (
            <div className={styles.uploadProgress}>
              파일 업로드 중: {uploadProgress}%
            </div>
          )} */}
        </div>
      </div>
      <div className={styles.inputWrapper}>
        <ChatInput
          input={input}
          setInput={setInput}
          onSendMessage={onSendMessage}
          onFileUpload={handleFileUpload}
        />
      </div>
    </main>
  );
};

export default ChatArea;

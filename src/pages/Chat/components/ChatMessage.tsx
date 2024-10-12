// component : 채팅 메시지 //

import React from "react";
import * as styles from "./ChatMessage.css";

interface Message {
  id: number;
  text: string;
  sender: "user" | "ai";
  file?: {
    name: string;
    url: string;
    type: string;
  };
}

interface ChatMessageProps {
  messages: Message[];
}

const ChatMessage: React.FC<ChatMessageProps> = ({ messages }) => {
  return (
    <div className={styles.chatMessages}>
      {messages.map((message) => (
        <div
          key={message.id}
          className={
            message.sender === "user" ? styles.userMessage : styles.aiMessage
          }
        >
          <div
            className={
              message.sender === "user" ? styles.userBubble : styles.aiBubble
            }
          >
            {message.text}
            {message.file && (
              <div className={styles.fileAttachment}>
                {message.file.type.startsWith("image/") ? (
                  <img
                    src={message.file.url}
                    alt={message.file.name}
                    className={styles.attachedImage}
                  />
                ) : (
                  <a
                    href={message.file.url}
                    download={message.file.name}
                    className={styles.attachedFile}
                  >
                    {message.file.name}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatMessage;

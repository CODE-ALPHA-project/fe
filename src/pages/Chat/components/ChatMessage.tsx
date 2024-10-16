// component : 채팅 메시지 //

import React from "react";
import * as styles from "./ChatMessage.css";
import { MessageRequestProps } from "../types/type";

interface ChatMessageProps {
  messages: MessageRequestProps[];
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

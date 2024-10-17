import React, { useState, useEffect } from "react";
import * as styles from "./ChatMessage.css";
import { MessageRequestProps } from "../types/type";
import ReactMarkdown from "react-markdown";

interface ChatMessageProps {
  messages: MessageRequestProps[];
}

const ChatMessage: React.FC<ChatMessageProps> = ({ messages }) => {
  const [typingIndex, setTypingIndex] = useState(-1);
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (typingIndex >= 0 && typingIndex < messages.length) {
      const message = messages[typingIndex];
      if (message.sender === "ai") {
        let index = 0;
        const timer = setInterval(() => {
          setDisplayedText(message.text.slice(0, index));
          index++;
          if (index > message.text.length) {
            clearInterval(timer);
            setTypingIndex(typingIndex + 1);
          }
        }, 20); // 타이핑 속도 조절 (밀리초 단위)
        return () => clearInterval(timer);
      } else {
        setTypingIndex(typingIndex + 1);
      }
    }
  }, [typingIndex, messages]);

  useEffect(() => {
    if (messages.length > 0 && typingIndex === -1) {
      setTypingIndex(0);
    }
  }, [messages]);

  return (
    <div className={styles.chatMessages}>
      {messages.map((message, index) => (
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
            {message.sender === "ai" ? (
              <ReactMarkdown>
                {index === typingIndex ? displayedText : message.text}
              </ReactMarkdown>
            ) : (
              message.text
            )}
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
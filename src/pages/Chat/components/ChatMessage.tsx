import React, { useEffect, useState, useRef } from "react";
import * as styles from "./ChatMessage.css";
import { MessageRequestProps } from "../types/type";
import ReactMarkdown from "react-markdown";

interface ChatMessageProps {
  messages: MessageRequestProps[];
}

const ChatMessage: React.FC<ChatMessageProps> = ({ messages }) => {
  const [typingIndex, setTypingIndex] = useState(-1);
  const [displayedText, setDisplayedText] = useState("");
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typingIndex >= 0 && typingIndex < messages.length) {
      const message = messages[typingIndex];
      if (message.sender === "ai") {
        let index = 0;
        const textLength = message.text.length;

        const baseSpeed = 20;
        const dynamicSpeed = Math.max(
          10,
          Math.min(30, baseSpeed - Math.floor(textLength / 500)),
        );

        const timer = setInterval(() => {
          setDisplayedText((prevText) => {
            const newText = message.text.slice(0, index);
            // 새로운 줄이 추가될 때마다 스크롤
            if (newText.split("\n").length > prevText.split("\n").length) {
              messageEndRef.current?.scrollIntoView({ behavior: "auto" });
            }
            return newText;
          });

          index++;
          if (index > textLength) {
            clearInterval(timer);
            setTypingIndex(typingIndex + 1);
            messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
          }
        }, dynamicSpeed);

        return () => clearInterval(timer);
      } else {
        setTypingIndex(typingIndex + 1);
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
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
              <div className={styles.markdownContainer}>
                <ReactMarkdown>
                  {index === typingIndex ? displayedText : message.text}
                </ReactMarkdown>
              </div>
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
      <div ref={messageEndRef} />
    </div>
  );
};

export default ChatMessage;

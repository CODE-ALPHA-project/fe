import React, { useEffect, useRef, useState } from "react";
import ChatHeader from "../layout/ChatHeader";
import ChatMessages from "./ChatMessage";
import ChatInput from "./ChatInput";
import * as styles from "./ChatArea.css";
import { MessageRequestProps, MessageResponseProps } from "../types/type";

interface ChatAreaProps {
  messages: (MessageRequestProps | MessageResponseProps)[];
  setMessages: React.Dispatch<
    React.SetStateAction<(MessageRequestProps | MessageResponseProps)[]>
  >;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  onSendMessage: (text: string) => void;
  toggleSidebar: () => void;
  isConnected: boolean;
}

const ChatArea: React.FC<ChatAreaProps> = ({
  messages,
  input,
  setInput,
  onSendMessage,
  toggleSidebar,
  isConnected,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<MutationObserver | null>(null);
  const [autoScroll, setAutoScroll] = useState(true);
  const [prevMessagesLength, setPrevMessagesLength] = useState(messages.length);

  // 스크롤 위치 계산을 위한 함수
  const isNearBottom = () => {
    const container = containerRef.current;
    if (!container) return false;

    const threshold = 200;
    return (
      container.scrollHeight - container.scrollTop - container.clientHeight <
      threshold
    );
  };

  // 스크롤을 최하단으로 이동시키는 함수
  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    if (messagesEndRef.current && autoScroll) {
      messagesEndRef.current.scrollIntoView({ behavior });
    }
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    if (containerRef.current) {
      setAutoScroll(isNearBottom());
    }
  };

  // DOM 변화 감지 및 스크롤 처리를 위한 MutationObserver 설정
  useEffect(() => {
    const messagesContainer = containerRef.current;
    if (!messagesContainer) return;

    observerRef.current = new MutationObserver(() => {
      // DOM이 변경될 때마다 스크롤 위치 조정
      if (autoScroll) {
        scrollToBottom("auto");
      }
    });

    observerRef.current.observe(messagesContainer, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [autoScroll]);

  // 메시지 배열이 변경될 때 스크롤 처리
  useEffect(() => {
    if (messages.length > prevMessagesLength) {
      scrollToBottom("smooth");
    }
    setPrevMessagesLength(messages.length);
  }, [messages, prevMessagesLength]);

  // 스크롤 이벤트 리스너 등록
  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
      return () => container.removeEventListener("scroll", handleScroll);
    }
  }, []);

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
        <div
          className={styles.messagesContainer}
          ref={containerRef}
          style={{
            overflowY: "auto",
            height: "calc(100vh - 160px)",
            scrollBehavior: "smooth",
          }}
        >
          <ChatMessages messages={messages} />
          <div ref={messagesEndRef} style={{ height: "1px", width: "100%" }} />
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

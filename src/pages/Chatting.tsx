import React from "react";
import InputBox from "../components/InputBox";
import { pageContainer, chatArea, inputArea } from "./chatting.css";

// Component
const ChattingPage = () => {
  const handleSendMessage = (message: string) => {
    console.log("Sent message:", message);
    // 여기에 메시지 전송 로직을 구현
  };

  return (
    <div className={pageContainer}>
      <div className={chatArea}>{/* 여기에 채팅 메시지들을 렌더링 */}</div>
      <div className={inputArea}>
        <InputBox onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChattingPage;

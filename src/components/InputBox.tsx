import React, { useState } from "react";
import { chatInputContainer, chatInput, sendButton } from "./InputBox.css.ts";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const InputBox: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form className={chatInputContainer} onSubmit={handleSubmit}>
      <input
        type="text"
        className={chatInput}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="메시지를 입력하세요..."
      />
      <button type="submit" className={sendButton}>
        보내기
      </button>
    </form>
  );
};

export default InputBox;

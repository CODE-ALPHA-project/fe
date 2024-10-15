import React, { useState, useRef } from "react";
import { Paperclip, Send } from "lucide-react";
import * as styles from "./ChatInput.css";
import UploadModal from "./UploadModal";
interface ChatInputProps {
  input: string;
  setInput: (input: string) => void;
  onSendMessage: (text: string) => void;
  onFileUpload: (file: File) => void;
}

const ChatInput: React.FC<ChatInputProps> = ({
  input,
  setInput,
  onSendMessage,
  onFileUpload,
}) => {
  const [isUploadOptionsVisible, setIsUploadOptionsVisible] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  //TODO : useQuery로 Message Post요청

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSendMessage(input);
      setInput("");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onFileUpload(file);
    }
  };

  const handleOptionSelect = (option: string) => {
    switch (option) {
      case "file":
      case "image":
        fileInputRef.current?.click();
        break;
      case "audio":
        console.log("음성 녹음");
        break;
    }
    setIsUploadOptionsVisible(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.inputForm}>
        <button
          type="button"
          onClick={() => setIsUploadOptionsVisible(true)}
          className={styles.uploadButton}
        >
          <Paperclip size={20} />
        </button>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="입력 여기에 문자"
          className={styles.input}
        />
        <button type="submit" className={styles.sendButton}>
          <Send size={20} />
        </button>
      </form>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*,.pdf,.doc,.docx,.txt"
        style={{ display: "none" }}
      />
      <UploadModal
        isVisible={isUploadOptionsVisible}
        onClose={() => setIsUploadOptionsVisible(false)}
        onOptionSelect={handleOptionSelect}
      />
    </>
  );
};

export default ChatInput;

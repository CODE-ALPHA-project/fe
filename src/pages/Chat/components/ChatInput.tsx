import React, { useRef, useState } from "react";
import { Paperclip, Send } from "lucide-react";
import * as styles from "./ChatInput.css";
import UploadModal from "./UploadModal";

interface ChatInputProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>; // 수정된 부분
  onSendMessage: (text: string) => void;
  onFileUpload: (file: File) => void;
  isDisabled: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({
  input,
  setInput,
  onSendMessage,
  onFileUpload,
  isDisabled,
}) => {
  const [isUploadOptionsVisible, setIsUploadOptionsVisible] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isDisabled) {
      onSendMessage(input);
      setInput("");
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && !isDisabled) {
      onFileUpload(file);
    }
  };

  const handleOptionSelect = (option: string) => {
    if (isDisabled) return;

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && e.ctrlKey) {
      e.preventDefault();
      setInput((prev) => prev + "\n");
      if (textareaRef.current) {
        const { selectionStart, selectionEnd } = textareaRef.current;
        setTimeout(() => {
          textareaRef.current?.setSelectionRange(
            selectionStart + 1,
            selectionEnd + 1,
          );
        }, 0);
      }
    } else if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={styles.inputForm}>
        <button
          type="button"
          onClick={() => !isDisabled && setIsUploadOptionsVisible(true)}
          className={`${styles.uploadButton} ${styles.buttonVariants[isDisabled ? "disabled" : "enabled"]}`}
          disabled={isDisabled}
        >
          <Paperclip size={20} />
        </button>
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={isDisabled ? "연결 중..." : "메시지를 입력해주세요"}
          className={styles.inputVariants[isDisabled ? "disabled" : "enabled"]}
          disabled={isDisabled}
          rows={1}
          style={{
            resize: "none",
            overflow: "hidden",
            fontFamily: "Arial, sans-serif",
            fontSize: "14px",
            lineHeight: "1.5",
          }}
        />
        <button
          type="submit"
          className={`${styles.sendButton} ${styles.buttonVariants[isDisabled ? "disabled" : "enabled"]}`}
          disabled={isDisabled}
        >
          <Send size={20} />
        </button>
      </form>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*,.pdf,.doc,.docx,.txt"
        style={{ display: "none" }}
        disabled={isDisabled}
      />
      <UploadModal
        isVisible={isUploadOptionsVisible && !isDisabled}
        onClose={() => setIsUploadOptionsVisible(false)}
        onOptionSelect={handleOptionSelect}
      />
    </>
  );
};

export default ChatInput;

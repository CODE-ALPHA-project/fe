// import React, { useRef, useState } from "react";
// import { Paperclip, Send } from "lucide-react";
// import * as styles from "./ChatInput.css";
// import UploadModal from "./UploadModal";

// interface ChatInputProps {
//   input: string;
//   setInput: React.Dispatch<React.SetStateAction<string>>;
//   onSendMessage: (text: string) => void;
//   onFileUpload: (file: File) => void;
//   isDisabled: boolean;
// }

// const ChatInput: React.FC<ChatInputProps> = ({
//   input,
//   setInput,
//   onSendMessage,
//   onFileUpload,
//   isDisabled,
// }) => {
//   const [isUploadOptionsVisible, setIsUploadOptionsVisible] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement>(null);
//   const textareaRef = useRef<HTMLTextAreaElement>(null);

//   // Form 제출 핸들러
//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (input.trim() && !isDisabled) {
//       onSendMessage(input);
//       setInput("");
//     }
//   };

//   // 파일 변경 핸들러
//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file && !isDisabled) {
//       onFileUpload(file);
//     }
//   };

//   // 업로드 옵션 선택 핸들러
//   const handleOptionSelect = (option: string) => {
//     if (!isDisabled) {
//       if (option === "file" || option === "image") {
//         fileInputRef.current?.click();
//       } else if (option === "audio") {
//         console.log("음성 녹음");
//       }
//       setIsUploadOptionsVisible(false);
//     }
//   };

//   // 엔터키 입력 핸들러
//   const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
//     if (e.key === "Enter" && e.ctrlKey) {
//       e.preventDefault();
//       setInput((prev) => prev + "\n");
//       adjustTextareaCursor();
//     } else if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSubmit(e);
//     }
//   };

//   // 텍스트 에어리어 커서 위치 조정
//   const adjustTextareaCursor = () => {
//     if (textareaRef.current) {
//       const { selectionStart, selectionEnd } = textareaRef.current;
//       setTimeout(() => {
//         textareaRef.current?.setSelectionRange(
//           selectionStart + 1,
//           selectionEnd + 1,
//         );
//       }, 0);
//     }
//   };

//   // 버튼 활성화 클래스 설정
//   const getButtonClass = (baseClass: string) =>
//     `${baseClass} ${styles.buttonVariants[isDisabled ? "disabled" : "enabled"]}`;

//   return (
//     <>
//       <form onSubmit={handleSubmit} className={styles.inputForm}>
//         <button
//           type="button"
//           onClick={() => !isDisabled && setIsUploadOptionsVisible(true)}
//           className={getButtonClass(styles.uploadButton)}
//           disabled={isDisabled}
//         >
//           <Paperclip size={20} />
//         </button>
//         <textarea
//           ref={textareaRef}
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={handleKeyDown}
//           placeholder={isDisabled ? "연결 중..." : "메시지를 입력해주세요"}
//           className={styles.inputVariants[isDisabled ? "disabled" : "enabled"]}
//           disabled={isDisabled}
//           rows={1}
//         />
//         <button
//           type="submit"
//           className={getButtonClass(styles.sendButton)}
//           disabled={isDisabled}
//         >
//           <Send size={20} />
//         </button>
//       </form>
//       <input
//         type="file"
//         ref={fileInputRef}
//         onChange={handleFileChange}
//         accept="image/*,.pdf,.doc,.docx,.txt"
//         style={{ display: "none" }}
//         disabled={isDisabled}
//       />
//       <UploadModal
//         isVisible={isUploadOptionsVisible && !isDisabled}
//         onClose={() => setIsUploadOptionsVisible(false)}
//         onOptionSelect={handleOptionSelect}
//       />
//     </>
//   );
// };

// export default ChatInput;
import React, { useRef, useState } from "react";
import { Paperclip, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import UploadModal from "./UploadModal";

interface ChatInputProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
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
    if (!isDisabled) {
      if (option === "file" || option === "image") {
        fileInputRef.current?.click();
      } else if (option === "audio") {
        console.log("음성 녹음");
      }
      setIsUploadOptionsVisible(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && e.ctrlKey) {
      e.preventDefault();
      setInput((prev) => prev + "\n");
      adjustTextareaCursor();
    } else if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const adjustTextareaCursor = () => {
    if (textareaRef.current) {
      const { selectionStart, selectionEnd } = textareaRef.current;
      setTimeout(() => {
        textareaRef.current?.setSelectionRange(
          selectionStart + 1,
          selectionEnd + 1,
        );
      }, 0);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={cn(
          "flex items-center gap-2",
          "p-1.5 rounded-full",
          "bg-background border",
          "transition-colors duration-200",
          isDisabled && "opacity-60",
        )}
      >
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className={cn(
            "h-9 w-9 rounded-full",
            "text-muted-foreground hover:text-foreground",
            "shrink-0",
            isDisabled && "cursor-not-allowed",
          )}
          onClick={() => !isDisabled && setIsUploadOptionsVisible(true)}
          disabled={isDisabled}
        >
          <Paperclip className="h-5 w-5" />
        </Button>

        <Textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={isDisabled ? "연결 중..." : "메시지를 입력해주세요"}
          disabled={isDisabled}
          rows={1}
          className={cn(
            "min-h-[36px] max-h-[200px]",
            "py-2 px-3 text-sm",
            "resize-none overflow-hidden",
            "bg-transparent border-0",
            "focus-visible:ring-0 focus-visible:ring-offset-0",
            "placeholder:text-muted-foreground",
            isDisabled && "cursor-not-allowed",
          )}
        />

        <Button
          type="submit"
          variant="ghost"
          size="icon"
          className={cn(
            "h-9 w-9 rounded-full",
            "text-primary hover:text-primary/90",
            "shrink-0",
            "transition-all duration-200",
            input.trim() &&
              !isDisabled &&
              "bg-primary text-primary-foreground hover:bg-primary/90",
            isDisabled && "cursor-not-allowed",
          )}
          disabled={isDisabled}
        >
          <Send className="h-5 w-5" />
        </Button>
      </form>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*,.pdf,.doc,.docx,.txt"
        className="hidden"
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

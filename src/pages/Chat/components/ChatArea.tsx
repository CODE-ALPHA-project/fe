// import React, { useEffect, useRef, useState } from "react";
// import ChatHeader from "../layout/ChatHeader";
// import ChatMessages from "./ChatMessage";
// import ChatInput from "./ChatInput";
// import * as styles from "./ChatArea.css";
// import { MessageRequestProps, MessageResponseProps } from "../types/type";

// interface ChatAreaProps {
//   messages: (MessageRequestProps | MessageResponseProps)[];
//   setMessages: React.Dispatch<
//     React.SetStateAction<(MessageRequestProps | MessageResponseProps)[]>
//   >;
//   input: string;
//   setInput: React.Dispatch<React.SetStateAction<string>>;
//   onSendMessage: (text: string) => void;
//   toggleSidebar: () => void;
//   isConnected: boolean;
// }

// const ChatArea: React.FC<ChatAreaProps> = ({
//   messages,
//   input,
//   setInput,
//   onSendMessage,
//   toggleSidebar,
//   isConnected,
// }) => {
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [autoScroll, setAutoScroll] = useState(true);

//   // 스크롤 위치 계산 함수
//   const isNearBottom = () => {
//     if (!containerRef.current) return false;
//     const { scrollHeight, scrollTop, clientHeight } = containerRef.current;
//     return scrollHeight - scrollTop - clientHeight < 200; // 200px이하로 남으면 최하단으로 인식
//   };

//   // 스크롤을 최하단으로 이동
//   const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
//     if (autoScroll && messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior });
//     }
//   };

//   // 스크롤 이벤트 핸들러
//   const handleScroll = () => setAutoScroll(isNearBottom());

//   // MutationObserver를 통해 DOM 변경을 감지하여 스크롤을 최하단으로 유지
//   useEffect(() => {
//     if (!containerRef.current) return;
//     const observer = new MutationObserver(
//       () => autoScroll && scrollToBottom("auto"),
//     );

//     observer.observe(containerRef.current, {
//       childList: true,
//       subtree: true,
//       characterData: true,
//     });

//     return () => observer.disconnect();
//   }, [autoScroll]);

//   // 메시지가 추가될 때 스크롤 처리
//   useEffect(() => {
//     scrollToBottom("smooth");
//   }, [messages]);

//   // 스크롤 이벤트 리스너 등록
//   useEffect(() => {
//     const container = containerRef.current;
//     container?.addEventListener("scroll", handleScroll);
//     return () => container?.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleFileUpload = () => {
//     //TODO : 파일 업로드 기능 구현
//   };

//   return (
//     <main className={styles.chatArea}>
//       <ChatHeader toggleSidebar={toggleSidebar} isConnected={isConnected} />
//       <div className={styles.chatContent}>
//         {!isConnected && (
//           <div className={styles.connectionStatus}>
//             연결이 끊어졌습니다. 재연결 중...
//           </div>
//         )}
//         <div
//           className={styles.messagesContainer}
//           ref={containerRef}
//           style={{ overflowY: "auto", height: "calc(100vh - 160px)" }}
//         >
//           <ChatMessages messages={messages} />
//           <div ref={messagesEndRef} style={{ height: "1px" }} />
//         </div>
//       </div>
//       <div className={styles.inputWrapper}>
//         <ChatInput
//           input={input}
//           setInput={setInput}
//           onSendMessage={onSendMessage}
//           onFileUpload={handleFileUpload}
//           isDisabled={!isConnected}
//         />
//       </div>
//     </main>
//   );
// };

// export default ChatArea;
// import React, { useEffect, useRef, useState } from "react";
// import ChatHeader from "../layout/ChatHeader";
// import ChatMessages from "./ChatMessage";
// import ChatInput from "./ChatInput";
// import * as styles from "./ChatArea.css";
// import { MessageRequestProps, MessageResponseProps } from "../types/type";

// interface ChatAreaProps {
//   messages: (MessageRequestProps | MessageResponseProps)[];
//   setMessages: React.Dispatch<
//     React.SetStateAction<(MessageRequestProps | MessageResponseProps)[]>
//   >;
//   input: string;
//   setInput: React.Dispatch<React.SetStateAction<string>>;
//   onSendMessage: (text: string) => void;
//   toggleSidebar: () => void;
//   isConnected: boolean;
// }

// const ChatArea: React.FC<ChatAreaProps> = ({
//   messages,
//   input,
//   setInput,
//   onSendMessage,
//   toggleSidebar,
//   isConnected,
// }) => {
//   const messagesEndRef = useRef<HTMLDivElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [autoScroll, setAutoScroll] = useState(true);

//   // 스크롤 위치 계산 함수
//   const isNearBottom = () => {
//     if (!containerRef.current) return false;
//     const { scrollHeight, scrollTop, clientHeight } = containerRef.current;
//     return scrollHeight - scrollTop - clientHeight < 200; // 200px이하로 남으면 최하단으로 인식
//   };

//   // 스크롤을 최하단으로 이동
//   const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
//     if (autoScroll && messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior });
//     }
//   };

//   // 스크롤 이벤트 핸들러
//   const handleScroll = () => setAutoScroll(isNearBottom());

//   // MutationObserver를 통해 DOM 변경을 감지하여 스크롤을 최하단으로 유지
//   useEffect(() => {
//     if (!containerRef.current) return;
//     const observer = new MutationObserver(
//       () => autoScroll && scrollToBottom("auto"),
//     );

//     observer.observe(containerRef.current, {
//       childList: true,
//       subtree: true,
//       characterData: true,
//     });

//     return () => observer.disconnect();
//   }, [autoScroll]);

//   // 메시지가 추가될 때 스크롤 처리
//   useEffect(() => {
//     scrollToBottom("smooth");
//   }, [messages]);

//   // 스크롤 이벤트 리스너 등록
//   useEffect(() => {
//     const container = containerRef.current;
//     container?.addEventListener("scroll", handleScroll);
//     return () => container?.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleFileUpload = () => {
//     //TODO : 파일 업로드 기능 구현
//   };

//   return (
//     <main className={styles.chatArea}>
//       <ChatHeader toggleSidebar={toggleSidebar} isConnected={isConnected} />
//       <div className={styles.chatContent}>
//         {!isConnected && (
//           <div className={styles.connectionStatus}>
//             연결이 끊어졌습니다. 재연결 중...
//           </div>
//         )}
//         <div
//           className={styles.messagesContainer}
//           ref={containerRef}
//           style={{ overflowY: "auto", height: "calc(100vh - 160px)" }}
//         >
//           <ChatMessages messages={messages} />
//           <div ref={messagesEndRef} style={{ height: "1px" }} />
//         </div>
//       </div>
//       <div className={styles.inputWrapper}>
//         <ChatInput
//           input={input}
//           setInput={setInput}
//           onSendMessage={onSendMessage}
//           onFileUpload={handleFileUpload}
//           isDisabled={!isConnected}
//         />
//       </div>
//     </main>
//   );
// };

// export default ChatArea;
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@lib/utils";
import { Alert, AlertDescription } from "@ui/alert";
import { AlertCircle } from "lucide-react";
import ChatHeader from "../layout/ChatHeader";
import ChatMessages from "./ChatMessage";
import ChatInput from "./ChatInput";
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
  const [autoScroll, setAutoScroll] = useState(true);

  const isNearBottom = () => {
    if (!containerRef.current) return false;
    const { scrollHeight, scrollTop, clientHeight } = containerRef.current;
    return scrollHeight - scrollTop - clientHeight < 200;
  };

  const scrollToBottom = (behavior: ScrollBehavior = "smooth") => {
    if (autoScroll && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior });
    }
  };

  const handleScroll = () => setAutoScroll(isNearBottom());

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new MutationObserver(
      () => autoScroll && scrollToBottom("auto"),
    );

    observer.observe(containerRef.current, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => observer.disconnect();
  }, [autoScroll]);

  useEffect(() => {
    scrollToBottom("smooth");
  }, [messages]);

  useEffect(() => {
    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFileUpload = () => {
    //TODO : 파일 업로드 기능 구현
  };

  return (
    <main className="flex flex-col h-screen w-full bg-background relative">
      <ChatHeader toggleSidebar={toggleSidebar} isConnected={isConnected} />

      <div className="flex-1 flex flex-col min-h-0">
        {/* Connection Status Alert */}
        {!isConnected && (
          <div className="max-w-3xl mx-auto w-full px-4 mt-4">
            <Alert variant="destructive" className="bg-destructive/10">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                연결이 끊어졌습니다. 재연결 중...
              </AlertDescription>
            </Alert>
          </div>
        )}

        {/* Messages Area */}
        <div
          ref={containerRef}
          className={cn(
            "flex-1 overflow-y-auto",
            "px-4 py-4 md:px-6",
            "scroll-smooth",
            "scrollbar-thin scrollbar-thumb-secondary scrollbar-track-secondary/20",
            "scrollbar-thumb-rounded",
          )}
          style={{ height: "calc(100vh - 160px)" }}
        >
          <div className="max-w-3xl mx-auto w-full">
            <ChatMessages messages={messages} />
            <div ref={messagesEndRef} className="h-px" />
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div
        className={cn(
          "border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
          "p-4 md:p-6",
        )}
      >
        <div className="max-w-3xl mx-auto">
          <ChatInput
            input={input}
            setInput={setInput}
            onSendMessage={onSendMessage}
            onFileUpload={handleFileUpload}
            isDisabled={!isConnected}
          />
        </div>
      </div>
    </main>
  );
};

export default ChatArea;

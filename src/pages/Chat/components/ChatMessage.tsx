// // ChatMessage.tsx
// import React from "react";
// import * as styles from "./ChatMessage.css";
// import { MessageRequestProps } from "../types/type";
// import ReactMarkdown from "react-markdown";
// import useTypingEffect from "../../../hooks/useTypingEffect";

// interface ChatMessageProps {
//   messages: MessageRequestProps[];
// }

// const ChatMessage: React.FC<ChatMessageProps> = ({ messages }) => {
//   const { displayedText, typingIndex, messageEndRef } = useTypingEffect({
//     messages,
//   });

//   return (
//     <div className={styles.chatMessages}>
//       {messages.map((message, index) => (
//         <div
//           key={message.id}
//           className={
//             message.sender === "user" ? styles.userMessage : styles.aiMessage
//           }
//         >
//           <div
//             className={
//               message.sender === "user" ? styles.userBubble : styles.aiBubble
//             }
//           >
//             {message.sender === "ai" ? (
//               <div className={styles.markdownContainer}>
//                 <ReactMarkdown>
//                   {index === typingIndex ? displayedText : message.text}
//                 </ReactMarkdown>
//               </div>
//             ) : (
//               message.text
//             )}
//             {message.file && (
//               <div className={styles.fileAttachment}>
//                 {message.file.type.startsWith("image/") ? (
//                   <img
//                     src={message.file.url}
//                     alt={message.file.name}
//                     className={styles.attachedImage}
//                   />
//                 ) : (
//                   <a
//                     href={message.file.url}
//                     download={message.file.name}
//                     className={styles.attachedFile}
//                   >
//                     {message.file.name}
//                   </a>
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       ))}
//       <div ref={messageEndRef} />
//     </div>
//   );
// };

// export default ChatMessage;
import React from "react";
import { cn } from "@lib/utils";
import ReactMarkdown from "react-markdown";
import useTypingEffect from "../../../hooks/useTypingEffect";
import { MessageRequestProps } from "../types/type";
import { Card } from "@ui/card";

interface ChatMessageProps {
  messages: MessageRequestProps[];
}

const ChatMessage: React.FC<ChatMessageProps> = ({ messages }) => {
  const { displayedText, typingIndex, messageEndRef } = useTypingEffect({
    messages,
  });

  return (
    <div className="flex flex-col space-y-4">
      {messages.map((message, index) => (
        <div
          key={message.id}
          className={cn(
            "flex",
            message.sender === "user" ? "justify-end" : "justify-start",
            "max-w-[85%] md:max-w-[75%]",
            message.sender === "user" ? "ml-auto" : "mr-auto",
          )}
        >
          <Card
            className={cn(
              "px-4 py-3",
              "shadow-sm",
              message.sender === "user"
                ? "bg-primary text-primary-foreground"
                : "bg-muted",
              "break-words",
            )}
          >
            {message.sender === "ai" ? (
              <div className="prose prose-sm dark:prose-invert max-w-none">
                <ReactMarkdown>
                  {index === typingIndex ? displayedText : message.text}
                </ReactMarkdown>
              </div>
            ) : (
              <p>{message.text}</p>
            )}

            {message.file && (
              <div className="mt-3 first:mt-0">
                {message.file.type.startsWith("image/") ? (
                  <img
                    src={message.file.url}
                    alt={message.file.name}
                    className="max-h-48 rounded-lg object-cover"
                    loading="lazy"
                  />
                ) : (
                  <a
                    href={message.file.url}
                    download={message.file.name}
                    className={cn(
                      "inline-flex items-center gap-2 rounded-md",
                      "bg-secondary/50 px-3 py-2",
                      "text-sm font-medium",
                      "hover:bg-secondary/70 transition-colors",
                    )}
                  >
                    📎 {message.file.name}
                  </a>
                )}
              </div>
            )}
          </Card>
        </div>
      ))}
      <div ref={messageEndRef} />
    </div>
  );
};

export default ChatMessage;

// hooks : 글자 타이핑 효과 커스텀 훅 //
import { useEffect, useState, useRef } from "react";
import { MessageRequestProps } from "../pages/Chat/types/type";

interface UseTypingEffectProps {
  messages: MessageRequestProps[];
}

const useTypingEffect = ({ messages }: UseTypingEffectProps) => {
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

  return { displayedText, typingIndex, messageEndRef };
};

export default useTypingEffect;

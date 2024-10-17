import { useState, useEffect, useCallback, useRef } from 'react';
import SockJS from 'sockjs-client';
import { Stomp, CompatClient } from '@stomp/stompjs';

interface UseChatProps {
  serverUrl: string;
  topic: string;
  chatRoomId: string;
}

interface ParsedMessage {
  answer: string;
  references: Array<{
    law: string;
    chapter: string;
    title: string;
  }>;
}

export const useChat = ({ serverUrl, topic, chatRoomId }: UseChatProps) => {
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState<ParsedMessage[]>([]);
  const [error, setError] = useState<string | null>(null);
  const stompClientRef = useRef<CompatClient | null>(null);

  const handleMessage = useCallback((message: string) => {
    console.log("Received raw message:", message);
    try {
      const parsedMessage:ParsedMessage = JSON.parse(message);
      console.log("Parsed message:", parsedMessage);
      setMessages((prevMessages) => [...prevMessages, parsedMessage]);
    } catch (err) {
      console.error("Error parsing message:", err);
      setError("Failed to parse incoming message");
    }
  }, []);

  useEffect(() => {
    const socket = new SockJS(serverUrl);
    const stompClient = Stomp.over(socket);
    stompClientRef.current = stompClient;

    stompClient.connect({},
      (frame: string) => {
        console.log("Connected: " + frame);
        setConnected(true);
        setError(null);

        stompClient.subscribe("/topic/answers/"+chatRoomId, (message) => {
          handleMessage(message.body);
        });
      },
      (err: string) => {
        console.error("Connection error: ", err);
        setError(`Connection failed: ${err.toString()}`);
        setConnected(false);
      }
    );

    return () => {
      if (stompClient.connected) {
        stompClient.disconnect(() => {
          console.log("Disconnected");
          setConnected(false);
        });
      }
    };
  }, [serverUrl, topic, chatRoomId, handleMessage]);

  const sendMessage = useCallback((message: string) => {
    if (stompClientRef.current && stompClientRef.current.connected) {
      const requestPayload = {
        message,
        chatRoomId,
      };
      stompClientRef.current.send("/app/send", {}, JSON.stringify(requestPayload));
      console.log("Message sent:", message);
    } else {
      console.error("STOMP client is not connected");
      setError("Failed to send message: Not connected");
    }
  }, [chatRoomId]);

  const clearMessages = useCallback(() => {
    setMessages([]);
  }, []);

  return {
    connected,
    messages,
    sendMessage,
    clearMessages,
    error,
  };
};
import { useEffect, useState, useCallback } from "react";
import { Client, Message } from "@stomp/stompjs";

interface UseChatProps {
  url: string;
  topic: string;
  onMessageReceived?: (message: string) => void;
}

export const useChat = ({ url, topic, onMessageReceived }: UseChatProps) => {
  const [client, setClient] = useState<Client | null>(null);

  useEffect(() => {
    const stompClient = new Client({
      brokerURL: url,
      onConnect: () => {
        stompClient.subscribe(topic, (message: Message) => {
          if (message.body && onMessageReceived) {
            try {
              onMessageReceived(JSON.parse(message.body));
            } catch (error) {
              console.error("Error parsing message body:", error);
            }
          }
        });
      },
      onStompError: (frame) => {
        console.error("Broker reported error:", frame.headers["message"]);
        console.error("Additional details:", frame.body);
      },
    });

    setClient(stompClient);
    stompClient.activate();

    return () => {
      stompClient.deactivate();
    };
  }, [url, topic, onMessageReceived]);

  const sendMessage = useCallback(
    (destination: string, message: string) => {
      if (client?.connected) {
        client.publish({ destination, body: JSON.stringify(message) });
      }
    },
    [client],
  );

  return { sendMessage };
};

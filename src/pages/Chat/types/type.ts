export interface MessageProps {
  id: number;
  text: string;
  sender: "user" | "ai";
}

export interface MessageRequestProps extends MessageProps {
  file?: {
    name: string;
    url: string;
    type:
      | ".png"
      | ".webp"
      | ".jpg"
      | ".jepg"
      | ".pdf"
      | ".doc"
      | ".docx"
      | ".txt"
      | ".hwp";
  };
  date?: Date;
}

export interface MessageResponseProps extends MessageProps {
  date?: Date;
}

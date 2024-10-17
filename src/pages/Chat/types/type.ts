export interface MessageProps {
  id: number;
  text: string;
  sender: "user" | "ai";
  date?: string; // ISO 8601 형식의 날짜 문자열
}

export interface FileAttachment {
  name: string;
  url: string;
  type: string; // 파일 확장자를 문자열로 저장 (예: ".png", ".pdf" 등)
}

export interface MessageRequestProps extends MessageProps {
  file?: FileAttachment;
}

export interface Reference {
  law: string;
  chapter: string;
  title: string;
}

export interface MessageResponseProps extends MessageProps {
  references?: Reference[];
}
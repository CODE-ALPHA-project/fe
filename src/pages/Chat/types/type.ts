export interface MessageProps {
  id: number;
  text: string;
  sender: "user" | "ai";
  date?: string;
}

export interface FileAttachment {
  name: string;
  url: string;
  type: string;
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

export interface MessageProps {
  id: number;
  text: string;
  sender: 'user' | 'ai';
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

export interface ChatInputProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  onSendMessage: (text: string) => void;
  onFileUpload: (file: File) => void;
  isDisabled: boolean;
}

export interface ChatAreaProps {
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

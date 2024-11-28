export interface ExpertProps {
  name: string;
  image: string;
  tags: string[];
  company: string;
  description: string;
  time: string;
}

export interface SlideProps {
  key: string;
  image: string;
}

export interface ImageSliderProps {
  slides: SlideProps[];
}

export interface MenuCardProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  onClick: () => void;
}

export type ActivityName =
  | 'Home'
  | 'LoginPage'
  | 'SignupPage'
  | 'ChatPage'
  | 'ExpertSigninPage'
  | 'ExpertPage'
  | 'QnAPage'
  | 'PaymentPage'
  | 'PostPage';

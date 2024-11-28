import { TabItem } from '@/components/types/type';
import {
  Menu,
  MessageSquare,
  Home,
  MessageCircleQuestion,
  UserCircle2,
} from 'lucide-react';

export const tabs: TabItem[] = [
  {
    name: '전체메뉴',
    icon: Menu,
    isSheet: true,
  },
  {
    name: '챗봇',
    icon: MessageSquare,
    path: 'ChatPage',
    matchPath: '/chatting/',
  },
  {
    name: '홈',
    icon: Home,
    path: 'Home',
    matchPath: '/',
  },
  {
    name: 'QnA',
    icon: MessageCircleQuestion,
    path: 'QnAPage',
    matchPath: '/qna/',
  },
  {
    name: '마이',
    icon: UserCircle2,
    path: 'LoginPage',
    matchPath: '/login/',
  },
];

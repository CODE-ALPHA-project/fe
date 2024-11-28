import { SheetTabItem, ActivityName } from '@/components/types/type';
import {
  MessageSquare,
  Home,
  MessageCircleQuestion,
  UserCircle2,
  DollarSign,
  Award,
  Newspaper,
} from 'lucide-react';

export const items: SheetTabItem[] = [
  {
    name: '홈',
    path: 'Home' as ActivityName,
    icon: Home,
  },
  {
    name: '마이',
    path: 'LoginPage' as ActivityName,
    icon: UserCircle2,
  },
  {
    name: '챗봇',
    path: 'ChatPage' as ActivityName,
    icon: MessageSquare,
  },
  {
    name: 'QnA',
    path: 'QnAPage' as ActivityName,
    icon: MessageCircleQuestion,
  },
  {
    name: '비용안내',
    path: 'PaymentPage' as ActivityName,
    icon: DollarSign,
  },
  {
    name: '전문가 소개',
    path: 'ExpertPage' as ActivityName,
    icon: Award,
  },
  {
    name: '포스팅',
    path: 'PostPage' as ActivityName,
    icon: Newspaper,
  },
];

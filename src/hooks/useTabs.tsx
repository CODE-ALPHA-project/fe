import { useEffect, useState } from 'react';
import { TabItem } from '@/components/types/type';
import {
  Menu,
  MessageSquare,
  Home,
  MessageCircleQuestion,
  UserCircle2,
} from 'lucide-react';

const useTabs = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginState = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loginState);

    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return [
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
      path: isLoggedIn ? 'MyPage' : 'LoginPage',
      matchPath: isLoggedIn ? '/my/' : '/login/',
    },
  ] as TabItem[];
};

export default useTabs;

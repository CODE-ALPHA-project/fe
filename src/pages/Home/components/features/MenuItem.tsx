import { ActivityName } from '@/pages/Home/types/type';
import { Search, MessageSquare, Bell } from 'lucide-react';

export const menuItems: Array<{
  icon: React.ReactNode;
  title: string;
  description: string;
  path: ActivityName;
}> = [
  {
    icon: <Search className="h-8 w-8 text-blue-500" />,
    title: '나에게 딱맞는\n전문가 찾기',
    description: '업무별, 업종별로 나에게\n딱 맞는 전문가를 찾아보세요!',
    path: 'ExpertPage',
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-blue-500" />,
    title: '간단한 세무 상담\n질의 작성하기',
    description: '간단한 상담이 필요하신가요?\n질문답변에서 물어보세요!',
    path: 'QnAPage',
  },
  {
    icon: <Bell className="h-8 w-8 text-blue-500" />,
    title: '국가에서 제공하는\n외국인 공지사항',
    description: '필요한 외국인 정보는\n바로 찾아가세요!',
    path: 'PostPage',
  },
];

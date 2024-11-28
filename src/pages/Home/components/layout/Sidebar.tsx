import React from 'react';

import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@ui/sheet';
import { Button } from '@ui/button';
import { ScrollArea } from '@ui/scroll-area';
import { useFlow } from '@/stackflow';
import { ActivityName, NavItem, SidebarProps } from '@/pages/Home/types/type';

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const { push } = useFlow();

  const handleNavigation = (path: ActivityName) => {
    push(path, {}, { animate: true });
    onClose();
  };

  const navItems: NavItem[] = [
    { path: 'ExpertPage', name: '전문가 찾기' },
    { path: 'QnAPage', name: '질문답변' },
    { path: 'PaymentPage', name: '포스트' },
    { path: 'PaymentPage', name: '비용안내' },
    { path: 'ExpertSigninPage', name: '전문가 가입안내' },
    { path: 'ChatPage', name: '챗봇' },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[300px] p-0 sm:hidden">
        <SheetHeader className="border-b p-6">
          <SheetTitle className="text-2xl font-bold">SolveUs</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col p-6">
          <div className="mb-5 font-medium">반갑습니다. 로그인해주세요</div>

          <Button
            className="mb-6 w-full"
            onClick={() => handleNavigation('LoginPage')}
          >
            로그인/회원가입
          </Button>

          <ScrollArea className="flex-1">
            <div className="flex flex-col space-y-2">
              {navItems.map(item => (
                <Button
                  key={item.path}
                  variant="ghost"
                  className="w-full justify-start font-medium"
                  onClick={() => handleNavigation(item.path)}
                >
                  {item.name}
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;

import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    onClose();
  };

  const navItems = [
    { path: "/expert", name: "전문가 찾기" },
    { path: "/qa", name: "질문답변" },
    { path: "/posts", name: "포스트" },
    { path: "/pricing", name: "비용안내" },
    { path: "/expert-signup", name: "전문가 가입안내" },
    { path: "/chatting", name: "챗봇" },
  ];

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[300px] sm:hidden p-0">
        <SheetHeader className="p-6 border-b">
          <SheetTitle className="text-2xl font-bold">LAWBOT</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col p-6">
          <div className="mb-5 font-medium">반갑습니다. 로그인해주세요</div>

          <Button
            className="mb-6 w-full"
            onClick={() => handleNavigation("/login")}
          >
            로그인/회원가입
          </Button>

          <ScrollArea className="flex-1">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
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

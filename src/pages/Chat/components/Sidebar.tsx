import React, { useEffect } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@ui/sheet";
import { MessageSquare, Settings, LogOut, Plus, History } from "lucide-react";
import { Button } from "@ui/button";
import { ScrollArea } from "@ui/scroll-area";
import { Avatar, AvatarImage, AvatarFallback } from "@ui/avatar";
import { cn } from "@lib/utils";
import img1 from "../../../assets/img1.webp";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="left" className="w-[280px] p-0">
        <SheetHeader className="p-4 border-b">
          <SheetTitle className="flex items-center gap-2 text-lg">
            <History className="h-5 w-5" />
            Chatting History
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          <div className="p-4">
            <Button
              variant="outline"
              className="w-full justify-start gap-2"
              onClick={() => {
                /* Handle new chat */
              }}
            >
              <Plus className="h-4 w-4" />
              New Chat
            </Button>
          </div>

          <ScrollArea className="flex-1 px-2">
            <div className="space-y-1 p-2">
              {Array.from({ length: 1 }).map((_, i) => (
                <Button
                  key={i}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start gap-2",
                    "text-sm font-medium",
                    "hover:bg-secondary/80",
                  )}
                >
                  <MessageSquare className="h-4 w-4" />
                  한국의 노동법에 대한 질문이..
                </Button>
              ))}
            </div>
          </ScrollArea>
          <div className="border-t p-4 space-y-4">
            <Button
              variant="ghost"
              className="w-full justify-start gap-2"
              onClick={() => {
                /* Handle settings */
              }}
            >
              <Settings className="h-4 w-4" />
              Settings
            </Button>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={img1} alt="User profile" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">User</span>
                  <span className="text-xs text-muted-foreground">
                    user@example.com
                  </span>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-destructive/10 hover:text-destructive"
                onClick={() => {
                  /* Handle logout */
                }}
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;

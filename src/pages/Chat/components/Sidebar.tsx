// import React, { useEffect } from "react";
// import { MessageSquare, Settings, X } from "lucide-react";
// import * as styles from "./Sidebar.css";
// import img1 from "../../../assets/img1.webp";

// interface SidebarProps {
//   isOpen: boolean;
//   onClose: () => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
//   // 사이드바가 열릴 때 body 스크롤 방지
//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "unset";
//     }

//     return () => {
//       document.body.style.overflow = "unset";
//     };
//   }, [isOpen]);

//   // ESC 키로 사이드바 닫기
//   useEffect(() => {
//     const handleEsc = (event: KeyboardEvent) => {
//       if (event.key === "Escape" && isOpen) {
//         onClose();
//       }
//     };

//     window.addEventListener("keydown", handleEsc);
//     return () => {
//       window.removeEventListener("keydown", handleEsc);
//     };
//   }, [isOpen, onClose]);

//   return (
//     <>
//       {/* 백드롭 */}
//       <div
//         className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ""}`}
//         onClick={onClose}
//         aria-hidden="true"
//       />

//       {/* 사이드바 */}
//       <aside
//         className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}
//         role="complementary"
//         aria-label="Chat history sidebar"
//       >
//         <div className={styles.sidebarHeader}>
//           <div className={styles.logo}>History</div>
//           <button
//             onClick={onClose}
//             className={styles.closeSidebarButton}
//             aria-label="Close sidebar"
//           >
//             <X size={20} />
//           </button>
//         </div>

//         <nav className={styles.nav}>
//           <button className={styles.navItem}>
//             <MessageSquare className={styles.navIcon} size={20} />
//             New Chat
//           </button>
//           <button className={styles.navItem}>
//             <Settings className={styles.navIcon} size={20} />
//             Settings
//           </button>
//         </nav>

//         <div className={styles.profile}>
//           <img src={img1} alt="User profile" className={styles.avatar} />
//           <span className={styles.userName}>User</span>
//         </div>
//       </aside>
//     </>
//   );
// };

// export default Sidebar;
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
            History
          </SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {/* New Chat Button */}
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

          {/* Chat History */}
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
                  Chat {i + 1}
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

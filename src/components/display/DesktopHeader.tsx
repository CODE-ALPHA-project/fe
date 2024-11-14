import React from "react";
import { useNavigate } from "react-router-dom";
import { Bell } from "lucide-react";
import { Button } from "@ui/button";
import { cn } from "@lib/utils";
import SearchBar from "@/pages/Home/components/layout/SearchBar";

const DesktopHeader: React.FC = () => {
  const navigate = useNavigate();

  const navigationItems = [
    { label: "전문가찾기", path: "/expert" },
    { label: "질문답변", path: "/qa" },
    { label: "포스트", path: "/posts" },
    { label: "비용안내", path: "/payment" },
    { label: "채팅하기", path: "/chatting" },
  ];

  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between gap-8">
          <h1
            className="text-2xl font-bold cursor-pointer bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent"
            onClick={() => navigate("/")}
          >
            LAWBOT
          </h1>

          <SearchBar />

          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "relative h-10 w-10",
                "bg-secondary/30 hover:bg-secondary/50",
                "rounded-xl transition-all duration-300",
              )}
            >
              <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500">
                <span className="absolute inset-0 animate-ping rounded-full bg-red-500 opacity-75" />
              </div>
              <Bell className="h-5 w-5" />
            </Button>

            <div className="h-6 w-px bg-border/60" />

            <Button
              variant="outline"
              onClick={() => navigate("/login")}
              className={cn(
                "bg-background hover:bg-secondary/50",
                "border border-border/50",
                "text-foreground font-medium",
                "rounded-xl px-5 h-10",
                "transition-all duration-300",
                "hover:border-primary/50",
              )}
            >
              로그인
            </Button>

            <Button
              variant="default"
              onClick={() => navigate("/expert-signin")}
              className={cn(
                "bg-gradient-to-r from-primary to-primary/90",
                "hover:from-primary/90 hover:to-primary",
                "text-primary-foreground font-medium",
                "rounded-xl px-5 h-10",
                "shadow-lg shadow-primary/20",
                "transition-all duration-300",
                "hover:shadow-xl hover:shadow-primary/30",
                "hover:scale-[1.02]",
              )}
            >
              전문가 가입
            </Button>
          </div>
        </div>

        <nav className="flex border-t border-border/40">
          {navigationItems.map((item) => (
            <Button
              key={item.path}
              variant="ghost"
              onClick={() => navigate(item.path)}
              className={cn(
                "px-5 h-12 rounded-none text-sm font-medium",
                "hover:bg-transparent relative group",
                "transition-all duration-300",
                "after:absolute after:bottom-0 after:left-1/2",
                "after:w-2 after:h-1 after:rounded-full",
                "after:bg-primary after:transition-all after:duration-300",
                "after:-translate-x-1/2 after:opacity-0",
                "hover:after:opacity-100 hover:after:w-4/5",
                "hover:text-primary",
              )}
            >
              {item.label}
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default DesktopHeader;

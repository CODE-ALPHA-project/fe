import { cn } from "@/lib/utils";
import { useFlow } from "@/stackflow";
import {
  Home,
  Search,
  MessageSquare,
  UserCircle2,
  MessageCircleQuestion,
} from "lucide-react";

type ActivityName =
  | "Home"
  | "LoginPage"
  | "SignupPage"
  | "ChatPage"
  | "ExpertSigninPage"
  | "ExpertPage"
  | "QnAPage"
  | "PaymentPage";

const BottomTab = () => {
  const { push } = useFlow();
  const currentPath = window.location.pathname;

  const tabs = [
    {
      name: "전문가",
      icon: Search,
      path: "ExpertPage" as ActivityName,
      matchPath: "/experts/",
    },
    {
      name: "챗봇",
      icon: MessageSquare,
      path: "ChatPage" as ActivityName,
      matchPath: "/chatting/",
    },
    {
      name: "홈",
      icon: Home,
      path: "Home" as ActivityName,
      matchPath: "/",
    },
    {
      name: "QnA",
      icon: MessageCircleQuestion,
      path: "QnAPage" as ActivityName,
      mathPath: "/qna/",
    },
    {
      name: "마이",
      icon: UserCircle2,
      path: "LoginPage" as ActivityName,
      matchPath: "/login/",
    },
  ];

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-background/95 border-t border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/60 sm:hidden">
      <nav className="flex items-center justify-around h-16">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => push(tab.path, {})}
            className={cn(
              "relative flex flex-col items-center justify-center flex-1 h-full gap-1",
              "hover:bg-accent/50 transition-all duration-200",
              currentPath === tab.matchPath
                ? "text-primary"
                : "text-muted-foreground",
            )}
          >
            <tab.icon
              className={cn(
                "w-5 h-5",
                "transition-colors duration-200",
                currentPath === tab.matchPath && "text-primary",
              )}
            />
            <span className="text-xs font-medium transition-colors duration-200">
              {tab.name}
            </span>
            {currentPath === tab.matchPath && (
              <div className="absolute -top-[1px] left-0 right-0 h-[1px] bg-primary" />
            )}
          </button>
        ))}
      </nav>
      <div className="h-[env(safe-area-inset-bottom)] bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" />
    </div>
  );
};

export default BottomTab;

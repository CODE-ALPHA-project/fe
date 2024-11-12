import React from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Home } from "lucide-react";
import { Button } from "@ui/button";
import { cn } from "@lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ui/tooltip";

interface ChatHeaderProps {
  toggleSidebar: () => void;
  isConnected: boolean;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  toggleSidebar,
  isConnected,
}) => {
  const navigate = useNavigate();

  return (
    <header
      className={cn(
        "h-14 px-4",
        "flex items-center justify-between",
        "border-b bg-background/95",
        "backdrop-blur supports-[backdrop-filter]:bg-background/60",
      )}
    >
      {/* Left Section */}
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
          className={cn("h-9 w-9", "hover:bg-secondary/80", "rounded-lg")}
        >
          <Menu className="h-5 w-5" />
        </Button>

        <h1
          className={cn(
            "text-lg font-semibold",
            "bg-gradient-to-r from-foreground to-foreground/70",
            "bg-clip-text text-transparent",
            "cursor-pointer",
          )}
          onClick={() => navigate("/")}
        >
          LAWBOT
        </h1>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-2">
        {/* Connection Status */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div
                className={cn(
                  "px-3 py-1.5 rounded-lg",
                  "flex items-center gap-2",
                  "text-sm font-medium",
                  "bg-secondary/20",
                  isConnected ? "text-green-600" : "text-red-600",
                  "transition-colors duration-200",
                )}
              >
                {isConnected ? (
                  <>
                    <div className="h-4 w-4" />
                    <span className="hidden sm:inline">연결됨</span>
                  </>
                ) : (
                  <>
                    <div className="h-4 w-4" />
                    <span className="hidden sm:inline">연결 끊김</span>
                  </>
                )}
              </div>
            </TooltipTrigger>
            <TooltipContent>
              {isConnected
                ? "서버와 연결되어 있습니다"
                : "서버와의 연결이 끊어졌습니다"}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* Home Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/")}
          className={cn("h-9 w-9", "hover:bg-secondary/80", "rounded-lg")}
        >
          <Home className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default ChatHeader;

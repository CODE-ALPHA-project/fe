import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@ui/button";
import { cn } from "@lib/utils";
import SearchBar from "@/pages/Home/components/layout/SearchBar";
import { ModeToggle } from "@/components/mode-toggle";
import { useFlow } from "@/stackflow";

interface MobileHeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (isOpen: boolean) => void;
}

const MobileHeader: React.FC<MobileHeaderProps> = ({ setIsSidebarOpen }) => {
  const { push } = useFlow();

  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(true)}
              className={cn(
                "h-10 w-10",
                "bg-secondary/30 hover:bg-secondary/50",
                "rounded-xl transition-all duration-300",
              )}
            >
              <Menu className="h-5 w-5" />
            </Button>

            <h1
              className="text-xl font-bold cursor-pointer bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent"
              onClick={() => push("Home", {}, { animate: true })}
            >
              LAWBOT
            </h1>
          </div>

          {/* <Button
           variant="ghost"
           size="icon"
           className={cn(
             "relative h-10 w-10",
             "bg-secondary/30 hover:bg-secondary/50",
             "rounded-xl transition-all duration-300",
           )}
         > */}
          {/* <div className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500">
               <span className="absolute inset-0 animate-ping rounded-full bg-red-500 opacity-75" />
             </div>
             <Bell className="h-5 w-5" /> */}
          {/* </Button> */}
          <ModeToggle />
        </div>

        <div className="pb-4">
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;

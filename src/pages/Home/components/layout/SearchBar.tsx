import React, { useRef, useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@ui/input";
import { Button } from "@ui/button";
import { cn } from "@lib/utils";

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: 검색 처리
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form
      onSubmit={handleSearch}
      className={cn(
        "flex items-center gap-2 p-2",
        "sm:flex-grow sm:max-w-[600px] sm:min-w-[350px] sm:mx-auto",
        "relative group",
      )}
    >
      <div className="relative flex-grow">
        <Input
          ref={inputRef}
          id="search"
          type="search"
          placeholder="검색어를 입력해주세요.."
          value={searchQuery}
          onChange={handleInputChange}
          className={cn(
            "w-full pl-4 pr-10 py-2 h-11",
            "bg-background border border-input rounded-full",
            "placeholder:text-muted-foreground",
            "focus-visible:ring-1 focus-visible:ring-offset-0",
            "transition-all duration-200",
            "group-hover:border-primary/50",
            "text-sm",
          )}
        />
        <Button
          type="submit"
          size="icon"
          variant="ghost"
          className={cn(
            "absolute right-1 top-1/2 -translate-y-1/2",
            "h-9 w-9 rounded-full",
            "text-muted-foreground",
            "hover:bg-primary/10 hover:text-primary",
            "transition-colors",
          )}
        >
          <Search className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
};

export default SearchBar;

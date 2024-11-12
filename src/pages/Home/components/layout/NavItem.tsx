import React from "react";
import { Button } from "@/components/ui/button";

interface NavItemProps {
  onClick: () => void;
  ItemName: string;
}

const NavItem: React.FC<NavItemProps> = ({ onClick, ItemName }) => {
  return (
    <Button
      variant="ghost"
      className="w-full justify-start font-medium px-4 py-2 border-b border-gray-100 hover:bg-gray-50"
      onClick={onClick}
    >
      {ItemName}
    </Button>
  );
};

export default NavItem;

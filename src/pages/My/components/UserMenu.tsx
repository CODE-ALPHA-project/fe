import { ChevronRight } from 'lucide-react';

interface UserMenuProps {
  title: string;
  onClick?: () => void;
}

const UserMenu = ({ title, onClick }: UserMenuProps) => {
  return (
    <div onClick={onClick} className="w-full">
      <div className="flex w-full items-center justify-between border-b border-gray-200 px-2 py-6">
        <span className="text-base text-gray-700">{title}</span>
        <ChevronRight className="text-gray-400" />
      </div>
    </div>
  );
};

export default UserMenu;

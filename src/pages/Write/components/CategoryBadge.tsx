import { Button } from '@/components/ui/button';
import { CategoryProp } from '@/pages/Write/types/type';

interface CategoryBadgeProps extends CategoryProp {
  isSelected?: boolean;
  onClick?: () => void;
}

const CategoryBadge = ({
  category,
  isSelected = false,
  onClick,
}: CategoryBadgeProps) => {
  return (
    <Button
      onClick={onClick}
      variant="outline"
      className={`h-[35px] items-center rounded-full px-4 text-center text-sm font-normal transition-colors ${
        isSelected
          ? 'scale-105 transform border-2 border-blue-500 bg-blue-500 text-white shadow-md hover:bg-blue-600'
          : 'border-gray-300 bg-white text-gray-900 hover:bg-gray-100'
      }`}
    >
      {category}
    </Button>
  );
};

export default CategoryBadge;

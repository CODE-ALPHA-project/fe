import { Badge } from '@/components/ui/badge';
import { CategoryProp } from '@/pages/Write/types/type';

const CategoryBadge = ({ category }: CategoryProp) => {
  return (
    <Badge className="h-[35px] items-center rounded-full border-gray-300 bg-white px-4 text-center text-sm font-normal text-gray-900 hover:bg-white">
      {category}
    </Badge>
  );
};
export default CategoryBadge;

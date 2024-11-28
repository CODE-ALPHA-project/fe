import { category } from '@/mock/category';
import CategoryBadge from '@/pages/Write/components/CategoryBadge';

const CategorySection = () => {
  return (
    <div className="flex justify-center text-center">
      <div className="py-5 text-lg font-normal">
        카테고리를 선택해주세요
        <div className="mt-2 flex flex-wrap justify-center gap-3 py-2">
          {category.map(category => (
            <CategoryBadge key={category} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;

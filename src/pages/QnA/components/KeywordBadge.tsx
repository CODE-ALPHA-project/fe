import { Badge } from '@/components/ui/badge';
import { KeywordProps } from '@/pages/QnA/types/type';

const KeywordBadge = ({ keyword }: KeywordProps) => {
  return (
    <Badge className="flex h-[35px] items-center rounded-full border-gray-300 bg-white px-4 text-sm font-normal text-gray-900 shadow-sm hover:bg-white">
      {keyword}
    </Badge>
  );
};
export default KeywordBadge;

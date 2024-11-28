import { Card, CardContent } from '@/components/ui/card';
import { MenuCardProps } from '@/pages/Home/types/type';

const MenuCard: React.FC<MenuCardProps> = ({
  icon,
  title,
  description,
  onClick,
}) => {
  return (
    <Card
      onClick={onClick}
      className="w-full max-w-sm cursor-pointer border-neutral-700 from-blue-100 via-blue-50 to-blue-100 transition-all duration-200 hover:bg-neutral-700"
    >
      <CardContent className="pt-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="rounded-xl bg-blue-500/10 p-3">{icon}</div>
          <h3 className="whitespace-pre-line font-eland text-xl text-black">
            {title}
          </h3>
          <p className="whitespace-pre-line font-eland text-base text-black">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default MenuCard;

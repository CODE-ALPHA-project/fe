import React from 'react';

import { Card, CardContent } from '@ui/card';
import { Badge } from '@ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@ui/avatar';
import { Clock } from 'lucide-react';
// import { cn } from '@lib/utils';
import { ExpertProps } from '@/pages/Home/types/type';

export const ExpertCard: React.FC<ExpertProps> = ({
  name,
  image,
  tags,
  company,
  description,
  time,
}) => {
  return (
    <Card className="group cursor-pointer overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="h-32 w-32 overflow-hidden rounded-full shadow-xl ring-4 ring-background">
              <Avatar className="h-full w-full">
                <AvatarImage src={image} alt={name} className="object-cover" />
                <AvatarFallback className="text-2xl">
                  {name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="w-full space-y-4 text-center">
            <div className="flex flex-wrap justify-center gap-2">
              {tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="font-medium">
                  {tag}
                </Badge>
              ))}
            </div>
            <div>
              <h3 className="mb-1 text-xl font-bold">{name}</h3>
              <p className="text-sm text-muted-foreground">{company}</p>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {description}
            </p>
            <div className="flex items-center justify-center gap-2 rounded-lg bg-muted/50 px-3 py-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>상담가능시간: {time}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// // 카드 컨테이너 컴포넌트 (필요한 경우 사용)
// export const ExpertCardsContainer: React.FC<{
//   children: React.ReactNode;
//   className?: string;
// }> = ({ children, className }) => {
//   return (
//     <div
//       className={cn(
//         'grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3',
//         'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8',
//         className,
//       )}
//     >
//       {children}
//     </div>
//   );
// };

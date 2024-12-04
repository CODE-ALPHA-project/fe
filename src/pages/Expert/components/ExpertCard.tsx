import { Card, CardContent } from '@/components/ui/card';
import { ExpertProps } from '@/pages/Home/types/type';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { Clock } from 'lucide-react';
import { Badge } from '@ui/badge';

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
      <CardContent className="p-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="h-24 w-24 overflow-hidden rounded-full shadow-xl ring-4 ring-background">
              <Avatar className="h-full w-full">
                <AvatarImage src={image} alt={name} className="object-cover" />
                <AvatarFallback className="text-xl">
                  {name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="w-full space-y-3 text-center">
            <div className="flex flex-wrap justify-center gap-1.5">
              {tags.map((tag, i) => (
                <Badge
                  key={i}
                  variant="secondary"
                  className="text-sm font-medium"
                >
                  {tag}
                </Badge>
              ))}
            </div>
            <div>
              <h3 className="mb-1 text-lg font-bold">{name}</h3>
              <p className="text-xs text-muted-foreground">{company}</p>
            </div>
            <p className="text-xs leading-relaxed text-muted-foreground">
              {description}
            </p>
            <div className="flex items-center justify-center gap-1.5 rounded-lg bg-muted/50 px-2 py-1.5 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5" />
              <span>상담가능시간: {time}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

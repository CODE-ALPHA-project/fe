import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExpertProps {
  name: string;
  image: string;
  tags: string[];
  company: string;
  description: string;
  time: string;
}

export const ExpertCard: React.FC<ExpertProps> = ({
  name,
  image,
  tags,
  company,
  description,
  time,
}) => {
  return (
    <Card className="group transition-all duration-200 hover:-translate-y-1 hover:shadow-lg cursor-pointer overflow-hidden">
      <CardContent className="p-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Expert Image */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-background shadow-xl">
              <Avatar className="w-full h-full">
                <AvatarImage src={image} alt={name} className="object-cover" />
                <AvatarFallback className="text-2xl">
                  {name.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* Expert Info */}
          <div className="space-y-4 w-full text-center">
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-2">
              {tags.map((tag, i) => (
                <Badge key={i} variant="secondary" className="font-medium">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Name and Company */}
            <div>
              <h3 className="text-xl font-bold mb-1">{name}</h3>
              <p className="text-sm text-muted-foreground">{company}</p>
            </div>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>

            {/* Time */}
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground bg-muted/50 py-2 px-3 rounded-lg">
              <Clock className="w-4 h-4" />
              <span>상담가능시간: {time}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// 카드 컨테이너 컴포넌트 (필요한 경우 사용)
export const ExpertCardsContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        className,
      )}
    >
      {children}
    </div>
  );
};

import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { useFlow } from '@/stackflow';

import { qnaItems } from '@/mock/qna';
import { Button } from '@ui/button';
import { Card, CardHeader, CardContent } from '@ui/card';
import { Badge } from '@ui/badge';
import { ChevronRight, PenSquare } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@ui/avatar';

const QnASection: React.FC = () => {
  const { push } = useFlow();
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const displayItems = isDesktop ? qnaItems.slice(0, 6) : qnaItems.slice(0, 3);

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-start justify-between">
          <div>
            <h2 className="mb-2 font-eland text-2xl tracking-tight">
              질문답변으로 간단한 상담받기
            </h2>
            <p className="font-eland text-muted-foreground">
              노무사를 찾기 애매할 경우 질문해보세요!
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => push('QnAPage', {}, { animate: true })}
              className="hidden items-center gap-2 sm:flex"
            >
              질문답변 전체보기
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => push('WritePage', {}, { animate: true })}
              className="hidden items-center gap-2 sm:flex"
            >
              <PenSquare className="h-4 w-4" />
              질문 작성하기
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {displayItems.map(item => (
            <Card
              key={item.id}
              className="cursor-pointer transition-all duration-200 hover:shadow-lg"
              onClick={() =>
                push('QnAPage', { id: item.id }, { animate: true })
              }
            >
              <CardHeader className="space-y-3">
                <Badge variant="secondary" className="w-fit">
                  {item.category}
                </Badge>
                <h3 className="line-clamp-2 text-lg font-semibold">
                  {item.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={item.expertImage} alt={item.expertName} />
                    <AvatarFallback>{item.expertName[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">
                    {item.expertName}
                  </span>
                </div>
                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {item.preview}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 flex gap-3 sm:hidden">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => push('QnAPage', {}, { animate: true })}
          >
            질문답변 전체보기
          </Button>
          <Button
            className="flex-1"
            onClick={() => push('QnAPage', {}, { animate: true })}
          >
            질문 작성하기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QnASection;

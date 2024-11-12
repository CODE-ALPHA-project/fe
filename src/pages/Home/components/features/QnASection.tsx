import React from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { qnaItems } from "../../../../mock/qna";
import { Button } from "@ui/button";
import { Card, CardHeader, CardContent } from "@ui/card";
import { Badge } from "@ui/badge";
import { ChevronRight, PenSquare } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@ui/avatar";

const QnASection: React.FC = () => {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const displayItems = isDesktop ? qnaItems.slice(0, 6) : qnaItems.slice(0, 3);

  return (
    <section className="w-full bg-gray-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-2">
              질문답변으로 간단한 상담받기
            </h2>
            <p className="text-muted-foreground">
              간단한 노사문제는 질문을 통해 해결하세요!
            </p>
          </div>
          <div className="flex gap-3">
            <Button
              variant="outline"
              onClick={() => navigate("/qa")}
              className="hidden sm:flex items-center gap-2"
            >
              질문답변 전체보기
              <ChevronRight className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => navigate("/ask")}
              className="hidden sm:flex items-center gap-2"
            >
              <PenSquare className="w-4 h-4" />
              질문 작성하기
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((item) => (
            <Card
              key={item.id}
              className="transition-all duration-200 hover:shadow-lg cursor-pointer"
              onClick={() => navigate("/")}
            >
              <CardHeader className="space-y-3">
                <Badge variant="secondary" className="w-fit">
                  {item.category}
                </Badge>
                <h3 className="font-semibold text-lg line-clamp-2">
                  {item.title}
                </h3>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={item.expertImage} alt={item.expertName} />
                    <AvatarFallback>{item.expertName[0]}</AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-muted-foreground">
                    {item.expertName}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {item.preview}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex gap-3 mt-6 sm:hidden">
          <Button
            variant="outline"
            className="flex-1"
            onClick={() => navigate("/qa")}
          >
            질문답변 전체보기
          </Button>
          <Button className="flex-1" onClick={() => navigate("/ask")}>
            질문 작성하기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default QnASection;

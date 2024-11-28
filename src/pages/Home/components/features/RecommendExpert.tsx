import { getRandomExperts } from "../../../../utils/getRandomExpert";
import { Card, CardContent } from "@ui/card";
import { ExpertCard } from "./ExpertCard";

const RecommendExpert = () => {
  const randomExperts = getRandomExperts(3);

  return (
    <div className="mx-4 sm:mx-8 lg:mx-12 py-8">
      <div className="flex items-center gap-2 mb-6 px-2">
        <h2 className="text-2xl font-eland tracking-tight">
          오늘의 추천노무사
        </h2>
      </div>

      <Card className="border-none shadow-none bg-transparent">
        <CardContent className="p-0 sm:p-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {randomExperts.map((expert, index) => (
              <div
                key={index}
                className="transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg rounded-xl"
              >
                <ExpertCard {...expert} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RecommendExpert;

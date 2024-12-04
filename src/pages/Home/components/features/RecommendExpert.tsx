import { getRandomExperts } from '@/utils/getRandomExpert';
import { Card, CardContent } from '@ui/card';
import { ExpertCard } from './ExpertCard';

const RecommendExpert = () => {
  const randomExperts = getRandomExperts(3);

  return (
    <div className="mx-4 py-8 sm:mx-8 lg:mx-12">
      <div className="mb-6 flex items-center gap-2 px-2">
        <h2 className="font-eland text-2xl tracking-tight">
          응답이 빠른 노무사
        </h2>
      </div>

      <Card className="border-none bg-transparent shadow-none">
        <CardContent className="p-0 sm:p-2">
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {randomExperts.map((expert, index) => (
              <div
                key={index}
                className="transform rounded-xl transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
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

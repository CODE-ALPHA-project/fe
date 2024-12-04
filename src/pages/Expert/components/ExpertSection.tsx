import { ExpertCard } from './ExpertCard';
import { ExpertProps } from '@/pages/Home/types/type';

interface ExpertGridProps {
  experts: ExpertProps[];
}

const ExpertSection = ({ experts }: ExpertGridProps) => {
  return (
    <section className="h-full w-full space-y-2 p-2">
      {experts.length > 0 ? (
        <div className="grid grid-cols-2 gap-4">
          {experts.map((expert, index) => (
            <ExpertCard key={index} {...expert} />
          ))}
        </div>
      ) : (
        <div className="flex h-[50vh] items-center justify-center">
          <p className="text-center font-pretendard text-xl text-gray-500">
            일치하는 결과가 없습니다.
          </p>
        </div>
      )}
    </section>
  );
};

export default ExpertSection;

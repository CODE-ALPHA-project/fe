import { questions } from '@/mock/frequentQuestion';
import FrequentQuestionItem from '@/pages/QnA/components/FrequentQuestionItem';

const FrequentQuestionSection = () => {
  return (
    <section className="px-3 pt-6">
      <span className="text-xl font-bold">자주 묻는 질문</span>
      <div className="w-full">
        {questions.map(question => (
          <FrequentQuestionItem key={question} title={question} />
        ))}
      </div>
    </section>
  );
};
export default FrequentQuestionSection;

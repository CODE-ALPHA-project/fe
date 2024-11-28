import { ChevronRight } from 'lucide-react';

interface QuestionTitleProp {
  title: string;
}

const FrequentQuestionItem = ({ title }: QuestionTitleProp) => {
  const clickHandler = () => {
    console.log('click');
  };

  return (
    <div
      className="mx-1 mt-2 flex justify-between border-b border-b-gray-200 bg-white py-3 font-normal"
      onClick={clickHandler}
    >
      {title}
      <ChevronRight size={30} />
    </div>
  );
};
export default FrequentQuestionItem;

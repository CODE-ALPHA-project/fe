import UserQuestionItem from '@/pages/QnA/components/UserQuestionItem';
import { useFlow } from '@/stackflow';
import { Pencil } from 'lucide-react';

const UserQuestionSection = () => {
  const { push } = useFlow();
  return (
    <section className="flex w-full flex-col px-3 py-5">
      <div className="flex justify-between text-xl font-bold">
        사용자 질문 글
        <Pencil className="mr-2" onClick={() => push('WritePage', {})} />
      </div>
      <div className="py-6">
        <UserQuestionItem />
      </div>
    </section>
  );
};
export default UserQuestionSection;

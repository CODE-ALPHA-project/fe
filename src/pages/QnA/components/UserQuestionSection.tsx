import UserQuestionItem from '@/pages/QnA/components/UserQuestionItem';

const UserQuestionSection = () => {
  return (
    <section className="flex w-full flex-col px-3 py-5">
      <div className="flex justify-between pt-2 text-xl font-bold">
        사용자 질문 글
      </div>
      <div className="py-5">
        <UserQuestionItem />
      </div>
    </section>
  );
};
export default UserQuestionSection;

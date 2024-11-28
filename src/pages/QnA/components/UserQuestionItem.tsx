import { UserQuestions } from '@/mock/userQuestion';
import { MessageSquare } from 'lucide-react';

const UserQuestionItem = () => {
  return (
    <div className="flex flex-col gap-3">
      {UserQuestions.map((question, index) => (
        <div
          key={index}
          className="flex flex-col rounded-lg border border-gray-200 p-4"
        >
          <div className="truncate font-semibold">{question.title}</div>
          <div className="mt-3 line-clamp-2">{question.content}</div>
          <div className="flex items-center justify-end gap-1">
            <MessageSquare size={20} />
            <span>{question.comment}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default UserQuestionItem;

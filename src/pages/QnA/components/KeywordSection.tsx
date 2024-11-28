import { keywords } from '@/mock/keyword';
import KeywordBadge from '@/pages/QnA/components/KeywordBadge';

const KeywordSection = () => {
  return (
    <section className="flex w-full flex-col px-3 py-3">
      <div className="mt-2 flex flex-wrap gap-3">
        {keywords.map(keyword => (
          <KeywordBadge key={keyword} keyword={keyword} />
        ))}
      </div>
    </section>
  );
};
export default KeywordSection;

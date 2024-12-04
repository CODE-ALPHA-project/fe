import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';

import BottomTab from '@/components/display/BottomTab';
import FrequentQuestionSection from '@/pages/QnA/components/FrequentQuestionSection';
import KeywordSection from '@/pages/QnA/components/KeywordSection';
import SearchSection from '@/pages/QnA/components/SearchSection';
import UserQuestionSection from '@/pages/QnA/components/UserQuestionSection';
import WriteButton from '@/pages/QnA/components/WriteButton';

const QnAPage: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: '질문', height: '55px' }}>
      <div className="fixed inset-0 overflow-auto">
        <div className="min-h-screen pb-20">
          <SearchSection />
          <KeywordSection />
          <FrequentQuestionSection />
          <UserQuestionSection />
          <WriteButton />
          <BottomTab />
        </div>
      </div>
    </AppScreen>
  );
};

export default QnAPage;

// <div className="relative h-10 w-10 justify-items-center rounded-full bg-gray-200">
//           <Pencil className="mt-2" onClick={() => push('WritePage', {})} />
//         </div>

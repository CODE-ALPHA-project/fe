import BottomTab from '@/components/display/BottomTab';
import FrequentQuestionSection from '@/pages/QnA/components/FrequentQuestionSection';
import KeywordSection from '@/pages/QnA/components/KeywordSection';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import SearchSection from '@/pages/QnA/components/SearchSection';
import UserQuestionSection from '@/pages/QnA/components/UserQuestionSection';

const QnAPage: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: '질문', height: '55px' }}>
      <div className="fixed inset-0 overflow-auto">
        <div className="min-h-screen pb-20">
          <SearchSection />
          <KeywordSection />
          <FrequentQuestionSection />
          <UserQuestionSection />
          <BottomTab />
        </div>
      </div>
    </AppScreen>
  );
};

export default QnAPage;

import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';

import CategorySection from '@/pages/Write/components/CategorySection';
import WriteSection from '@/pages/Write/components/WriteSection';

const WritePage: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: 'write', height: '55px' }}>
      <div className="flex h-full w-full flex-col gap-2 px-2 pt-5">
        <CategorySection />
        <WriteSection />
      </div>
    </AppScreen>
  );
};

export default WritePage;

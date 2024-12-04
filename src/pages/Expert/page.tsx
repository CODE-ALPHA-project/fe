import BottomTab from '@/components/display/BottomTab';
import SelectFilter from '@/pages/Expert/components/SelectFilter';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import { experts } from '@/mock/expert';
import { useState } from 'react';
import ExpertSection from '@/pages/Expert/components/ExpertSection';

const ExpertPage: ActivityComponentType = () => {
  const [selectedFilter, setSelectedFilter] = useState('');

  const filteredExperts = experts.filter(expert =>
    selectedFilter ? expert.tags.includes(selectedFilter) : true,
  );

  return (
    <AppScreen appBar={{ title: '노무사목록', height: '55px' }}>
      <div className="fixed inset-0 overflow-auto">
        <div className="flex w-full flex-col px-3 py-3">
          <SelectFilter value={selectedFilter} onChange={setSelectedFilter} />
          <ExpertSection experts={filteredExperts} />
        </div>
        <BottomTab />
      </div>
    </AppScreen>
  );
};

export default ExpertPage;

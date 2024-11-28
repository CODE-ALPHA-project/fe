import BottomTab from '@/components/display/BottomTab';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';

const ExpertPage: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: 'Expert', height: '55px' }}>
      <div className="fixed inset-0 overflow-auto">
        <div className="flex w-full flex-col px-3 py-3">
          전체 노무사들은 누르면 Modal로 상세 정보
          <section className="h-full w-full text-center">
            <span className="text-xl font-bold">3명 카드형태</span>
            <div className="border border-black">
              노무사3명 Card 누르면 디테일 모달
            </div>
          </section>
          <section className="text-2xl">지역별?</section>
          <section className="text-2xl">??</section>
        </div>
        <BottomTab />
      </div>
    </AppScreen>
  );
};

export default ExpertPage;

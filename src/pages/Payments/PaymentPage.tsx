import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';

import PaymentCard from './PaymentCard';
import BottomTab from '@/components/display/BottomTab';
import { basicPlan, premiumPlan } from '@/pages/Payments/plan';

const PaymentPage: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: 'Payment', height: '55px' }}>
      <div className="fixed inset-0 overflow-auto">
        <div className="container mx-auto min-h-[calc(100vh-100px)] pb-20">
          <div className="flex flex-col items-center justify-center px-4 py-3 md:py-20">
            <div className="flex w-full max-w-[1200px] flex-col items-center justify-center gap-6 md:flex-row">
              <PaymentCard {...basicPlan} className="w-full md:w-1/2" />
              <PaymentCard {...premiumPlan} className="w-full md:w-1/2" />
            </div>
          </div>
        </div>
        <BottomTab />
      </div>
    </AppScreen>
  );
};
export default PaymentPage;

import BottomTab from '@/components/display/BottomTab';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';

const MenuPage: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: 'Menu', height: '55px' }}>
      <div className="fixed inset-0 overflow-auto">
        <div className="flex flex-wrap gap-3">
          <section className="p-4">asd</section>
        </div>
        <BottomTab />
      </div>
    </AppScreen>
  );
};

export default MenuPage;

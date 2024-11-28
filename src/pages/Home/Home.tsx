import Banner from './components/features/Banner';
import QnASection from './components/features/QnASection';
import MenuList from './components/features/MenuList';
import RecommendExpert from './components/features/RecommendExpert';
import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import BottomTab from '@/components/display/BottomTab';

const Home: ActivityComponentType = () => {
  return (
    <AppScreen>
      <div className="fixed inset-0 overflow-auto">
        <div className="flex min-h-screen w-full flex-col font-sans antialiased">
          <Banner />
          <main className="animate-fadeIn w-full flex-1">
            <div className="space-y-16 py-12">
              <section className="container mx-auto border-b-4 border-gray-100 pb-16">
                <RecommendExpert />
              </section>
              <section className="border-b-4 border-gray-100 pb-16">
                <QnASection />
              </section>
              <section className="border-b-4 border-gray-100 pb-16">
                <MenuList />
              </section>
            </div>
          </main>
        </div>
        <BottomTab />
      </div>
    </AppScreen>
  );
};

export default Home;

import Banner from "./components/features/Banner";
import QnASection from "./components/features/QnASection";
import MenuList from "./components/features/MenuList";
import RecommendExpert from "./components/features/RecommendExpert";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import BottomTab from "@/components/display/BottomTab";

const Home: ActivityComponentType = () => {
  return (
    <AppScreen>
      <div className="fixed inset-0 overflow-auto">
        <div className="flex min-h-screen w-full flex-col font-sans antialiased">
          <Banner />
          <main className="flex-1 w-full animate-fadeIn">
            <div className="space-y-16 py-12">
              <section className="container mx-auto">
                <RecommendExpert />
              </section>
              <section>
                <QnASection />
              </section>
              <section>
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

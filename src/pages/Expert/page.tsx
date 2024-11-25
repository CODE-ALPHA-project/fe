import BottomTab from "@/components/display/BottomTab";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";

const ExpertPage: ActivityComponentType = () => {
  console.log(window.location.pathname);
  return (
    <AppScreen appBar={{ title: "Expert" }}>
      <div className="fixed inset-0 overflow-auto">
        <div>ASd</div>
        <BottomTab />
      </div>
    </AppScreen>
  );
};

export default ExpertPage;

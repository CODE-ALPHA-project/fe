import BottomTab from "@/components/display/BottomTab";
import { AppScreen } from "@stackflow/plugin-basic-ui";
import { ActivityComponentType } from "@stackflow/react";

const QnAPage: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: "QnA" }}>
      <div className="fixed inset-0 overflow-auto">
        <div>HS</div>
        <BottomTab />
      </div>
    </AppScreen>
  );
};

export default QnAPage;

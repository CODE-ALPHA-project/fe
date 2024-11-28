import BottomTab from '@/components/display/BottomTab';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';

const PostPage: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ title: '공지사항', height: '55px' }}>
      <div className="fixed inset-0 overflow-auto">
        <div>Post</div>
        <BottomTab />
      </div>
    </AppScreen>
  );
};

export default PostPage;

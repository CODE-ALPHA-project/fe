import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';

import BottomTab from '@/components/display/BottomTab';
import PostItem from '@/pages/Post/components/PostItem';
import PostPagination from '@/pages/Post/components/PostPagination';
import { posts } from '@/mock/post';
// import { useFlow } from '@/stackflow';

const PostPage: ActivityComponentType = () => {
  // const { push } = useFlow();
  return (
    <AppScreen appBar={{ title: '공지사항', height: '55px' }}>
      <div className="fixed inset-0 flex flex-col">
        <div className="flex-1 overflow-auto pb-[120px]">
          <PostItem />
          <PostPagination
            totalItems={posts.length}
            itemsPerPage={7}
            currentPage={1}
            onPageChange={() => console.log(posts.length)}
          />
        </div>
        <BottomTab />
      </div>
    </AppScreen>
  );
};

export default PostPage;

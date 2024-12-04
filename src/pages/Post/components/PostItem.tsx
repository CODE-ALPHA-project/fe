import { posts } from '@/mock/post';

const PostItem = () => {
  return (
    <div className="font-pretendard bottom-20 space-y-2">
      {posts.map(post => (
        <div
          key={post.id}
          className="grid-rows grid gap-4 border-b border-b-gray-200 px-4 py-3"
        >
          <div>
            <span className="inline-block rounded-lg bg-blue-300/30 px-2 py-1 text-sm text-gray-600">
              {post.category}
            </span>
          </div>
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-medium">{post.title}</h3>
            <span className="text-sm text-gray-500">{post.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostItem;

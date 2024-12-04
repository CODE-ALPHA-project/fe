import img1 from '@assets/img1.webp';
import defaultImage from '@assets/image.webp';
import { Button } from '@/components/ui/button';

const userInfo = {
  name: '유저1',
  email: 'example@email.com',
  profileImage: img1,
};

const UserInfo = () => {
  return (
    <div className="flex w-full max-w-md flex-col items-center">
      <div className="relative mb-4">
        <img
          src={userInfo.profileImage}
          defaultValue={defaultImage}
          alt="프로필 이미지"
          className="h-25 w-25 rounded-full border-2 border-gray-200 object-cover"
        />
      </div>
      <div className="flex w-full flex-col items-center space-y-2">
        <h2 className="text-xl font-bold text-gray-800">{userInfo.name}</h2>
        <p className="text-gray-500">{userInfo.email}</p>
      </div>
      <Button className="mt-3 h-10 w-full rounded-lg border bg-blue-400/40 px-6 py-2 text-black shadow-none hover:bg-gray-500">
        프로필 수정
      </Button>
    </div>
  );
};
export default UserInfo;

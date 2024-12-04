import UserInfo from '@/pages/My/components/UserInfo';
import UserMenu from '@/pages/My/components/UserMenu';
import { useFlow } from '@/stackflow';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { ActivityComponentType } from '@stackflow/react';
import { useEffect } from 'react';

const userMenu = [
  { title: '내 질문' },
  { title: '내 채팅' },
  { title: '매칭 기록' },
  { title: 'ㅠㅠ' },
];

const MyPage: ActivityComponentType = () => {
  const { push } = useFlow();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    if (!isLoggedIn) {
      push('LoginPage', {}, { animate: false });
    }
  }, [push]);

  return (
    <AppScreen appBar={{ title: '마이페이지', height: '55px' }}>
      <section className="flex h-full flex-col items-center px-2 py-6 font-pretendard">
        <UserInfo />
        {userMenu.map((menu, index) => (
          <UserMenu key={index} title={menu.title} />
        ))}
        <div className="flex flex-row py-12 text-gray-400">
          <span className="mx-2 border-b border-b-gray-800">
            개인정보처리방침
          </span>
          <span className="mx-2 border-b border-b-gray-800">회원탈퇴</span>
        </div>
      </section>
    </AppScreen>
  );
};
export default MyPage;

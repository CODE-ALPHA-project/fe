import { Button } from '@/components/ui/button';
import { SheetClose } from '@/components/ui/sheet';
import { useFlow } from '@/stackflow';

const SheetLogin = () => {
  const { push } = useFlow();
  const loggedIn = localStorage.getItem('isLoggedIn');

  const handleLogOut = () => {
    localStorage.removeItem('isLoggedIn');
    push('Home', {}, { animate: false });
    window.location.reload();
  };

  return (
    <section className="mt-2 py-3 text-center font-pretendard">
      <SheetClose>
        {loggedIn ? (
          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-1">
              <span className="text-gray-600">환영합니다,</span>
              <span className="font-bold text-blue-600">유저1</span>
              <span className="text-gray-600">님</span>
            </div>
            <Button
              className="w-[260px] bg-blue-600 hover:bg-blue-600"
              onClick={handleLogOut}
            >
              로그아웃
            </Button>
          </div>
        ) : (
          <Button
            className="w-[260px] bg-blue-600 hover:bg-blue-600"
            onClick={() => push('LoginPage', {}, { animate: false })}
          >
            로그인/회원가입
          </Button>
        )}
      </SheetClose>
    </section>
  );
};

export default SheetLogin;

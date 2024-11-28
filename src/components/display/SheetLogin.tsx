import { Button } from '@/components/ui/button';
import { SheetClose } from '@/components/ui/sheet';
import { useFlow } from '@/stackflow';

const SheetLogin = () => {
  const { push } = useFlow();
  return (
    <section className="mt-2 py-3 text-center">
      <SheetClose>
        {/* <div className="py-2 font-bold">안녕하세요</div> */}
        <Button
          className="w-[260px] bg-blue-600 hover:bg-blue-600"
          onClick={() => push('LoginPage', {}, { animate: false })}
        >
          로그인/회원가입
        </Button>
      </SheetClose>
    </section>
  );
};

export default SheetLogin;

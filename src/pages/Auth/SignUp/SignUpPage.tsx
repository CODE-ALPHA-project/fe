import { useFlow } from '@/stackflow';
import { useState } from 'react';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  EyeIcon,
  EyeOffIcon,
  LockIcon,
  MailIcon,
  UserIcon,
} from 'lucide-react';
import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';

const SignupPage: ActivityComponentType = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { push } = useFlow();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  return (
    <AppScreen appBar={{ title: '회원가입', height: '55px' }}>
      <div className="flex min-h-screen flex-col items-center justify-center p-4 px-6 sm:px-10">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="bg-clip-text font-eland text-5xl font-bold text-black drop-shadow-md">
              SolveUs
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              새로운 계정을 만들어 시작하세요.
            </p>
          </div>

          <Card className="mx-auto w-full max-w-md border-opacity-50 bg-white/90 pb-10 shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-semibold">
                회원가입
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700"
                  >
                    이름
                  </Label>
                  <div className="relative">
                    <Input
                      id="name"
                      placeholder="이름을 입력하세요."
                      required
                      className="pl-10"
                    />
                    <UserIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    이메일
                  </Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@email.com"
                      required
                      className="pl-10"
                    />
                    <MailIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    비밀번호
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      required
                      className="pl-10"
                    />
                    <LockIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="absolute right-3 top-1/2 -translate-y-1/2 transform"
                    >
                      {showPassword ? (
                        <EyeOffIcon className="h-4 w-4 text-gray-500" />
                      ) : (
                        <EyeIcon className="h-4 w-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="confirmPassword"
                    className="text-sm font-medium text-gray-700"
                  >
                    비밀번호 확인
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirmPassword"
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      className="pl-10"
                    />
                    <LockIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                    <button
                      type="button"
                      onClick={toggleConfirmPasswordVisibility}
                      className="absolute right-3 top-1/2 -translate-y-1/2 transform"
                    >
                      {showConfirmPassword ? (
                        <EyeOffIcon className="h-4 w-4 text-gray-500" />
                      ) : (
                        <EyeIcon className="h-4 w-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  회원가입
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-gray-500">이미 계정이 있으신가요?</p>
              <span
                className="ml-1 text-blue-600 underline hover:text-blue-500"
                onClick={() => push('LoginPage', {})}
              >
                로그인
              </span>
            </CardFooter>
          </Card>
        </div>
      </div>
    </AppScreen>
  );
};

export default SignupPage;

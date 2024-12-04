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
import { EyeIcon, EyeOffIcon, LockIcon, MailIcon } from 'lucide-react';
import { ActivityComponentType } from '@stackflow/react';
import { AppScreen } from '@stackflow/plugin-basic-ui';
import { Checkbox } from '@/components/ui/checkbox';
import { Link } from 'react-router-dom';

const LoginPage: ActivityComponentType = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { push } = useFlow();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (email === 'ex1@gmail.com' && password === 'asd123') {
      try {
        await new Promise(resolve => setTimeout(resolve, 500));

        localStorage.setItem('isLoggedIn', 'true');
        push('Home', {});
      } catch (err) {
        setError('로그인 중 오류가 발생했습니다.');
      }
    } else {
      setError('이메일 또는 비밀번호가 올바르지 않습니다.');
    }

    setIsLoading(false);
  };

  return (
    <AppScreen appBar={{ title: '로그인', height: '55px' }}>
      <div className="flex min-h-screen flex-col items-center justify-center p-4 px-6 sm:px-10">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h2 className="mt-6 bg-clip-text font-eland text-5xl font-bold text-black drop-shadow-md">
              SolveUs
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              환영합니다! 계정에 로그인하세요.
            </p>
          </div>

          <Card className="border-opacity-50 bg-white/90 shadow-lg">
            <CardHeader>
              <CardTitle className="text-center text-2xl font-semibold">
                로그인
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="text-center text-sm text-red-500">
                    {error}
                  </div>
                )}
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
                      placeholder="m@example.com"
                      required
                      className="pl-10"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
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
                      value={password}
                      onChange={e => setPassword(e.target.value)}
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
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Checkbox id="remember" />
                    <label
                      htmlFor="remember"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      로그인 상태 유지
                    </label>
                  </div>
                  <div className="text-sm">
                    <Link
                      to="#"
                      className="font-medium text-blue-600 hover:text-blue-500"
                    >
                      비밀번호를 잊으셨나요?
                    </Link>
                  </div>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 text-white hover:bg-blue-700"
                  disabled={isLoading}
                >
                  {isLoading ? '로그인 중...' : '로그인'}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex justify-center">
              <p className="text-sm text-gray-500">아직 회원이 아니신가요?</p>
              <p
                className="ml-1 cursor-pointer text-blue-600 underline hover:text-blue-500"
                onClick={() => push('SignupPage', {})}
              >
                회원가입
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </AppScreen>
  );
};

export default LoginPage;

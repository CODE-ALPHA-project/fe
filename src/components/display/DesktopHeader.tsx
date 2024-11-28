// import React from 'react';
// import { Button } from '@ui/button';
// import { cn } from '@lib/utils';
// import SearchBar from '@/pages/Home/components/layout/SearchBar';
// import { ModeToggle } from '@/components/mode-toggle';
// import { useFlow } from '@/stackflow';

// type ActivityName =
//   | 'Home'
//   | 'LoginPage'
//   | 'SignupPage'
//   | 'ChatPage'
//   | 'ExpertSigninPage'
//   | 'ExpertPage'
//   | 'QnAPage'
//   | 'PaymentPage';

// const DesktopHeader: React.FC = () => {
//   const { push } = useFlow();
//   const navigationItems: Array<{ label: string; path: ActivityName }> = [
//     { label: '전문가찾기', path: 'ExpertPage' },
//     { label: '질문답변', path: 'QnAPage' },
//     { label: '포스트', path: 'PaymentPage' },
//     { label: '비용안내', path: 'PaymentPage' },
//     { label: '채팅하기', path: 'ChatPage' },
//   ];

//   return (
//     <header className="w-full border-b border-border/40 bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
//       <div className="container mx-auto px-4">
//         <div className="flex h-16 items-center justify-between gap-8">
//           <h1
//             className="cursor-pointer bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-2xl font-bold text-transparent"
//             onClick={() => push('Home', {}, { animate: true })}
//           >
//             SolveUs
//           </h1>

//           <SearchBar />

//           <div className="flex items-center gap-3">
//             <ModeToggle />

//             <div className="h-6 w-px bg-border/60" />

//             <Button
//               variant="outline"
//               onClick={() => push('LoginPage', {}, { animate: true })}
//               className={cn(
//                 'bg-background hover:bg-secondary/50',
//                 'border border-border/50',
//                 'font-medium text-foreground',
//                 'h-10 rounded-xl px-5',
//                 'transition-all duration-300',
//                 'hover:border-primary/50',
//               )}
//             >
//               로그인
//             </Button>

//             <Button
//               variant="default"
//               onClick={() => push('ExpertSigninPage', {}, { animate: true })}
//               className={cn(
//                 'bg-gradient-to-r from-primary to-primary/90',
//                 'hover:from-primary/90 hover:to-primary',
//                 'font-medium text-primary-foreground',
//                 'h-10 rounded-xl px-5',
//                 'shadow-lg shadow-primary/20',
//                 'transition-all duration-300',
//                 'hover:shadow-xl hover:shadow-primary/30',
//                 'hover:scale-[1.02]',
//               )}
//             >
//               전문가 가입
//             </Button>
//           </div>
//         </div>

//         <nav className="flex border-t border-border/40">
//           {navigationItems.map(item => (
//             <Button
//               key={item.path}
//               variant="ghost"
//               onClick={() => push(item.path, {}, { animate: true })}
//               className={cn(
//                 'h-12 rounded-none px-5 text-sm font-medium',
//                 'group relative hover:bg-transparent',
//                 'transition-all duration-300',
//                 'after:absolute after:bottom-0 after:left-1/2',
//                 'after:h-1 after:w-2 after:rounded-full',
//                 'after:bg-primary after:transition-all after:duration-300',
//                 'after:-translate-x-1/2 after:opacity-0',
//                 'hover:after:w-4/5 hover:after:opacity-100',
//                 'hover:text-primary',
//               )}
//             >
//               {item.label}
//             </Button>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default DesktopHeader;

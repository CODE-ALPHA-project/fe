// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { Card, CardContent } from "@ui/card";
// import { Search, MessageSquare, Bell } from "lucide-react";

// interface MenuCardProps {
//   icon: React.ReactNode;
//   title: React.ReactNode;
//   description: React.ReactNode;
//   onClick: () => void;
// }

// const MenuCard: React.FC<MenuCardProps> = ({
//   icon,
//   title,
//   description,
//   onClick,
// }) => {
//   return (
//     <Card
//       onClick={onClick}
//       className="bg-neutral-800 border-neutral-700 hover:bg-neutral-700 transition-all duration-200 cursor-pointer w-full max-w-sm"
//     >
//       <CardContent className="pt-6">
//         <div className="flex flex-col items-center text-center space-y-4">
//           <div className="p-3 bg-blue-500/10 rounded-xl">{icon}</div>
//           <h3 className="text-xl font-semibold text-white whitespace-pre-line">
//             {title}
//           </h3>
//           <p className="text-neutral-400 whitespace-pre-line">{description}</p>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// const MenuList: React.FC = () => {
//   const navigate = useNavigate();

//   const menuItems = [
//     {
//       icon: <Search className="w-8 h-8 text-blue-500" />,
//       title: "나에게 딱맞는\n전문가 찾기",
//       description: "업무별, 업종별로 나에게\n딱 맞는 전문가를 찾아보세요!",
//       path: "/",
//     },
//     {
//       icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
//       title: "간단한 세무 상담\n질의 작성하기",
//       description: "간단한 상담이 필요하신가요?\n질문답변에서 물어보세요!",
//       path: "/",
//     },
//     {
//       icon: <Bell className="w-8 h-8 text-blue-500" />,
//       title: "국가에서 제공하는\n외국인 공지사항",
//       description: "필요한 외국인 정보는\n바로 찾아가세요!",
//       path: "/",
//     },
//   ];

//   return (
//     <section className="bg-neutral-900 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="container mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-white mb-3">
//             원하는 메뉴를 선택하세요
//           </h2>
//           <p className="text-lg text-neutral-400">찾을 필요없이 바로 가기</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
//           {menuItems.map((item, index) => (
//             <MenuCard
//               key={index}
//               icon={item.icon}
//               title={item.title}
//               description={item.description}
//               onClick={() => navigate(item.path)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MenuList;
import React from "react";
import { Card, CardContent } from "@ui/card";
import { Search, MessageSquare, Bell } from "lucide-react";
import { useFlow } from "@/stackflow";

interface MenuCardProps {
  icon: React.ReactNode;
  title: React.ReactNode;
  description: React.ReactNode;
  onClick: () => void;
}

// Activity 타입 정의
type ActivityName =
  | "Home"
  | "LoginPage"
  | "SignupPage"
  | "ChatPage"
  | "ExpertSigninPage"
  | "ExpertPage"
  | "QnAPage"
  | "PaymentPage";

const MenuCard: React.FC<MenuCardProps> = ({
  icon,
  title,
  description,
  onClick,
}) => {
  return (
    <Card
      onClick={onClick}
      className="bg-neutral-800 border-neutral-700 hover:bg-neutral-700 transition-all duration-200 cursor-pointer w-full max-w-sm"
    >
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="p-3 bg-blue-500/10 rounded-xl">{icon}</div>
          <h3 className="text-xl font-semibold text-white whitespace-pre-line">
            {title}
          </h3>
          <p className="text-neutral-400 whitespace-pre-line">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

const MenuList: React.FC = () => {
  const { push } = useFlow();

  const menuItems: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    path: ActivityName;
  }> = [
    {
      icon: <Search className="w-8 h-8 text-blue-500" />,
      title: "나에게 딱맞는\n전문가 찾기",
      description: "업무별, 업종별로 나에게\n딱 맞는 전문가를 찾아보세요!",
      path: "ExpertPage",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-blue-500" />,
      title: "간단한 세무 상담\n질의 작성하기",
      description: "간단한 상담이 필요하신가요?\n질문답변에서 물어보세요!",
      path: "QnAPage",
    },
    {
      icon: <Bell className="w-8 h-8 text-blue-500" />,
      title: "국가에서 제공하는\n외국인 공지사항",
      description: "필요한 외국인 정보는\n바로 찾아가세요!",
      path: "Home",
    },
  ];

  return (
    <section className="bg-neutral-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">
            원하는 메뉴를 선택하세요
          </h2>
          <p className="text-lg text-neutral-400">찾을 필요없이 바로 가기</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {menuItems.map((item, index) => (
            <MenuCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              onClick={() => push(item.path, {}, { animate: true })}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuList;

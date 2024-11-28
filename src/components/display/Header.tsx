// import React, { useState } from "react";
// import { useMediaQuery } from "react-responsive";
// import Sidebar from "../../pages/Home/components/layout/Sidebar";
// import MobileHeader from "./MobileHeader";
// import DesktopHeader from "./DesktopHeader";

// export const Header: React.FC = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const isDesktop = useMediaQuery({ minWidth: 768 });

//   return (
//     <>
//       {isDesktop ? (
//         <DesktopHeader />
//       ) : (
//         <MobileHeader
//           isSidebarOpen={isSidebarOpen}
//           setIsSidebarOpen={setIsSidebarOpen}
//         />
//       )}
//       <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
//     </>
//   );
// };

// export default Header;

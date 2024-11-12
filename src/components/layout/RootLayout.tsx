import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../display/Header";
import Footer from "../display/Footer";

const RootLayout = () => {
  const location = useLocation();

  const hideHeaderFooterPaths = [
    "/chatting",
    "/login",
    "/signup",
    "/expert-login",
  ];

  const shouldHideHeaderFooter = hideHeaderFooterPaths.some((path) =>
    location.pathname.startsWith(path),
  );

  return (
    <>
      {!shouldHideHeaderFooter && <Header />}
      <main role="main">
        <Outlet />
      </main>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
};

export default RootLayout;

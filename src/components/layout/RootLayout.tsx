import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../display/Header";
import Footer from "../display/Footer";
import { defaultLayout } from "./Layout.css";

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
      <main role="main" className={defaultLayout}>
        <Outlet />
      </main>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
};

export default RootLayout;

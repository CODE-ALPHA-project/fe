import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../display/Header";
import Footer from "../display/Footer";
import { defaultLayout } from "./Layout.css";

const RootLayout = () => {
  const location = useLocation();

  const hideHeaderFooter = location.pathname === "/chatting";

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <main role="main" className={defaultLayout}>
        <Outlet />
      </main>
      {!hideHeaderFooter && <Footer />}
    </>
  );
};

export default RootLayout;

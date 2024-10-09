import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../display/Header";
import Footer from "../display/Footer";
import { defaultLayout } from "./Layout.css";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main role="main" className={defaultLayout}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default RootLayout;

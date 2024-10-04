import React from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home.tsx";
import ChattingPage from "./pages/Chatting.tsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/chatting" element={<ChattingPage />} />
      </Route>
    </Routes>
  );
};

export default Router;

import React from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home/Home.tsx";
import ChatPage from "./pages/Chat/ChatPage.tsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/chatting" element={<ChatPage />} />
      </Route>
    </Routes>
  );
};

export default Router;

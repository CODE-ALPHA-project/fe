import React from "react";
import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home/Home.tsx";
import ChatPage from "./pages/Chat/ChatPage.tsx";
import SignInPage from "./pages/Auth/SignIn/SignInPage.tsx";
import SignUpPage from "./pages/Auth/SignUp/SignUpPage.tsx";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/chatting" element={<ChatPage />} />
      </Route>
    </Routes>
  );
};

export default Router;

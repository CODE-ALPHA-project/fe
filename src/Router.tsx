import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home/Home";
import ChatPage from "./pages/Chat/ChatPage";
import SignInPage from "./pages/Auth/SignIn/SignInPage";
import SignUpPage from "./pages/Auth/SignUp/SignUpPage";
import ExpertPage from "./pages/Expert/page";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/chatting" element={<ChatPage />} />
        <Route path="/expert" element={<ExpertPage />} />
      </Route>
    </Routes>
  );
};

export default Router;

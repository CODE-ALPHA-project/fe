import { Route, Routes } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home/Home";
import ChatPage from "./pages/Chat/ChatPage";
import SignInPage from "./pages/Auth/SignIn/SignInPage";
import SignUpPage from "./pages/Auth/SignUp/SignUpPage";
import ExpertPage from "./pages/Expert/page";
import PaymentPage from "./pages/Payments/PaymentPage";
import QnAPage from "./pages/QnA/QnAPage";
import ExpertSigninPage from "./pages/Auth/ExpertSignIn/ExpertSigninPage";
import PostPage from "./pages/Post/PostPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/chatting" element={<ChatPage />} />
        <Route path="/expert" element={<ExpertPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/qa" element={<QnAPage />} />
        <Route path="/expert-signin" element={<ExpertSigninPage />} />
        <Route path="/posts" element={<PostPage />} />
      </Route>
    </Routes>
  );
};

export default Router;

import { createRoutesFromChildren, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import ChatPage from "./pages/Chat/ChatPage";
import SignInPage from "./pages/Auth/SignIn/SignInPage";
import SignUpPage from "./pages/Auth/SignUp/SignUpPage";
import ExpertPage from "./pages/Expert/page";
import PaymentPage from "./pages/Payments/PaymentPage";
import QnAPage from "./pages/QnA/QnAPage";
import ExpertSigninPage from "./pages/Auth/ExpertSignIn/ExpertSigninPage";
import PostPage from "./pages/Post/PostPage";

const Router = createRoutesFromChildren(
  <Routes>
    <Route index element={<Home params={Home} />} />
    <Route path="/login" element={<SignInPage params={SignInPage} />} />
    <Route path="/signup" element={<SignUpPage params={SignUpPage} />} />
    <Route path="/chatting" element={<ChatPage params={ChatPage} />} />
    <Route path="/expert" element={<ExpertPage params={ExpertPage} />} />
    <Route path="/payment" element={<PaymentPage params={PaymentPage} />} />
    <Route path="/qa" element={<QnAPage params={QnAPage} />} />
    <Route
      path="/expert-signin"
      element={<ExpertSigninPage params={ExpertSigninPage} />}
    />
    <Route path="/posts" element={<PostPage params={PostPage} />} />
  </Routes>,
);

export default Router;

import "@stackflow/plugin-basic-ui/index.css";

import { stackflow } from "@stackflow/react";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import Home from "@/pages/Home/Home";
import LoginPage from "@/pages/Auth/SignIn/SignInPage";
import SignupPage from "@/pages/Auth/SignUp/SignUpPage";
import ExpertSigninPage from "@/pages/Auth/ExpertSignIn/ExpertSigninPage";
import ExpertPage from "@/pages/Expert/page";
import QnAPage from "@/pages/QnA/QnAPage";
import PaymentPage from "@/pages/Payments/PaymentPage";
import ChatPage from "@/pages/Chat/ChatPage";
export const { Stack, useFlow } = stackflow({
  transitionDuration: 350,
  plugins: [
    basicRendererPlugin(),
    basicUIPlugin({
      theme: "cupertino",
    }),
    historySyncPlugin({
      routes: {
        Home: "/",
        ChatPage: "/chatting",
        LoginPage: "/login",
        SignupPage: "/signup",
        QnAPage: "/qna",
        PaymentPage: "/payment",
        ExpertSigninPage: "/expertSignin",
        ExpertPage: "/experts",
      },
      fallbackActivity: () => "Home",
    }),
  ],
  activities: {
    Home,
    LoginPage,
    SignupPage,
    ChatPage,
    ExpertSigninPage,
    ExpertPage,
    QnAPage,
    PaymentPage,
  },
});

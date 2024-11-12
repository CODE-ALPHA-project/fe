import { Separator } from "@ui/separator";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-100/50" />
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">법률 상담 서비스</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>강태현</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>강태현</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg">바로가기</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/about"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                회사 소개
              </Link>
              <Link
                to="/services"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                서비스 안내
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="font-bold text-lg">법적 고지</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                개인정보 처리방침
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                이용약관
              </Link>
            </nav>
          </div>
        </div>
        <Separator className="my-8" />
        <div className="text-center text-sm text-muted-foreground">
          <p>© {currentYear} 법률 상담 서비스. All rights reserved.</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20" />
    </footer>
  );
};

export default Footer;

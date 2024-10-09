import React from "react";
import { footer, footerContent, footerLink } from "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className={footer}>
        <div className={footerContent}>
          <p>© 2024 법률 상담 서비스 | 연락처: 강태현 | 전화: 강태현</p>
          <div>
            <a href="/privacy" className={footerLink}>
              개인정보 처리방침
            </a>
            <a href="/terms" className={footerLink}>
              이용약관
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

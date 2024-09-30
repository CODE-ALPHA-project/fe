import React from "react";
import { header, headerContent, logo, nav, link } from "./header.css";

const Header = () => {
  return (
    <>
      <header className={header}>
        <div className={headerContent}>
          <a href="/" className={logo}>
            법률 상담 서비스
          </a>
          <nav className={nav}>
            <a className={link} href="/consultation">
              법률 상담
            </a>
            <a className={link} href="/faq">
              자주 묻는 질문
            </a>
            <a className={link} href="/contact">
              연락처
            </a>
          </nav>
        </div>
      </header>
      ;
    </>
  );
};

export default Header;

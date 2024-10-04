// page : MainPage //
import React from "react";
import ImageSlider from "../components/display/ImageSlider";
import {
  container,
  main,
  button,
  heroSection,
  heroTitle,
  heroDescription,
  featuresSection,
  featureCard,
  featureIcon,
  featureTitle,
  featureDescription,
} from "./home.css";
import { slides } from "../utils/Slide";
import Footer from "../components/display/Footer";
import { Header } from "../components/display/Header";

const Home = () => {
  return (
    <div className={container}>
      <Header />
      <main className={main}>
        <section className={heroSection}>
          <h1 className={heroTitle}>외국인 노동자를 위한 법률 상담</h1>
          <p className={heroDescription}>
            당신의 권리를 지키세요. 전문 변호사와 무료로 상담받아보세요!
          </p>
          <ImageSlider slides={slides} />
          <button className={button}>무료 상담 시작하기</button>
        </section>
        <section className={featuresSection}>
          <div className={featureCard}>
            <div className={featureIcon}>🏛️</div>
            <h3 className={featureTitle}>전문 법률 자문</h3>
            <p className={featureDescription}>
              경험 많은 노무사들이 여러분의 케이스를 검토합니다.
            </p>
          </div>
          <div className={featureCard}>
            <div className={featureIcon}>🌐</div>
            <h3 className={featureTitle}>다국어 지원</h3>
            <p className={featureDescription}>
              여러 언어로 상담 서비스를 제공합니다.
            </p>
          </div>
          <div className={featureCard}>
            <div className={featureIcon}>🤝</div>
            <h3 className={featureTitle}>맞춤형 해결책</h3>
            <p className={featureDescription}>
              귀하의 상황에 맞는 최선의 해결책을 제시합니다.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;

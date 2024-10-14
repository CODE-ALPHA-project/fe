// page : MainPage //
import React from "react";
import * as styles from "./home.css";
import Banner from "./components/features/Banner.tsx";
import QnASection from "./components/features/QnASection.tsx";
import MenuList from "./components/features/MenuList.tsx";
import RecommendExpert from "./components/features/RecommendExpert.tsx";

const Home = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <main className={styles.main}>
        <RecommendExpert />
        <QnASection />
        <MenuList />
      </main>
    </div>
  );
};

export default Home;

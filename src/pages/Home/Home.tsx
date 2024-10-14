// page : MainPage //
import React from "react";
import * as styles from "./home.css";
import Banner from "./components/Banner.tsx";
import QnASection from "./components/QnASection.tsx";
import MenuList from "./components/MenuList.tsx";
import RecommendExpert from "./components/RecommendExpert.tsx";

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

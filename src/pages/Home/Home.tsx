// page : MainPage //
import React from "react";
import * as styles from "./home.css";
import { Banner } from "./components/Banner.tsx";
import { experts } from "../../mock/expert.ts";
import { ExpertCard } from "./components/ExpertCard.tsx";
import QnASection from "./components/QnASection.tsx";
import MenuList from "./components/MenuList.tsx";

const getRandomExperts = (count: number) => {
  const shuffled = [...experts].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Home = () => {
  const randomExperts = getRandomExperts(3);

  return (
    <div className={styles.container}>
      <Banner />
      <main className={styles.main}>
        <div className={styles.expertContainer}>
          <h2 className={styles.sectionTitle}>⭐추천노무사⭐</h2>
          <section className={styles.expertsSection}>
            {randomExperts.map((expert, index) => (
              <ExpertCard key={index} {...expert} />
            ))}
          </section>
        </div>
        <QnASection />
        <MenuList />
      </main>
    </div>
  );
};

export default Home;

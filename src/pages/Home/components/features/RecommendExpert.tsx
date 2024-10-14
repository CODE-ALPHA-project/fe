import React from "react";
import * as styles from "./RecommendExpert.css";
import { ExpertCard } from "./ExpertCard";
import { getRandomExperts } from "../../../../utils/getRandomExpert";

const RecommendExpert = () => {
  const randomExperts = getRandomExperts(3);

  return (
    <div className={styles.expertContainer}>
      <h2 className={styles.sectionTitle}>⭐추천노무사⭐</h2>
      <section className={styles.expertsSection}>
        {randomExperts.map((expert, index) => (
          <ExpertCard key={index} {...expert} />
        ))}
      </section>
    </div>
  );
};

export default RecommendExpert;

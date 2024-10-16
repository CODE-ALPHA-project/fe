import React from "react";
import * as styles from "./expertcard.css";
import { getWebPPath } from "../../../../utils/getWebp";

interface ExpertProps {
  name: string;
  image: string;
  tags: string[];
  company: string;
  description: string;
  time: string;
}

export const ExpertCard: React.FC<ExpertProps> = ({
  name,
  image,
  tags,
  company,
  description,
  time,
}) => {
  return (
    <div className={styles.expertCard}>
      <div className={styles.expertImageContainer}>
        <picture>
          <source srcSet={getWebPPath(image)} type="image/webp" />
          <source srcSet={image} type="image/png" />
          <img src={image} alt={name} className={styles.expertImage} />
        </picture>
      </div>
      <div className={styles.expertInfo}>
        <div className={styles.expertTags}>
          {tags.map((tag, i) => (
            <span key={i} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
        <h3 className={styles.expertName}>{name}</h3>
        <p className={styles.expertCompany}>{company}</p>
        <p className={styles.expertDescription}>{description}</p>
        <div className={styles.expertTime}>
          <span className={styles.timeIcon}>🕒</span> 상담가능시간: {time}
        </div>
      </div>
    </div>
  );
};

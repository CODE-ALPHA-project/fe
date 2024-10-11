import React from "react";
import * as styles from "./MenuCard.css";

interface InfoCardProps {
  iconSrc: string;
  iconAlt: string;
  title: React.ReactNode;
  description: React.ReactNode;
  onClick: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({
  iconSrc,
  iconAlt,
  title,
  description,
  onClick,
}) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={iconSrc} alt={iconAlt} className={styles.icon} />
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
};

export default InfoCard;

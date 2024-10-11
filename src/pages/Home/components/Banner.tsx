import React from "react";
import * as styles from "./banner.css";
import ImageSlider from "./ImageSlider";
import { slides } from "../../../mock/Slide";

export const Banner: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <div className={styles.iconWrapper}>
          <span className={styles.icon}>🚀</span>
        </div>
        <h2 className={styles.title}>도움되는 내용!</h2>
        <p className={styles.description}>외국인 정책이 궁금하시나요?</p>
        <p className={styles.description}>쉽게 찾아가세요!</p>
      </div>
      <div className={styles.bannerImage}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

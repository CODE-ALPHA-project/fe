import React from "react";
import { useMediaQuery } from "react-responsive";
import * as styles from "./qnasection.css";
import { qnaItems } from "../../../../mock/qna";
import { useNavigate } from "react-router-dom";

const QnASection: React.FC = () => {
  const navigate = useNavigate();
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const displayItems = isDesktop ? qnaItems.slice(0, 6) : qnaItems.slice(0, 3);

  return (
    <section className={styles.qnaSection}>
      <div className={styles.qnaSectionContent}>
        <h2 className={styles.sectionTitle}>질문답변으로 간단한 상담받기</h2>
        <p className={styles.sectionDescription}>
          간단한 노사문제는 직접 질문해보세요~
        </p>
        <div className={styles.buttonContainer}>
          <button className={styles.qnaButton}>질문답변 전체보기</button>
          <button className={styles.askButton}>질문 작성하기</button>
        </div>
        <div className={styles.qnaList}>
          {displayItems.map((item) => (
            <div
              key={item.id}
              className={styles.qnaItem}
              onClick={() => navigate("/")}
            >
              <span className={styles.category}>{item.category}</span>
              <h3 className={styles.title}>{item.title}</h3>
              <div className={styles.expertInfo}>
                <img
                  src={item.expertImage}
                  alt={item.expertName}
                  className={styles.expertImage}
                />
                <span className={styles.expertName}>{item.expertName}</span>
              </div>
              <p className={styles.preview}>{item.preview}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QnASection;

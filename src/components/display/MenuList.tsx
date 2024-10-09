import React from "react";
import * as styles from "./MenuList.css.ts";
import MenuCard from "./MenuCard.tsx";
import { useNavigate } from "react-router-dom";

const MenuList: React.FC = () => {
  const navigator = useNavigate();
  return (
    <section className={styles.taxInfoSection}>
      <h2 className={styles.title}>원하는 메뉴를 선택하세요</h2>
      <p className={styles.subtitle}>찾을 필요없이 바로 가기</p>
      <div className={styles.cardContainer}>
        <MenuCard
          iconSrc="/path/to/search-icon.png"
          iconAlt="찾기 아이콘"
          title={
            <>
              나에게 딱맞는
              <br />
              전문가 찾기
            </>
          }
          description={
            <>
              업무별, 업종별로 나에게
              <br />딱 맞는 전문가를 찾아보세요!
            </>
          }
          onClick={() => navigator("/")}
        />
        <MenuCard
          iconSrc="/path/to/question-icon.png"
          iconAlt="질문 아이콘"
          title={
            <>
              간단한 세무 상담
              <br />
              질의 작성하기
            </>
          }
          description={
            <>
              간단한 상담이 필요하신가요?
              <br />
              질문답변에서 물어보세요!
            </>
          }
          onClick={() => navigator("/")}
        />
        <MenuCard
          iconSrc="/path/to/post-icon.png"
          iconAlt="포스트 아이콘"
          title={
            <>
              국가에서 제공하는
              <br />
              외국인 공지사항
            </>
          }
          description={
            <>
              비자
              <br />
              갱신해라
            </>
          }
          onClick={() => navigator("/")}
        />
      </div>
    </section>
  );
};

export default MenuList;

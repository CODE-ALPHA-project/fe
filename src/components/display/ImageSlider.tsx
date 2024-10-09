import React, { useCallback, useState, useEffect } from "react";
import * as styles from "./imageslider.css";
import { useSlide } from "../../hooks/useSlide";
import { getWebPPath } from "../../utils/getWebp";

interface SlideProps {
  key: string;
  image: string;
}

interface ImageSliderProps {
  slides: SlideProps[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const totalSlides = slides.length;
  const extendedSlides = [
    { ...slides[totalSlides - 1], key: `prev-${slides[totalSlides - 1].key}` },
    ...slides,
    { ...slides[0], key: `next-${slides[0].key}` },
  ];

  const { currentSlide, isTransitioning, nextSlide, prevSlide } =
    useSlide(totalSlides);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const getSlideIndex = useCallback(() => {
    const index = currentSlide % (totalSlides + 2);
    if (index === 0) return totalSlides;
    if (index === totalSlides + 1) return 1;
    return index;
  }, [currentSlide, totalSlides]);

  useEffect(() => {
    if (isTransitioning) {
      setIsButtonDisabled(true);
      const timer = setTimeout(() => {
        setIsButtonDisabled(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  const handlePrevClick = useCallback(() => {
    if (!isButtonDisabled) {
      prevSlide();
    }
  }, [prevSlide, isButtonDisabled]);

  const handleNextClick = useCallback(() => {
    if (!isButtonDisabled) {
      nextSlide();
    }
  }, [nextSlide, isButtonDisabled]);

  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.slider}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
      >
        {extendedSlides.map((slideItem) => (
          <div key={slideItem.key} className={styles.slide}>
            <picture>
              <source srcSet={getWebPPath(slideItem.image)} type="image/webp" />
              <source srcSet={slideItem.image} type="image/png" />
              <img
                src={slideItem.image}
                alt={`Slide ${slideItem.key}`}
                className={styles.slideImage}
              />
            </picture>
          </div>
        ))}
      </div>
      <div className={styles.sliderControls}>
        <button
          className={styles.prevButton}
          onClick={handlePrevClick}
          disabled={isButtonDisabled}
        >
          &lt;
        </button>
        <span className={styles.slideCounter}>
          {`${getSlideIndex()} / ${totalSlides}`}
        </span>
        <button
          className={styles.nextButton}
          onClick={handleNextClick}
          disabled={isButtonDisabled}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;

import React, { useState, useEffect, useCallback } from "react";
import {
  sliderContainer,
  slider,
  slide,
  prevButton,
  nextButton,
} from "./slider.css";

interface SlideProps {
  image: string;
  // caption: string;
}

interface ImageSliderProps {
  slides: SlideProps[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const totalSlides = slides.length;

  // 실제 표시할 슬라이드 배열 (앞뒤로 복제본 추가)
  const extendedSlides = [slides[totalSlides - 1], ...slides, slides[0]];

  const moveToSlide = useCallback((index: number) => {
    setIsTransitioning(true);
    setCurrentSlide(index);
  }, []);

  const nextSlide = useCallback(() => {
    moveToSlide(currentSlide + 1);
  }, [currentSlide, moveToSlide]);

  const prevSlide = useCallback(() => {
    moveToSlide(currentSlide - 1);
  }, [currentSlide, moveToSlide]);

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        if (currentSlide === 0) {
          setCurrentSlide(totalSlides);
        } else if (currentSlide === totalSlides + 1) {
          setCurrentSlide(1);
        }
      }, 500); // 트랜지션 시간과 일치시킴
      return () => clearTimeout(timer);
    }
  }, [currentSlide, isTransitioning, totalSlides]);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <div className={sliderContainer}>
      <div
        className={slider}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
      >
        {extendedSlides.map((slideItem, index) => (
          <div
            key={index}
            className={slide}
            style={{ backgroundImage: `url(${slideItem.image})` }}
          >
            {/* <div className={slideCaption}>{slideItem.caption}</div> */}
          </div>
        ))}
      </div>
      <button className={prevButton} onClick={prevSlide}>
        &lt;
      </button>
      <button className={nextButton} onClick={nextSlide}>
        &gt;
      </button>
    </div>
  );
};

export default ImageSlider;

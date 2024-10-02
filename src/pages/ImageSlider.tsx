// component : MainPage에서 슬라이드를 관리하는 컴포넌트 //
import React from "react";
import {
  sliderContainer,
  slider,
  slide,
  prevButton,
  nextButton,
} from "./slider.css";
import { useSlide } from "../hooks/useSlide";

interface SlideProps {
  image: string;
  // caption: string;
}

interface ImageSliderProps {
  slides: SlideProps[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const totalSlides = slides.length;
  const extendedSlides = [slides[totalSlides - 1], ...slides, slides[0]];

  const { currentSlide, isTransitioning, nextSlide, prevSlide } =
    useSlide(totalSlides);

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

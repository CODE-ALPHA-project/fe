import { useState, useEffect } from "react";

export const useSlide = (totalSlides: number, intervalTime: number = 5000) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const moveToSlide = (index: number) => {
    setIsTransitioning(true);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    moveToSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    moveToSlide(currentSlide - 1);
  };

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        if (currentSlide === 0) {
          setCurrentSlide(totalSlides);
        } else if (currentSlide === totalSlides + 1) {
          setCurrentSlide(1);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, isTransitioning, totalSlides]);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, intervalTime);
    return () => clearInterval(intervalId);
  }, [intervalTime]);

  return {
    currentSlide,
    isTransitioning,
    nextSlide,
    prevSlide,
  };
};

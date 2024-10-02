// hook : Slide 관리 Custom hook //
import { useState, useEffect, useCallback } from "react";

export const useSlide = (totalSlides: number, intervalTime: number = 5000) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

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
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentSlide, isTransitioning, totalSlides]);

  useEffect(() => {
    const intervalId = setInterval(nextSlide, intervalTime);
    return () => clearInterval(intervalId);
  }, [nextSlide, intervalTime]);

  return {
    currentSlide,
    isTransitioning,
    nextSlide,
    prevSlide,
  };
};

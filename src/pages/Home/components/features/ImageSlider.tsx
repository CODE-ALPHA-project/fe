import React, { useCallback, useEffect, useState } from "react";
import { useSlide } from "../../../../hooks/useSlide";
import { getWebPPath } from "../../../../utils/getWebp";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <Card className="relative w-full overflow-hidden rounded-xl aspect-[4/3] sm:aspect-video">
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-full flex",
          "transition-transform duration-500 ease-in-out",
          !isTransitioning && "transition-none",
        )}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {extendedSlides.map((slideItem) => (
          <div key={slideItem.key} className="flex-shrink-0 w-full h-full">
            <picture className="w-full h-full">
              <source srcSet={getWebPPath(slideItem.image)} type="image/webp" />
              <source srcSet={slideItem.image} type="image/png" />
              <img
                src={slideItem.image}
                alt={`Slide ${slideItem.key}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </picture>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "h-9 w-9 rounded-full",
            "bg-black/20 hover:bg-black/40",
            "text-white border-none",
            "transition-all duration-200",
            "backdrop-blur-sm",
          )}
          onClick={handlePrevClick}
          disabled={isButtonDisabled}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "h-9 w-9 rounded-full",
            "bg-black/20 hover:bg-black/40",
            "text-white border-none",
            "transition-all duration-200",
            "backdrop-blur-sm",
          )}
          onClick={handleNextClick}
          disabled={isButtonDisabled}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <div className="absolute bottom-4 right-4">
        <div
          className={cn(
            "px-3 py-1 rounded-full",
            "bg-black/20 backdrop-blur-sm",
            "text-white text-sm font-medium",
          )}
        >
          {getSlideIndex()} / {totalSlides}
        </div>
      </div>
    </Card>
  );
};

export default ImageSlider;

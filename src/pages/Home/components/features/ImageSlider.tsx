import React, { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { getWebPPath } from '@/utils/getWebp';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import { ImageSliderProps } from '@/pages/Home/types/type';

const ImageSlider: React.FC<ImageSliderProps> = ({ slides }) => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="relative aspect-[4/3] w-full overflow-hidden rounded-xl sm:aspect-video"
    >
      <CarouselContent>
        {slides.map(slide => (
          <CarouselItem key={slide.key} className="h-full w-full">
            <div className="h-full w-full">
              <source srcSet={getWebPPath(slide.image)} type="image/webp" />
              <img
                src={slide.image}
                alt={`Slide ${slide.key}`}
                className="aspect-auto max-h-max"
                loading="lazy"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ImageSlider;

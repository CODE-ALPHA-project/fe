import React, { useRef } from 'react';
import { getWebPPath } from '../../../../utils/getWebp';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
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
          <CarouselItem key={slide.key}>
            <div className="h-full w-full">
              <picture className="h-full w-full">
                <source srcSet={getWebPPath(slide.image)} type="image/webp" />
                <source srcSet={slide.image} type="image/png" />
                <img
                  src={slide.image}
                  alt={`Slide ${slide.key}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </picture>
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

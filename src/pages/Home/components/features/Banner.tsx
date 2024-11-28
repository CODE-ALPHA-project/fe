import React from 'react';

import ImageSlider from './ImageSlider';
import { slides } from '@/mock/Slide';
import { getRequest } from '../../api/api';
import { cn } from '@lib/utils';

const Banner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100">
      <div className="bg-grid-white/[0.05] absolute inset-0 -z-0" />
      <div className="absolute inset-0 -z-0 bg-gradient-to-t from-blue-100/50 to-transparent" />

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
          <div className="relative z-10 flex-1 space-y-6 text-center md:text-left">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="font-eland text-2xl text-blue-900 md:text-xl">
                  외국인 정책이 궁금하시나요?
                </p>
                <p className="font-eland text-xl font-medium text-blue-800 md:text-xl">
                  쉽게 찾아가세요!
                </p>
              </div>
            </div>
            <button
              onClick={getRequest}
              className={cn(
                'mt-8 rounded-lg px-6 py-3',
                'bg-gradient-to-r from-blue-600 to-blue-700',
                'font-medium text-white',
                'hover:from-blue-700 hover:to-blue-800',
                'transition-all duration-200',
                'shadow-lg shadow-blue-400/25',
                'hidden md:inline-block',
              )}
            >
              자세히 알아보기
            </button>
          </div>
          <div className="relative z-10 w-full flex-1 md:max-w-[50%]">
            <div className="transform transition-transform duration-300">
              <div onClick={getRequest} className="cursor-pointer">
                <ImageSlider slides={slides} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-1/4 top-0 -z-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 -z-10 h-96 w-96 rounded-full bg-blue-300/30 blur-3xl" />
    </section>
  );
};

export default Banner;

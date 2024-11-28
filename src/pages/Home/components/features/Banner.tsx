import React from "react";
import ImageSlider from "./ImageSlider";
import { slides } from "../../../../mock/Slide";
import { getRequest } from "../../api/api";
import { cn } from "@lib/utils";

const Banner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-100 via-blue-50 to-blue-100">
      <div className="absolute inset-0 bg-grid-white/[0.05] -z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-100/50 to-transparent -z-0" />

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left space-y-6 relative z-10">
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-2xl font-eland md:text-xl text-blue-900">
                  외국인 정책이 궁금하시나요?
                </p>
                <p className="text-xl font-eland md:text-xl font-medium text-blue-800">
                  쉽게 찾아가세요!
                </p>
              </div>
            </div>
            <button
              onClick={getRequest}
              className={cn(
                "mt-8 px-6 py-3 rounded-lg",
                "bg-gradient-to-r from-blue-600 to-blue-700",
                "text-white font-medium",
                "hover:from-blue-700 hover:to-blue-800",
                "transition-all duration-200",
                "shadow-lg shadow-blue-400/25",
                "hidden md:inline-block",
              )}
            >
              자세히 알아보기
            </button>
          </div>
          <div className="flex-1 w-full md:max-w-[50%] relative z-10">
            <div className="transform transition-transform duration-300">
              <div onClick={getRequest} className="cursor-pointer">
                <ImageSlider slides={slides} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-300/30 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Banner;

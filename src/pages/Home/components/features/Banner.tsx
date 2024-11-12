import React from "react";
import { Rocket } from "lucide-react";
import ImageSlider from "./ImageSlider";
import { slides } from "../../../../mock/Slide";
import { getRequest } from "../../api/api";
import { cn } from "@lib/utils";

const Banner: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent -z-0" />

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left space-y-6 relative z-10">
            <div className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-sm mb-4">
              <Rocket className="w-8 h-8 text-blue-400" />
            </div>
            <div className="space-y-4">
              <h2
                className={cn(
                  "text-3xl md:text-4xl lg:text-5xl font-bold",
                  "bg-clip-text text-transparent bg-gradient-to-r",
                  "from-white via-blue-200 to-blue-400",
                )}
              >
                도움되는 내용!
              </h2>
              <div className="space-y-2">
                <p className="text-lg md:text-xl text-gray-300">
                  외국인 정책이 궁금하시나요?
                </p>
                <p className="text-lg md:text-xl font-medium text-white">
                  쉽게 찾아가세요!
                </p>
              </div>
            </div>
            <button
              onClick={getRequest}
              className={cn(
                "mt-8 px-6 py-3 rounded-lg",
                "bg-gradient-to-r from-blue-500 to-blue-600",
                "text-white font-medium",
                "hover:from-blue-600 hover:to-blue-700",
                "transition-all duration-200",
                "shadow-lg shadow-blue-500/25",
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
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-700/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Banner;

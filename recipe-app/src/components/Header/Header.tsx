import React from 'react';
import { AnimatedText } from '@/components/ui/animated-shiny-text';

const Header: React.FC = () => {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f7f7f9] to-[#ededf0]" aria-hidden />
      <div className="relative max-w-screen-xl mx-auto px-4 pt-14 pb-16 md:pt-18 md:pb-20">
        <div className="flex flex-col gap-6 md:gap-8 text-left">
          <AnimatedText
            text="Что сегодня приготовить?"
            textClassName="text-[3rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] font-semibold"
            gradientColors="linear-gradient(90deg, #111, #3a3a3a, #111)"
          />
          <p className="max-w-2xl text-lg md:text-xl text-[#4c4c4f] leading-relaxed">
            Подборка лаконичных рецептов на каждый день: меньше хаоса, больше вкуса.
            Просто выбери блюдо, пролистай фото и следуй шагам.
          </p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-black text-white px-4 py-2 text-sm font-medium shadow-sm">
              Новые блюда каждую неделю
            </span>
            <span className="text-sm text-[#6a6a6d]">Без лишних деталей — только полезное.</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

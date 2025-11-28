import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-[#e4e4e7] bg-white">
      <div className="max-w-screen-xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-[#5c5c5f]">
        <span>© {currentYear} Minimal Recipes. Ничего лишнего.</span>
        <span className="text-[#7a7a7d]">Создано для вдохновения — готовь просто.</span>
      </div>
    </footer>
  );
};

export default Footer;

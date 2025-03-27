"use client";

export const TextMarquee = () => (
  <div className="overflow-hidden relative w-full bg-gray-100 py-4">
    <div className="animate-marquee whitespace-nowrap flex">
      {[...Array(4)].map((_, i) => (
        <span key={i} className="text-xl mx-8 font-semibold">
          Novidades em tempo real • Promoções relâmpago • Atualizações
          constantes •
        </span>
      ))}
    </div>
  </div>
);

import React from "react";

interface TitleSectionProps {
  title: string;
  sub: string;
}

export const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  sub: subtitle,
}) => {
  return (
    <div className="text-center flex flex-col items-center gap-5 lg:flex-row lg:gap-10 lg:text-start pb-8">
      <h1 className="title marked-green">{title}</h1>
      <p className="text-gray-600 text-[11px] lg:text-[16px] lg:max-w-[400px]">
        {subtitle}
      </p>
    </div>
  );
};

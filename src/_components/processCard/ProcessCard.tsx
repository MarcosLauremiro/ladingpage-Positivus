"use client";

import React, { useState } from "react";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";

interface ProcessCardProps {
  step: string;
  title: string;
  content: string;
  isExpanded: boolean;
  onToggle: () => void;
}

export const ProcessCard: React.FC<ProcessCardProps> = ({
  step,
  title,
  content,
  isExpanded,
  onToggle,
}) => {
  return (
    <div className="flex flex-col bg-[#F3F3F3] border-1 rounded-4xl overflow-hidden border-b-6 border-x-slate-950">
      <div className="flex flex-row justify-between items-center p-4 lg:p-8 gap-5">
        <div className="flex flex-row gap-6 items-center">
          <h1 className="text-2xl lg:text-4xl font-semibold">{step}</h1>
          <p className="text-[16px] lg:text-2xl">{title}</p>
        </div>
        <button onClick={onToggle}>
          {isExpanded ? (
            <CiCircleMinus size={35} />
          ) : (
            <CiCirclePlus size={35} />
          )}
        </button>
      </div>

      {isExpanded && (
        <>
          <div className="border-t border-gray-300 mx-4"></div>
          <div className="p-4 pt-3 text-gray-600">
            <p>{content}</p>
          </div>
        </>
      )}
    </div>
  );
};

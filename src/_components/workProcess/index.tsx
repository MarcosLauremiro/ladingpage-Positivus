"use client";
import React, { useState } from "react";
import { ProcessCard } from "../processCard/ProcessCard";
import { TitleSection } from "../titleSection";

export const WorkProcess: React.FC = () => {
  const processes = [
    {
      id: 1,
      step: "01",
      title: "Consultation",
      content:
        "During the consultation phase, we'll discuss your business needs, goals, and challenges.",
    },
    {
      id: 2,
      step: "02",
      title: "Research and Strategy Development",
      content:
        "We analyze market trends and develop a customized strategy for your business.",
    },
    {
      id: 3,
      step: "03",
      title: "Implementation",
      content: "",
    },
    {
      id: 4,
      step: "04",
      title: "Monitoring and Optimization",
      content: "",
    },
    {
      id: 5,
      step: "05",
      title: "Reporting and Communication",
      content: "",
    },
    {
      id: 6,
      step: "06",
      title: "Continual Improvement",
      content: "",
    },
  ];

  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="container mx-auto p-4">
      <TitleSection
        title="Our Working Process"
        sub="Step-by-Step Guide to Achieving Your Business Goals"
      />

      <div className="space-y-4">
        {processes.map((process) => (
          <ProcessCard
            key={process.id}
            step={process.step}
            title={process.title}
            content={process.content}
            isExpanded={expandedId === process.id}
            onToggle={() =>
              setExpandedId(expandedId === process.id ? null : process.id)
            }
          />
        ))}
      </div>
    </section>
  );
};

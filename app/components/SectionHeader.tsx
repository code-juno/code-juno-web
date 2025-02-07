import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-8">
      <h2 className="text-4xl font-bold mb-4 text-white">{title}</h2>
      <p className="text-lg text-gray-400 max-w-[700px] mx-auto leading-relaxed">
        {subtitle}
      </p>
    </div>
  );
}

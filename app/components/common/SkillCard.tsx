"use client";

import { IconType } from "react-icons";
import * as Fa from "react-icons/fa";
import * as Si from "react-icons/si";
import type { Skill } from "@/app/types";

type SkillCardProps = {
  skill: Skill;
  className?: string;
};

export default function SkillCard({ skill, className = "" }: SkillCardProps) {
  // Get the icon component from the appropriate icon set
  const IconComponent = skill.icon.startsWith("Fa")
    ? (Fa as Record<string, IconType>)[skill.icon]
    : (Si as Record<string, IconType>)[skill.icon];

  return (
    <div
      className={`flex flex-col items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-lg w-[120px] ${className}`}
    >
      <IconComponent className={`text-4xl ${skill.color} mb-2`} />
      <span className="text-sm font-medium">{skill.name}</span>
    </div>
  );
}

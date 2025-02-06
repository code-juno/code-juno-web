"use client";

import SkillCard from "./SkillCard";
import type { Skill } from "@/app/types";
import styles from "./InfiniteMarquee.module.css";

type InfiniteMarqueeProps = {
  items: Skill[];
  direction?: "left" | "right";
  className?: string;
};

export default function InfiniteMarquee({
  items,
  direction = "left",
  className = "",
}: InfiniteMarqueeProps) {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10" />
      <div className={styles.marquee}>
        <div
          className={`${styles.marqueeContent} ${
            direction === "left" ? styles.scrollLeft : styles.scrollRight
          }`}
        >
          {/* First set */}
          {items.map((item, index) => (
            <SkillCard key={`${item.name}-${index}`} skill={item} />
          ))}
          {/* Duplicate set for seamless loop */}
          {items.map((item, index) => (
            <SkillCard key={`${item.name}-duplicate-${index}`} skill={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

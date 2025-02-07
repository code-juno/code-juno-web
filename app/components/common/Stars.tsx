"use client";

import { useEffect, useState } from "react";
import { motion, MotionValue } from "framer-motion";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkle: boolean;
  delay: number;
}

interface StarsProps {
  count?: number;
  depth?: number;
  className?: string;
  y?: MotionValue<number>;
  fadeDirection?: "none" | "top" | "bottom";
}

function useStarCount(defaultCount: number) {
  const [count, setCount] = useState(defaultCount);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth < 640) {
        // sm breakpoint
        setCount(Math.floor(defaultCount * 0.4)); // 40% of default count
      } else if (window.innerWidth < 768) {
        // md breakpoint
        setCount(Math.floor(defaultCount * 0.6)); // 60% of default count
      } else {
        setCount(defaultCount);
      }
    };

    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, [defaultCount]);

  return count;
}

export default function Stars({
  count: defaultCount = 50,
  depth = 1,
  className = "",
  y,
  fadeDirection = "none",
}: StarsProps) {
  const count = useStarCount(defaultCount);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: count }, (_, i) => {
        const yPos = Math.random() * 100;
        const baseOpacity = Math.random() * 0.5 + 0.2;
        let fadeMultiplier = 1;

        if (fadeDirection === "top") {
          fadeMultiplier = yPos / 100;
        } else if (fadeDirection === "bottom") {
          fadeMultiplier = 1 - yPos / 100;
        }

        return {
          id: i,
          x: Math.random() * 100,
          y: yPos,
          size: (Math.random() * 2 + 1) * depth,
          opacity: baseOpacity * (1 / depth) * fadeMultiplier,
          twinkle: Math.random() > 0.75,
          delay: Math.random() * 3,
        };
      });
    };

    setStars(generateStars());
  }, [count, depth, fadeDirection]);

  return (
    <motion.div style={{ y }} className={`absolute inset-0 ${className}`}>
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full bg-white transition-opacity duration-[3000ms] ease-in-out opacity-20 ${
            star.twinkle ? "animate-twinkle" : ""
          }`}
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </motion.div>
  );
}

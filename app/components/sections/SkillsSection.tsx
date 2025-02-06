"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import InfiniteMarquee from "../common/InfiniteMarquee";
import { SKILLS, SECTION_IDS } from "@/constants";
import SectionHeader from "../SectionHeader";

export default function SkillsSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <section id={SECTION_IDS.SKILLS} className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto opacity-0">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Skills & Technologies
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section
      id={SECTION_IDS.SKILLS}
      className="py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            title="Skills & Technologies"
            subtitle="A collection of tools I've used to build products."
          />
          <div className="space-y-8">
            <InfiniteMarquee items={SKILLS.FIRST_ROW} direction="left" />
            <InfiniteMarquee items={SKILLS.SECOND_ROW} direction="right" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

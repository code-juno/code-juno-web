"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { BsMouse } from "react-icons/bs";
import styles from "./Marquee.module.css";
import SocialLinks from "../common/SocialLinks";
import { PERSONAL_INFO, SECTION_IDS } from "@/app/constants";

export default function HeroSection() {
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScroll(false);
      } else {
        setShowScroll(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.heroSection}>
      <div className={styles.sectionBackground} />
      <div className={styles.sectionOverlay} />

      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`text-center ${styles.textContainer}`}
          >
            <div className={styles.textBackground} />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Hi, I&apos;m{" "}
              <span className={styles.gradientText}>{PERSONAL_INFO.NAME}</span>{" "}
              <span className={styles.wavingHand}>👋</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-4">
              <span className={styles.gradientText}>{PERSONAL_INFO.ROLE}</span>
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Also known as {PERSONAL_INFO.ALIAS} |{" "}
              <span className={styles.gradientText}>
                {PERSONAL_INFO.HANDLE}
              </span>
            </p>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-8">
              {PERSONAL_INFO.BIO}
            </p>

            {/* Call to Action Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <a
                href={`#${SECTION_IDS.CONTACT}`}
                className={`${styles.ctaButton} text-white group`}
              >
                Let&apos;s Work Together
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            {/* Social Links */}
            <SocialLinks />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScroll && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href={`#${SECTION_IDS.SKILLS}`}
            className={`${styles.scrollIndicator} text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex flex-col items-center gap-2`}
          >
            <BsMouse size={28} />
            <div className={styles.scrollDot} />
          </a>
        </motion.div>
      )}
    </section>
  );
}

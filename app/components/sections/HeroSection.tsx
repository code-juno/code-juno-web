"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { BsMouse } from "react-icons/bs";
import Image from "next/image";
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

      <div className="px-4 sm:px-6 lg:px-8 z-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex flex-col-reverse md:flex-row items-center justify-between gap-12 ${styles.textContainer}`}
          >
            <div className="flex-1 text-center md:text-left">
              <div className={styles.textBackground} />
              <h1
                className={`${styles.heroText} text-4xl sm:text-5xl md:text-6xl font-bold mb-2`}
              >
                Hi, I&apos;m{" "}
                <span className={styles.gradientText}>
                  {PERSONAL_INFO.NAME}
                </span>{" "}
                <span className={styles.wavingHand}>👋</span>
              </h1>
              <p
                className={`${styles.heroText} text-lg text-gray-600 dark:text-gray-400 mb-8`}
              >
                a.k.a. {PERSONAL_INFO.ALIAS} |{" "}
                <span className={styles.gradientText}>
                  {PERSONAL_INFO.HANDLE}
                </span>
              </p>
              <p
                className={`${styles.heroText} text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-8`}
              >
                <span className={styles.gradientText}>
                  {PERSONAL_INFO.ROLE}
                </span>
              </p>
              <p
                className={`${styles.heroText} max-w-lg mx-auto md:mx-0 text-gray-600 dark:text-gray-400 mb-8`}
              >
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
              <SocialLinks className={styles.socialLinks} />
            </div>

            {/* Portrait Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-64 h-64 md:w-80 md:h-80"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl rotate-6 transform-gpu opacity-85" />
              <div className="absolute inset-0 bg-white dark:bg-gray-900 rounded-3xl -rotate-6 transform-gpu" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white dark:border-gray-800 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-secondary/15 z-10 mix-blend-soft-light" />
                <Image
                  src="/me.jpeg"
                  alt={PERSONAL_INFO.NAME}
                  fill
                  priority
                  className="object-cover grayscale-[40%] hover:grayscale-0 transition-all duration-300 filter brightness-105 contrast-105 saturate-95"
                  sizes="(max-width: 768px) 256px, 320px"
                />
              </div>
            </motion.div>
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
            href={`#${SECTION_IDS.PROJECTS}`}
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

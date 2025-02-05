"use client";

import { motion } from "framer-motion";
import styles from "./Marquee.module.css";
import ContactForm from "../common/ContactForm";
import SocialLinks from "../common/SocialLinks";
import { SECTION_IDS } from "@/app/constants";

export default function ContactSection() {
  return (
    <section id={SECTION_IDS.CONTACT} className={styles.contactSection}>
      <div className={styles.contactBackground} />
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500">
              Get in Touch
            </h2>

            <div className={styles.formContainer}>
              <ContactForm />

              {/* Social Links */}
              <div className={styles.socialContainer}>
                <SocialLinks
                  iconSize={24}
                  linkClassName={styles.contactSocialLink}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

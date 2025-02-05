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
            <h2 className="text-3xl font-bold mb-4 text-center">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg mb-12 text-center">
              Have a project in mind? I&apos;d love to hear from you.
            </p>

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

"use client";

import { motion } from "framer-motion";
import styles from "./ContactSection.module.css";
import ContactForm from "../common/ContactForm";
import { SECTION_IDS } from "@/constants";
import SectionHeader from "../SectionHeader";

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactBackground} />
      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto py-24" id={SECTION_IDS.CONTACT}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <SectionHeader
              title="Get in Touch"
              subtitle="Have a project in mind? I want to hear about it."
            />

            <div className={styles.formContainer}>
              <ContactForm />
              <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                Your information is private and will never be shared with third
                parties.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

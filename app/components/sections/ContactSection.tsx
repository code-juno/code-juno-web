"use client";

import { motion } from "framer-motion";
import styles from "./ContactSection.module.css";
import ContactForm from "../common/ContactForm";
import { SECTION_IDS } from "@/app/constants";
import SectionHeader from "../SectionHeader";

export default function ContactSection() {
  return (
    <section id={SECTION_IDS.CONTACT} className={styles.contactSection}>
      <div className={styles.contactBackground} />
      <div className="py-48 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <SectionHeader
              title="Get in Touch"
              subtitle="Have a project in mind? I'd love to hear from you."
            />

            <div className={styles.formContainer}>
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

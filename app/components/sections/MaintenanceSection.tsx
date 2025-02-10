"use client";

import { motion } from "framer-motion";
// import { FiMail } from "react-icons/fi";
// import Link from "next/link";
import Stars from "../common/Stars";

export default function MaintenanceSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Stars />
      <div className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
            IYKYK
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Not operating.
          </p>
          {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="mailto:bri_alldred@live.co.uk"
              className="inline-flex items-center gap-2 px-6 py-3 text-lg font-medium text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all duration-200"
            >
              <FiMail className="text-xl" />
              Message Me Directly
            </Link>
          </motion.div> */}
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 via-black/10" />
    </section>
  );
}

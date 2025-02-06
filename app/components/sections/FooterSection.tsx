"use client";

import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import SocialLinks from "../common/SocialLinks";
import { PERSONAL_INFO } from "@/app/constants";
import styles from "./FooterSection.module.css";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Social Links */}
          <SocialLinks iconSize={20} />

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <Link href="#about" className={styles.footerLink}>
              About
            </Link>
            <Link href="#projects" className={styles.footerLink}>
              Projects
            </Link>
            <Link href="#skills" className={styles.footerLink}>
              Skills
            </Link>
            <Link href="#contact" className={styles.footerLink}>
              Contact
            </Link>
          </nav>

          {/* Copyright */}
          <div className="text-sm text-gray-500 dark:text-gray-400 text-center">
            <p>
              © {currentYear} {PERSONAL_INFO.NAME}. All rights reserved.
            </p>
            <p className="mt-2 text-xs">
              Built with Next.js & Tailwind CSS •{" "}
              <a
                href="https://github.com/code-juno/code-juno-web"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
              >
                <FiGithub className="inline mr-1" />
                Source Code
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

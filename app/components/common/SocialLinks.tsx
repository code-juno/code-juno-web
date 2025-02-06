"use client";

import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import { SOCIAL_LINKS } from "@/app/constants";
import type { SocialLink } from "@/app/types";
import styles from "./SocialLinks.module.css";
interface SocialLinksProps {
  className?: string;
  linkClassName?: string;
  iconSize?: number;
}

const socialLinks: SocialLink[] = [
  {
    href: SOCIAL_LINKS.GITHUB,
    icon: FiGithub,
    label: "GitHub",
  },
  {
    href: SOCIAL_LINKS.LINKEDIN,
    icon: FiLinkedin,
    label: "LinkedIn",
  },
  {
    href: SOCIAL_LINKS.INSTAGRAM,
    icon: FiInstagram,
    label: "Instagram",
  },
  {
    href: `mailto:${SOCIAL_LINKS.EMAIL}`,
    icon: FiMail,
    label: "Email",
  },
];

export default function SocialLinks({
  className = "flex justify-center gap-4",
  linkClassName = "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors",
  iconSize = 20,
}: SocialLinksProps) {
  return (
    <div className={className}>
      {socialLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target={link.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={
            link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"
          }
          className={`${linkClassName} ${styles.socialLink}`}
          aria-label={link.label}
        >
          <link.icon size={iconSize} />
        </a>
      ))}
    </div>
  );
}

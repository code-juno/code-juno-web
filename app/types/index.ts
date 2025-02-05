import { IconType } from "react-icons";

export type FormStatus = "idle" | "submitting" | "success" | "error";

export type Skill = {
  name: string;
  icon: string;
  color: string;
};

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export type SocialLink = {
  href: string;
  icon: IconType;
  label: string;
};

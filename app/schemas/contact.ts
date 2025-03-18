import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
  // Optional support-specific fields
  subject: z.string().optional(),
  appName: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

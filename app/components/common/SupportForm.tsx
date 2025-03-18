"use client";

import { useState, useRef } from "react";
import { contactFormSchema } from "@/schemas/contact";

interface SupportFormProps {
  appName: string;
}

export default function SupportForm({ appName }: SupportFormProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: `[Support Request from ${appName}]\n\nSubject: ${formData.get(
        "subject"
      )}\n\n${formData.get("message")}`,
      appName,
    };

    try {
      const validatedData = contactFormSchema.parse(data);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(
          responseData.message || "Failed to submit support request"
        );
      }

      setSubmitStatus({
        type: "success",
        message: "Your support request has been submitted successfully!",
      });
      formRef.current?.reset();
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to submit support request. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </div>

      <div>
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Subject
        </label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          Message
        </label>
        <textarea
          name="message"
          id="message"
          required
          rows={4}
          className="mt-1 block w-full rounded-md border border-gray-300 dark:border-gray-600 px-3 py-2 text-gray-900 dark:text-gray-100 bg-white dark:bg-gray-800 focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
        />
      </div>

      {submitStatus.message && (
        <div
          className={`p-4 rounded-md ${
            submitStatus.type === "success"
              ? "bg-green-50 dark:bg-green-900/30 text-green-800 dark:text-green-200"
              : "bg-red-50 dark:bg-red-900/30 text-red-800 dark:text-red-200"
          }`}
        >
          {submitStatus.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit Support Request"}
      </button>
    </form>
  );
}

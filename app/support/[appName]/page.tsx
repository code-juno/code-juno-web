import { notFound } from "next/navigation";
import SupportForm from "@/components/common/SupportForm";
import { getFormattedAppName } from "@/constants/apps";

interface PageProps {
  params: {
    appName: string;
  };
}

export default async function SupportPage({ params }: PageProps) {
  const urlAppName = decodeURIComponent(params.appName).toLowerCase();
  const formattedAppName = getFormattedAppName(urlAppName);

  if (!formattedAppName) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          {formattedAppName} Support
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Please fill out the form below and we&apos;ll get back to you as soon
          as possible.
        </p>

        <div className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
          <SupportForm appName={formattedAppName} />
        </div>
      </div>
    </div>
  );
}

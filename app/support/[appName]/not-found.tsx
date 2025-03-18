import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          App Not Found
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Sorry, we couldn&apos;t find a support page for this app. Please check
          the URL and try again.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

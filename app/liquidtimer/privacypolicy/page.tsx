"use client";
import React from "react";

export default function PrivacyPolicy() {
  const lastUpdated = new Date().toLocaleDateString();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-2 text-gray-900 dark:text-gray-100">
          Privacy Policy for Liquid Timer
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-12">
          Last updated: {lastUpdated}
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Introduction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              This Privacy Policy describes how Liquid Timer (&quot;we&quot;,
              &quot;our&quot;, or &quot;us&quot;) collects, uses, and shares
              information when you use our mobile application (the
              &quot;App&quot;). We are committed to protecting your privacy and
              ensuring you understand how your information is handled.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Information We Collect
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  Information You Provide
                </h3>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>Custom timer names (optional)</li>
                  <li>
                    App preferences and settings (theme, language, sound
                    preferences, timer formats)
                  </li>
                  <li>
                    Custom background images (when manually selected by you)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-200">
                  Automatically Collected Information
                </h3>
                <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                  <li>
                    Device information (operating system version, device type)
                  </li>
                  <li>App usage data (crash reports, performance data)</li>
                  <li>
                    Local notifications data (for timer completion alerts)
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Provide and maintain the App&apos;s functionality</li>
              <li>Save your preferences and settings</li>
              <li>Send timer completion notifications</li>
              <li>Improve the App&apos;s performance and user experience</li>
              <li>Diagnose technical issues and app crashes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Data Storage
            </h2>
            <div className="text-gray-700 dark:text-gray-300">
              <p className="mb-3">
                <strong>Local Storage</strong>
              </p>
              <p className="mb-3">All user data, including:</p>
              <ul className="list-disc pl-6 space-y-2 mb-3">
                <li>Custom timer settings</li>
                <li>App preferences</li>
                <li>Background images</li>
                <li>Sound settings</li>
              </ul>
              <p>
                are stored locally on your device. We do not upload or store
                this information on external servers.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Permissions
            </h2>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              The App requests the following permissions:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>
                Notification permissions (to send timer completion alerts)
              </li>
              <li>
                Media library access (optional, for custom background images)
              </li>
              <li>Haptic feedback (for tactile responses)</li>
              <li>Audio playback (for timer and background sounds)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Third-Party Services
            </h2>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              Our App uses the following third-party services:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>Expo (for app development and updates)</li>
              <li>
                App Store (iOS) and Google Play Store (Android) for app
                distribution
              </li>
            </ul>
            <p className="mt-3 text-gray-700 dark:text-gray-300">
              Please refer to their respective privacy policies for more
              information about how they handle your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Data Sharing
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We do not sell, trade, or share your personal information with
              third parties. We do not collect or store any personal
              identifiable information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Children&apos;s Privacy
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              Our App does not knowingly collect personal information from
              children under 13. If you are a parent or guardian and believe
              your child has provided us with personal information, please
              contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new Privacy Policy on
              this page and updating the &quot;Last updated&quot; date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Your Rights
            </h2>
            <p className="mb-3 text-gray-700 dark:text-gray-300">
              Depending on your location, you may have certain rights regarding
              your personal information, including:
            </p>
            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
              <li>The right to access your data</li>
              <li>The right to delete your data</li>
              <li>The right to opt-out of data collection</li>
            </ul>
          </section>
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            If you have any questions about this Privacy Policy, please contact
            us at:{" "}
            <a
              href="mailto:junalldred@gmail.com"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              junalldred@gmail.com
            </a>
          </p>
          <button
            onClick={() => window.print()}
            className="mt-6 px-6 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors text-gray-900 dark:text-gray-100 print:hidden"
          >
            Print Policy
          </button>
        </footer>
      </div>
    </div>
  );
}

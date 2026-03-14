import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, Settings, ExternalLink } from "lucide-react";
import { createPageMetadata } from "@/lib/seo";
import { BlurReveal } from "@/components/blur-reveal";
import { RichButton } from "@/components/rich-button";

export const metadata: Metadata = createPageMetadata({
  title: "Setup Guide",
  description:
    "Install Deni AI Harbor and configure required environment variables and webhook URL for GitHub App review automation.",
  path: "/settings",
});

export default function SettingsPage() {
  return (
    <main className="mx-auto min-h-screen w-full bg-white text-stone-900 dark:bg-stone-950 dark:text-stone-50">
      <div className="mx-auto max-w-4xl px-6 py-20 sm:px-8 lg:px-10">
        <Link
          href="/"
          className="group mb-12 inline-flex items-center text-sm font-medium text-stone-500 transition-colors hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100"
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to overview
        </Link>

        <div className="mb-12">
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 dark:bg-stone-800">
            <Settings className="h-6 w-6 text-stone-900 dark:text-white" />
          </div>
          <BlurReveal
            as="h1"
            className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-white"
            speedReveal={2}
          >
            Setup Guide
          </BlurReveal>
          <BlurReveal
            as="p"
            className="mt-4 text-lg text-stone-600 dark:text-stone-400"
            delay={0.1}
            speedReveal={2}
          >
            Configure Harbor for your organization to start automating pull request reviews.
          </BlurReveal>
        </div>

        <section className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm dark:border-stone-800 dark:bg-stone-900/50">
          <div className="border-b border-stone-100 bg-stone-50/50 px-6 py-5 dark:border-stone-800 dark:bg-stone-900/20">
            <h2 className="text-lg font-semibold text-stone-900 dark:text-white">
              Installation Steps
            </h2>
            <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
              Follow these steps to enable AI-powered reviews on your repositories.
            </p>
          </div>

          <div className="p-6 sm:p-8">
            <div className="space-y-8">
              {[
                {
                  title: "Open the GitHub App Installation Page",
                  description:
                    "Navigate to the official Deni AI Harbor application page on GitHub to begin the installation process.",
                },
                {
                  title: "Choose Installation Scope",
                  description:
                    "Select whether to install Harbor for your entire organization or restrict it to specific repositories.",
                },
                {
                  title: "Complete Configuration",
                  description:
                    "Finish the GitHub installation flow. Next, configure your environment variables and webhook URL as detailed in the documentation.",
                },
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-stone-200 bg-stone-50 text-sm font-semibold text-stone-600 dark:border-stone-700 dark:bg-stone-800 dark:text-stone-300">
                      {index + 1}
                    </div>
                    {index !== 2 && (
                      <div className="mt-4 h-full w-px bg-stone-200 dark:bg-stone-800" />
                    )}
                  </div>
                  <div className="pb-2 pt-1">
                    <h3 className="text-base font-semibold text-stone-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-xl bg-stone-50 p-6 dark:bg-stone-900">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h4 className="font-semibold text-stone-900 dark:text-white">Ready to begin?</h4>
                  <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                    Head over to GitHub to install the application.
                  </p>
                </div>
                <RichButton asChild className="shrink-0 rounded-full px-6" color="amber">
                  <a href="https://github.com/apps/deni-ai-harbor" rel="noreferrer" target="_blank">
                    Install on GitHub
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </RichButton>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

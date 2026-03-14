import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, ShieldCheck, Zap, Globe, CheckCircle2 } from "lucide-react";
import { createPageMetadata, siteConfig } from "@/lib/seo";
import { BlurReveal } from "@/components/blur-reveal";
import { Marquee } from "@/components/marquee";
import { RichButton } from "@/components/rich-button";

export const metadata: Metadata = createPageMetadata({
  title: "AI Review Infrastructure For High-Trust Teams",
  description:
    "Deni AI Harbor gives engineering teams a more deterministic way to automate pull request review with governed AI feedback and lower review churn.",
  path: "/",
});

const features = [
  {
    icon: ShieldCheck,
    title: "Governed AI Feedback",
    description:
      "Safe, suggestion-oriented reviews that improve quality without creating merge risks.",
  },
  {
    icon: Zap,
    title: "Lightning Fast Signal",
    description:
      "Get actionable feedback in under 5 minutes, eliminating the wait for human reviewers.",
  },
  {
    icon: Globe,
    title: "Enterprise Ready",
    description:
      "Built for teams that need OSS flexibility, predictable behaviors, and self-hosted options.",
  },
];

const marqueeItems = [
  "Suggestion-only flow",
  "Deterministic approvals",
  "OSS compatible",
  "Operationally conservative",
  "Zero guesswork",
  "24/7 Coverage",
];

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "DeveloperApplication",
    operatingSystem: "Web",
    description: siteConfig.description,
    url: siteConfig.url,
    featureList: marqueeItems,
    sameAs: ["https://github.com/apps/deni-ai-harbor"],
  };

  return (
    <main className="relative min-h-screen bg-white text-stone-900 dark:bg-stone-950 dark:text-stone-50">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-24 text-center sm:px-8 lg:px-10 lg:pt-40 lg:pb-32">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-stone-100 via-white to-white dark:from-stone-900 dark:via-stone-950 dark:to-stone-950" />

        <div className="mx-auto max-w-4xl space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-4 py-1.5 text-sm font-medium text-stone-600 dark:border-stone-800 dark:bg-stone-900 dark:text-stone-300">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
            Deni AI Harbor is now available
          </div>

          <div className="space-y-6">
            <BlurReveal
              as="h1"
              className="text-5xl font-bold tracking-tight text-stone-900 sm:text-6xl md:text-7xl dark:text-white"
              speedReveal={2}
            >
              Review infrastructure for disciplined teams
            </BlurReveal>

            <BlurReveal
              as="p"
              className="mx-auto max-w-2xl text-lg text-stone-600 sm:text-xl dark:text-stone-400"
              delay={0.2}
              speedReveal={2}
            >
              Automate pull-request feedback without turning approvals into a black box. Built for
              organizations that want velocity alongside strict governance.
            </BlurReveal>
          </div>

          <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
            <RichButton asChild className="h-12 rounded-full px-8 text-base" color="amber">
              <a href="https://github.com/apps/deni-ai-harbor" rel="noreferrer" target="_blank">
                Install GitHub App
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </RichButton>
            <Link
              className="inline-flex h-12 items-center justify-center rounded-full border border-stone-200 bg-white px-8 text-base font-medium text-stone-900 transition-colors hover:bg-stone-50 dark:border-stone-800 dark:bg-stone-950 dark:text-stone-100 dark:hover:bg-stone-900"
              href="/settings"
            >
              View Documentation
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="border-y border-stone-100 bg-stone-50/50 py-10 dark:border-stone-900 dark:bg-stone-900/20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          <p className="mb-6 text-center text-sm font-medium text-stone-500 dark:text-stone-400">
            Trusted by engineering teams for reliable automation
          </p>
          <Marquee duration={30} pauseOnHover={true} fadeAmount={10}>
            {marqueeItems.map((item) => (
              <div
                className="mx-4 flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-5 py-2.5 text-sm font-medium text-stone-700 shadow-sm dark:border-stone-800 dark:bg-stone-950 dark:text-stone-300"
                key={item}
              >
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                {item}
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl dark:text-white">
            Deterministic by design
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-stone-600 dark:text-stone-400">
            The point is not “more AI.” The point is dependable review infrastructure that respects
            how engineering organizations actually govern change.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="relative rounded-2xl border border-stone-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md dark:border-stone-800 dark:bg-stone-900/50"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-stone-100 dark:bg-stone-800">
                  <Icon className="h-6 w-6 text-stone-900 dark:text-white" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-stone-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

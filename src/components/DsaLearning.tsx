import { Code, Brain, MessageSquare, Target } from "lucide-react";
import { FeatureSection } from "./FeatureSection";

export function DsaLearning() {
  const features = [
    {
      name: "Company-specific question filters",
      description: "Practice questions commonly asked at top tech companies.",
      icon: Target,
    },
    {
      name: "Real-time code evaluation",
      description: "Get instant feedback on your code solutions.",
      icon: Code,
    },
    {
      name: "AI hints for stuck problems",
      description: "Receive intelligent hints when you need help.",
      icon: Brain,
    },
    {
      name: "Mock interview simulator",
      description: "Practice with our AI-powered interview simulator.",
      icon: MessageSquare,
    },
  ];

  return (
    <FeatureSection
      mode="light"
      title="Master Data Structures & Algorithms with Ease"
      subtitle="Practice 500+ coding questions, track your progress, and get AI-powered hints to crack technical interviews."
      features={features}
      ctaText="Start Practicing Now"
      ctaLink="/dsa-platform"
      reversed={true}
      className="bg-white dark:bg-gray-900"
      imageContent={
        <div className="relative h-[400px] w-full rounded-xl bg-gray-900/5 p-6 dark:bg-gray-100/5">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full max-w-md space-y-4">
              <div className="h-40 rounded-lg bg-gray-200 dark:bg-gray-700">
                <div className="p-4">
                  <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-600 rounded" />
                  <div className="mt-2 h-24 bg-gray-300 dark:bg-gray-600 rounded" />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-24 w-1/2 rounded-lg bg-primary/10">
                  <div className="p-4">
                    <div className="h-4 w-1/2 bg-primary/20 rounded" />
                    <div className="mt-2 h-8 bg-primary/20 rounded" />
                  </div>
                </div>
                <div className="h-24 w-1/2 rounded-lg bg-primary/10">
                  <div className="p-4">
                    <div className="h-4 w-1/2 bg-primary/20 rounded" />
                    <div className="mt-2 h-8 bg-primary/20 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
} 
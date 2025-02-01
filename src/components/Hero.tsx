import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative isolate pt-14 dark:bg-gray-900">
      <div className="py-24 sm:py-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400 bg-clip-text text-transparent sm:text-6xl">
              Land Your Dream Job Faster with AI-Powered Resume Optimization & DSA Mastery
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400 dark:text-gray-300">
              HopJob combines cutting-edge AI resume analysis with a comprehensive DSA learning platform to help you ace technical interviews and stand out to recruiters.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg">
                <Link href="/signup">Get Started for Free</Link>
              </Button>
              <Button className="text-gray-500" variant="outline" size="lg" asChild>
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
            <div className="mt-10 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Trusted by 10,000+ developers worldwide
              </p>
              <div className="mt-4 flex justify-center gap-x-6 grayscale opacity-70">
                {/* Add company logos here */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
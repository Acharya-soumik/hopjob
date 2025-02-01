import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to Land Your Dream Job?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-400 dark:text-gray-300">
            Join HopJob today and take the first step towards acing your interviews and optimizing your career path.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/signup">Start Your Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link className="text-gray-500" href="#features">Explore Features</Link>
            </Button>
          </div>
          <p className="mt-8 text-sm text-gray-400 dark:text-gray-400">
            <span className="font-semibold text-primary">10+ developers</span> joined in the last hour
          </p>
        </div>
      </div>
      
      {/* Background gradient effect */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.900),theme(colors.gray.900))] opacity-20" />
    </section>
  );
} 
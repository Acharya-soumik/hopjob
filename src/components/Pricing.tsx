import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Free",
    price: {
      monthly: 0,
      annual: 0,
    },
    description: "Perfect for getting started with basic features",
    features: [
      "Basic resume analysis",
      "Access to 50 DSA questions",
      "Limited community features",
      "Basic progress tracking",
    ],
    cta: "Get Started",
  },
  {
    name: "Pro",
    price: {
      monthly: 29,
      annual: 290,
    },
    description: "Everything you need for serious interview prep",
    features: [
      "Advanced resume optimization",
      "Full access to 500+ DSA questions",
      "AI hints and mock interviews",
      "Priority community support",
      "Detailed performance analytics",
    ],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Premium",
    price: {
      monthly: 49,
      annual: 490,
    },
    description: "For those who want the ultimate preparation",
    features: [
      "Everything in Pro",
      "1:1 mentorship sessions",
      "Customized interview roadmaps",
      "Priority support",
      "Company-specific prep guides",
    ],
    cta: "Get Premium",
  },
] as const;

export function Pricing() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
            Flexible Plans for Every Developer
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Choose the perfect plan to accelerate your career growth
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          {/* PricingToggle will be added by the parent */}
        </div>

        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier:any) => (
            <Card
              key={tier.name}
              className={cn(
                "flex flex-col p-8 relative",
                tier.popular && "border-primary ring-2 ring-primary"
              )}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="rounded-full bg-primary px-4 py-1 text-xs font-medium text-white">
                    Most Popular
                  </div>
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold">{tier.name}</h3>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                  {tier.description}
                </p>
                <div className="mt-6">
                  <span className="text-4xl font-bold">
                    ${tier.price.monthly}
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    /month
                  </span>
                </div>
              </div>

              <ul className="mb-8 space-y-4 flex-1">
                {tier.features.map((feature:any) => (
                  <li key={feature} className="flex items-center gap-x-3">
                    <Check className="h-5 w-5 text-primary" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.popular ? "default" : "outline"}
                className="w-full"
              >
                {tier.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 
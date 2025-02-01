import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface Feature {
  name: string;
  description: string;
  icon: LucideIcon;
}

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
  ctaText: string;
  ctaLink: string;
  imageContent?: React.ReactNode;
  reversed?: boolean;
  className?: string;
  mode: "light" | "dark";
}

export function FeatureSection({
  title,
  subtitle,
  features,
  ctaText,
  ctaLink,
  imageContent,
  reversed = false,
  className,
  mode = "light",
}: FeatureSectionProps) {
  return (
    <div className={cn("py-24 sm:py-32", className)}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className={cn("grid grid-cols-1 gap-16 lg:grid-cols-2", reversed && "lg:flex-row-reverse")}>
          <div className="flex flex-col justify-center">
            <h2 className={cn("text-3xl font-bold tracking-tight", mode === "dark" ? "text-white" : "text-black")}>{title}</h2>
            <p className={cn("mt-4 text-lg", mode === "dark" ? "text-gray-400" : "text-gray-600")}>{subtitle}</p>
            
            <div className="mt-10 space-y-8">
              {features.map((feature) => (
                <div key={feature.name} className="flex gap-x-3">
                  <feature.icon className="h-7 w-5 flex-none text-primary text-fuchsia-600" aria-hidden="true" />
                  <div>
                    <h3 className={cn("font-semibold", mode === "dark" ? "text-white" : "text-black")}>{feature.name}</h3>
                    <p className={cn("mt-2", mode === "dark" ? "text-gray-400" : "text-gray-600")}>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <Button asChild size="lg">
                <Link href={ctaLink}>{ctaText}</Link>
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-center lg:order-first">
            {imageContent}
          </div>
        </div>
      </div>
    </div>
  );
} 
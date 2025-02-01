import { FileText, Search, Zap, BarChart } from "lucide-react";
import { FeatureSection } from "./FeatureSection";

export function ResumeBuilder() {
  const features = [
    {
      name: "ATS-friendly formatting",
      description: "Ensure your resume passes through Applicant Tracking Systems with our optimized formatting.",
      icon: FileText,
    },
    {
      name: "Skills gap analysis",
      description: "Identify missing skills and get recommendations for improvement.",
      icon: Search,
    },
    {
      name: "Position-specific tailoring",
      description: "Automatically adjust your resume content based on job descriptions.",
      icon: Zap,
    },
    {
      name: "Real-time improvement suggestions",
      description: "Get instant feedback and suggestions to make your resume stand out.",
      icon: BarChart,
    },
  ];

  return (
    <FeatureSection
      mode="dark"
      title="Craft the Perfect Resume with AI"
      subtitle="Upload your resume, add a job description, and let HopJob analyze and optimize it for Applicant Tracking Systems (ATS)."
      features={features}
      ctaText="Optimize Your Resume Now"
      ctaLink="/resume-builder"
      imageContent={
        <div className="relative h-[400px] w-full rounded-xl bg-gray-900/5 p-6 dark:bg-gray-100/5">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="h-24 w-24 rounded-full bg-primary/10 mx-auto flex items-center justify-center">
                <FileText className="h-12 w-12 text-primary" />
              </div>
              <div className="mt-4 h-2 w-48 bg-gray-200 rounded-full">
                <div className="h-2 w-[85%] bg-primary rounded-full" />
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Resume Optimization Score: 85%
              </p>
            </div>
          </div>
        </div>
      }
    />
  );
} 
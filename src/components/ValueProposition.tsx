import { CheckCircle, Code2, Users, Target } from "lucide-react";

export function ValueProposition() {
  const features = [
    {
      name: "AI-Powered Resume Builder",
      description: "Tailor your resume for specific job descriptions with AI-driven insights.",
      icon: CheckCircle,
    },
    {
      name: "DSA Learning Platform",
      description: "Practice 500+ company-specific coding questions with real-time AI hints.",
      icon: Code2,
    },
    {
      name: "Community Support",
      description: "Join a thriving developer community for mock interviews, peer feedback, and networking.",
      icon: Users,
    },
    {
      name: "Interview Ready",
      description: "Master technical interviews with personalized roadmaps and progress tracking.",
      icon: Target,
    },
  ];

  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">Why HopJob?</h2>
        </div>
        <div className="mx-auto mt-16 max-w-7xl sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16 text-black shadow p-2 rounded">
                <dt className="text-base font-semibold leading-7">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
} 
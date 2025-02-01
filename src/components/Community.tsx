import { Users, MessageSquare, Calendar, Award } from "lucide-react";
import { FeatureSection } from "./FeatureSection";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export function Community() {
  const features = [
    {
      name: "Discord SSO integration",
      description: "Seamlessly connect with our thriving developer community through Discord.",
      icon: Users,
    },
    {
      name: "Discussion forums",
      description: "Engage in meaningful discussions about coding challenges and interview prep.",
      icon: MessageSquare,
    },
    {
      name: "Event calendar",
      description: "Join live coding sessions and webinars hosted by experienced developers.",
      icon: Calendar,
    },
    {
      name: "Badge system",
      description: "Earn recognition for your contributions and achievements.",
      icon: Award,
    },
  ];

  const communityMembers = [
    {
      name: "Sarah Chen",
      image: "/avatars/sarah.jpg",
      badge: "Top Contributor",
      activity: "Solved 5 problems today",
    },
    {
      name: "Mike Johnson",
      image: "/avatars/mike.jpg",
      badge: "Interview Ready",
      activity: "Helped 3 members",
    },
    {
      name: "Alex Kumar",
      image: "/avatars/alex.jpg",
      badge: "DSA Master",
      activity: "Hosted a mock interview",
    },
  ];

  return (
    <FeatureSection
      mode="light"
      title="Join a Thriving Developer Community"
      subtitle="Connect with peers, participate in mock interviews, and get feedback from experienced developers."
      features={features}
      ctaText="Join the Community"
      ctaLink="/community"
      className="bg-gray-50 dark:bg-gray-800"
      imageContent={
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {communityMembers.map((member) => (
            <div
              key={member.name}
              className="relative rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-6 shadow-sm"
            >
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={member.image} alt={member.name} />
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                    {member.name}
                  </p>
                  <Badge variant="secondary" className="mt-1">
                    {member.badge}
                  </Badge>
                </div>
              </div>
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                {member.activity}
              </div>
              <div className="mt-4 flex items-center text-sm text-primary">
                <Users className="h-4 w-4 mr-1" />
                <span>Active now</span>
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
} 
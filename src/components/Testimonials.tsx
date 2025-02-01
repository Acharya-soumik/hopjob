import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Testimonial {
  content: string;
  author: {
    name: string;
    role: string;
    company: string;
    image: string;
  };
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      content: "HopJob helped me land a job at Google! The AI resume builder and DSA platform were game-changers.",
      author: {
        name: "David Kim",
        role: "Software Engineer",
        company: "Google",
        image: "/avatars/david.jpg",
      },
    },
    {
      content: "The community support and mock interviews gave me the confidence to ace my interviews.",
      author: {
        name: "Emily Chen",
        role: "Frontend Developer",
        company: "Amazon",
        image: "/avatars/emily.jpg",
      },
    },
    {
      content: "I went from 0 offers to 3 offers in just 2 months with HopJob.",
      author: {
        name: "Michael Patel",
        role: "Full Stack Developer",
        company: "Microsoft",
        image: "/avatars/michael.jpg",
      },
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
            What Our Users Are Saying
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Join thousands of developers who have transformed their careers with HopJob
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author.name} className="flex flex-col justify-between">
              <div className="p-6">
                <div className="flex items-center gap-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.author.image} alt={testimonial.author.name} />
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.author.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.author.role}
                    </p>
                    <Badge variant="secondary" className="mt-1">
                      {testimonial.author.company}
                    </Badge>
                  </div>
                </div>
                <p className="mt-6 text-base italic text-gray-600 dark:text-gray-300">
                  "{testimonial.content}"
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="text-center">
            <p className="text-base font-semibold text-gray-600 dark:text-gray-300">
              Success Rate
            </p>
            <div className="mt-3 flex items-center justify-center gap-x-1.5">
              <div className="h-2 w-48 rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="h-2 w-[85%] rounded-full bg-primary" />
              </div>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">85%</span>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              of users land a job within 3 months
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 
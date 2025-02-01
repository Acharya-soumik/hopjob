import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the AI resume builder work?",
    answer: "Our AI resume builder analyzes your resume against job descriptions, providing real-time suggestions for optimization. It checks for ATS compatibility, suggests relevant keywords, and helps you highlight the most important skills and experiences for each position."
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer: "Yes, you can cancel your subscription at any time. If you cancel, you'll continue to have access to your plan's features until the end of your current billing period."
  },
  {
    question: "Is there a free trial for Pro/Premium?",
    answer: "Yes, we offer a 14-day free trial for both Pro and Premium plans. You can explore all features during this period and decide which plan best suits your needs."
  },
  {
    question: "How do I join the community?",
    answer: "You can join our community by signing up for any plan, including our free tier. Once registered, you'll get access to our Discord server where you can connect with other developers, participate in discussions, and join mock interview sessions."
  },
  {
    question: "What kind of DSA questions are available?",
    answer: "We offer 500+ DSA questions covering arrays, strings, linked lists, trees, graphs, dynamic programming, and more. Questions are categorized by difficulty and company, with detailed solutions and AI-powered hints."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with your Pro or Premium subscription. Simply contact our support team to process your refund."
  }
] as const;

export function FAQ() {
  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Find answers to common questions about HopJob's features and services
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                   <p className="text-gray-900">{faq.question}</p>
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
} 
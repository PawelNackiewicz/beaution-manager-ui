import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components";

const faqs = [
  {
    question: "How long is the free trial?",
    answer:
      "Our free trial lasts 14 days and gives you full access to all features in the Professional plan. No credit card required to start.",
  },
  {
    question: "Can I switch plans later?",
    answer:
      "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes, we take security seriously. All data is encrypted in transit and at rest. We're GDPR compliant and never sell your data to third parties.",
  },
  {
    question: "Do you offer training?",
    answer:
      "We provide comprehensive onboarding for all new customers, including video tutorials, live webinars, and dedicated support during your first month.",
  },
  {
    question: "Can I import my existing client data?",
    answer:
      "Yes! We support importing data from most popular salon software and spreadsheets. Our team can help you migrate for free.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards (Visa, Mastercard, American Express) and can also set up invoicing for annual plans.",
  },
];

export const FAQSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Got questions? We've got answers. Can't find what you're looking
            for? Reach out to our support team.
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

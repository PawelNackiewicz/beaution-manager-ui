import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sun, Clock, Coffee, Moon, Check } from "lucide-react";

const timelineSteps = [
  {
    time: "7:00 AM",
    icon: Sun,
    title: "Morning Prep",
    description:
      "Review your day's schedule at a glance. Beaution sends automatic reminders to all clients.",
    benefits: [
      "Automated SMS reminders",
      "Staff schedules ready",
      "Zero no-shows",
    ],
  },
  {
    time: "10:00 AM",
    icon: Clock,
    title: "Peak Hours",
    description:
      "Manage walk-ins seamlessly while keeping appointments on track with real-time updates.",
    benefits: [
      "Live availability",
      "Quick check-ins",
      "Multi-staff coordination",
    ],
  },
  {
    time: "2:00 PM",
    icon: Coffee,
    title: "Afternoon Flow",
    description:
      "Process payments instantly, send receipts, and let clients rebook before they leave.",
    benefits: ["One-tap payments", "Instant rebooking", "Upsell suggestions"],
  },
  {
    time: "6:00 PM",
    icon: Moon,
    title: "Closing Time",
    description:
      "Review your day's revenue, send thank-you messages, and let tomorrow's reminders go out.",
    benefits: ["Daily reports", "Auto thank-you emails", "Next-day prep"],
  },
];

export const BenefitsTimeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="benefits" className="py-24 bg-secondary/30">
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
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4">
            A Day in Your Transformed Salon
          </h2>
          <p className="text-muted-foreground">
            See how Beaution streamlines every moment of your workday, from
            opening to closing.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />

          {timelineSteps.map((step, index) => (
            <motion.div
              key={step.time}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 md:-translate-x-2 z-10" />

              {/* Content card */}
              <div
                className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"}`}
              >
                <div className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
                  {/* Time badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
                    <step.icon className="w-4 h-4" />
                    {step.time}
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {step.description}
                  </p>

                  {/* Benefits list */}
                  <ul className="space-y-2">
                    {step.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <Check className="w-4 h-4 text-primary flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

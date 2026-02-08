import {
  ArrowRight,
  Monitor,
  Mic,
  Award,
  Rocket,
  Cpu,
  HeartHandshake,
} from "lucide-react";
import Link from "next/link";
import { programs } from "@/lib/programs";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Mic,
  Award,
  Rocket,
  Cpu,
  HeartHandshake,
};

export default function Services() {
  return (
    <section id="programs" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-royal tracking-wide uppercase mb-2">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground tracking-tight text-balance">
            Programs & Initiatives
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Our comprehensive programs are designed to bridge the gap between
            potential and opportunity.
          </p>
        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program) => {
            const Icon = iconMap[program.iconName] || Monitor;
            return (
              <div
                key={program.id}
                className="flex flex-col bg-secondary rounded-2xl p-8 border border-border hover:shadow-lg transition-shadow duration-300 group"
              >
                <div
                  className={`h-12 w-12 rounded-xl ${program.color} flex items-center justify-center mb-6 shadow-md`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                  {program.shortDescription}
                </p>
                <Link
                  href={`/programs/${program.slug}`}
                  className="inline-flex items-center text-brand-royal font-semibold hover:text-brand-cyan transition-colors"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* Resources CTA Banner */}
        <div className="mt-16 bg-brand-royal rounded-3xl p-8 md:p-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 bg-brand-cyan rounded-full opacity-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-48 w-48 bg-blue-400 rounded-full opacity-15 blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold text-white mb-2">
                Training Resources & Media
              </h3>
              <p className="text-blue-100 max-w-xl">
                Access our library of educational articles, downloadable guides,
                and video highlights from our latest workshops.
              </p>
            </div>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-brand-royal font-semibold hover:bg-slate-100 transition-colors shadow-md flex-shrink-0"
            >
              Access Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

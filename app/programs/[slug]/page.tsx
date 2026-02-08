import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Clock,
  Users,
  Award,
  BookOpen,
  CheckCircle,
  Monitor,
  Mic,
  Rocket,
  Cpu,
  HeartHandshake,
} from "lucide-react";
import { programs } from "@/lib/programs";
import ApplyButton from "./apply-button";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Monitor,
  Mic,
  Award: Award,
  Rocket,
  Cpu,
  HeartHandshake,
};

export async function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);
  if (!program) return { title: "Program Not Found" };
  return {
    title: `${program.title} | SLRiseHub`,
    description: program.shortDescription,
  };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) {
    notFound();
  }

  const Icon = iconMap[program.iconName] || Monitor;

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Hero Banner */}
      <div
        className={`${program.color} text-white py-16 md:py-24 relative overflow-hidden`}
      >
        {/* Pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link
            href="/#programs"
            className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Programs
          </Link>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
              <Icon className="h-12 w-12 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-balance">
                {program.title}
              </h1>
              <p className="text-xl text-white/80 max-w-2xl">
                {program.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
                Overview
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {program.longDescription}
              </p>
            </section>

            {/* Curriculum */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                Course Curriculum
              </h2>
              <div className="bg-secondary rounded-2xl p-8 border border-border">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {program.curriculum.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Outcomes */}
            <section>
              <h2 className="text-2xl font-heading font-bold text-foreground mb-6">
                What You Will Achieve
              </h2>
              <div className="space-y-4">
                {program.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-emerald-500 flex-shrink-0" />
                    <p className="text-muted-foreground">{outcome}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-2xl shadow-xl shadow-slate-200/50 border border-border p-8 sticky top-28">
              <h3 className="text-xl font-heading font-bold text-foreground mb-6">
                Program Details
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-light p-2.5 rounded-lg">
                    <Clock className="h-5 w-5 text-brand-royal" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
                      Duration
                    </p>
                    <p className="text-foreground font-medium">
                      {program.duration}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-brand-light p-2.5 rounded-lg">
                    <Users className="h-5 w-5 text-brand-royal" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
                      Format
                    </p>
                    <p className="text-foreground font-medium">
                      {program.format}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-brand-light p-2.5 rounded-lg">
                    <Award className="h-5 w-5 text-brand-royal" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-semibold">
                      Skill Level
                    </p>
                    <p className="text-foreground font-medium">
                      {program.level}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <ApplyButton programTitle={program.title} />
                <p className="text-xs text-center text-muted-foreground mt-3">
                  * Limited spots available for the upcoming cohort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-secondary py-16 mt-12 border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-heading font-bold text-foreground mb-4">
            Not sure which program is right for you?
          </h2>
          <p className="text-muted-foreground mb-8">
            Contact our team for a free consultation and guidance on your career
            path.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-brand-royal text-brand-royal font-semibold hover:bg-brand-royal hover:text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}

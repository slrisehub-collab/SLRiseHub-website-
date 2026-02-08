import {
  Heart,
  Lightbulb,
  GraduationCap,
  ShieldCheck,
  Users,
  Leaf,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Empowerment",
    description:
      "Giving youth the tools and confidence to lead change in their communities.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Fostering creativity and modern solutions to local and global challenges.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Providing accessible, high-quality learning opportunities for all.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "Upholding transparency, honesty, and ethical leadership in all we do.",
  },
  {
    icon: Users,
    title: "Inclusion",
    description:
      "Ensuring every voice is heard, regardless of background or status.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Building long-term solutions that support national development.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-secondary" id="values">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-royal tracking-wide uppercase mb-2">
            Our Foundation
          </p>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground tracking-tight text-balance">
            Core Values & Mission
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground mx-auto">
            We are driven by a commitment to build a better future through these
            guiding principles.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group p-7 bg-card rounded-2xl border border-border hover:shadow-xl hover:border-brand-cyan/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-secondary p-3.5 rounded-xl inline-flex shadow-sm mb-5 group-hover:bg-brand-cyan/10 transition-colors">
                  <Icon className="h-7 w-7 text-brand-cyan" />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

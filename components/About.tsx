const stats = [
  { label: "Youth Impacted", value: "1,500+" },
  { label: "Training Sessions", value: "50+" },
  { label: "Partnerships", value: "20+" },
  { label: "Districts Reached", value: "16" },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <div className="inline-block px-3 py-1.5 rounded-full bg-brand-royal/30 border border-brand-royal/50 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-6">
              Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 text-balance">
              A Catalyst for National Development
            </h2>

            <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
              <p>
                <strong className="text-white">Our Mission:</strong> To empower
                young people in Sierra Leone through education, digital skills,
                media literacy, innovation, leadership, and entrepreneurship,
                enabling sustainable national development.
              </p>
              <p>
                SLRiseHub was established to serve as a central hub for youth
                empowerment. We believe that by providing the right tools,
                mentorship, and opportunities, the youth of Sierra Leone can
                drive innovation and economic growth.
              </p>
              <p>
                We are more than just an organization; we are a movement
                dedicated to inclusivity, integrity, and the future of our
                nation.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/[0.04] backdrop-blur-sm p-7 rounded-2xl border border-white/[0.08] text-center hover:bg-white/[0.08] transition-colors group"
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-brand-cyan mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

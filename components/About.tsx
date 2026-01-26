import React from 'react';

const stats = [
  { label: 'Youth Impacted', value: '1,500+' },
  { label: 'Training Sessions', value: '50+' },
  { label: 'Partnerships', value: '20+' },
  { label: 'Districts Reached', value: '16' },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-brand-royal/30 border border-brand-royal/50 text-brand-cyan text-xs font-bold uppercase tracking-wider mb-6">
                Who We Are
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-heading">
                A Catalyst for National Development
            </h2>
            
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  <strong className="text-white">Our Mission:</strong> To empower young people in Sierra Leone through education, digital skills, media literacy, innovation, leadership, and entrepreneurship, enabling sustainable national development.
                </p>
                <p>
                  SLRiseHub was established to serve as a central hub for youth empowerment. We believe that by providing the right tools, mentorship, and opportunities, the youth of Sierra Leone can drive innovation and economic growth.
                </p>
                <p>
                  We are more than just an organization; we are a movement dedicated to inclusivity, integrity, and the future of our nation.
                </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center hover:bg-white/10 transition-colors group">
                <div className="text-3xl md:text-4xl font-bold text-brand-cyan mb-2 group-hover:scale-110 transition-transform duration-300">{stat.value}</div>
                <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Heart, Lightbulb, GraduationCap, ShieldCheck, Users, Leaf } from 'lucide-react';

const values = [
  {
    icon: <Heart className="h-8 w-8 text-brand-cyan" />,
    title: 'Empowerment',
    description: 'Giving youth the tools and confidence to lead change in their communities.',
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-brand-cyan" />,
    title: 'Innovation',
    description: 'Fostering creativity and modern solutions to local and global challenges.',
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-brand-cyan" />,
    title: 'Education',
    description: 'Providing accessible, high-quality learning opportunities for all.',
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-brand-cyan" />,
    title: 'Integrity',
    description: 'Upholding transparency, honesty, and ethical leadership in all we do.',
  },
  {
    icon: <Users className="h-8 w-8 text-brand-cyan" />,
    title: 'Inclusion',
    description: 'Ensuring every voice is heard, regardless of background or status.',
  },
  {
    icon: <Leaf className="h-8 w-8 text-brand-cyan" />,
    title: 'Sustainability',
    description: 'Building long-term solutions that support national development.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50" id="values">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-brand-royal tracking-wide uppercase">Our Foundation</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Core Values & Mission
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-600 mx-auto">
            We are driven by a commitment to build a better future through these guiding principles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-2xl border border-slate-100 hover:shadow-xl hover:border-brand-cyan/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-slate-50 p-3 rounded-xl inline-block shadow-sm mb-4 group-hover:bg-brand-cyan/10 transition-colors">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
              <p className="text-slate-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
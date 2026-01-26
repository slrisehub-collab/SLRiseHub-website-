import React from 'react';
import Button from './Button';
import { ArrowRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { programs } from '../data/programs';

const Services: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="programs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h2 className="text-base font-semibold text-brand-royal tracking-wide uppercase">What We Do</h2>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">Programs & Initiatives</h2>
          <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">
            Our comprehensive programs are designed to bridge the gap between potential and opportunity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <div key={program.id} className="flex flex-col bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
              <div className={`h-12 w-12 rounded-lg ${program.color} flex items-center justify-center mb-6 shadow-md`}>
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{program.title}</h3>
              <p className="text-slate-600 mb-6 flex-grow leading-relaxed">
                {program.shortDescription}
              </p>
              <Link 
                to={`/programs/${program.slug}`} 
                className="inline-flex items-center text-brand-royal font-semibold hover:text-brand-cyan transition-colors"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-brand-royal rounded-3xl p-8 md:p-12 overflow-hidden relative">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 bg-brand-cyan rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 bg-purple-500 rounded-full opacity-20 blur-3xl"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Training Resources & Media</h3>
                    <p className="text-blue-100 max-w-xl">
                        Access our library of educational articles, downloadable guides, and video highlights from our latest workshops.
                    </p>
                </div>
                <Button variant="white" onClick={() => navigate('/resources')}>
                    Access Resources
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { programs } from '../data/programs';
import Button from './Button';
import { ArrowLeft, Clock, Users, BookOpen, CheckCircle, Award } from 'lucide-react';

const ProgramDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = programs.find(p => p.slug === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">Program Not Found</h1>
        <Link to="/">
          <Button variant="primary" icon={<ArrowLeft className="h-4 w-4" />}>
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  const handleApplyClick = () => {
    const message = `Hello, I am interested in applying for the ${program.title} program.`;
    const whatsappUrl = `https://wa.me/23279095969?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pt-20 min-h-screen bg-white">
      {/* Hero Section */}
      <div className={`${program.color} text-white py-16 md:py-24 relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-5 w-5 mr-2" /> Back to Programs
          </Link>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
              {React.cloneElement(program.icon as React.ReactElement, { className: "h-12 w-12 text-white" })}
            </div>
            <div>
              <h1 className="text-3xl md:text-5xl font-bold font-heading mb-4">{program.title}</h1>
              <p className="text-xl text-blue-50 max-w-2xl">{program.shortDescription}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                {program.longDescription}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Course Curriculum</h2>
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {program.curriculum.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <BookOpen className="h-5 w-5 text-brand-cyan" />
                      </div>
                      <span className="ml-3 text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">What You Will Achieve</h2>
              <div className="space-y-4">
                {program.outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mr-3" />
                    <p className="text-slate-700">{outcome}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 p-8 sticky top-28">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Program Details</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="bg-blue-50 p-2.5 rounded-lg text-brand-royal mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Duration</p>
                    <p className="text-slate-900 font-medium">{program.duration}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-purple-50 p-2.5 rounded-lg text-purple-600 mr-4">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Format</p>
                    <p className="text-slate-900 font-medium">{program.format}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-green-50 p-2.5 rounded-lg text-green-600 mr-4">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Skill Level</p>
                    <p className="text-slate-900 font-medium">{program.level}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100">
                <Button 
                    variant="primary" 
                    className="w-full justify-center mb-3"
                    onClick={handleApplyClick}
                >
                    Apply Now
                </Button>
                <p className="text-xs text-center text-slate-500">
                    * Limited spots available for the upcoming cohort.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Simple CTA Section */}
      <section className="bg-slate-50 py-16 mt-12 border-t border-slate-200">
         <div className="max-w-4xl mx-auto px-4 text-center">
             <h2 className="text-2xl font-bold text-slate-900 mb-4">Not sure which program is right for you?</h2>
             <p className="text-slate-600 mb-8">Contact our team for a free consultation and guidance on your career path.</p>
             <Link to="/#contact">
                <Button variant="outline">Contact Us</Button>
             </Link>
         </div>
      </section>
    </div>
  );
};

export default ProgramDetail;
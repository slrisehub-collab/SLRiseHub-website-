import React from 'react';
import Button from './Button';
import { ArrowRight, Lightbulb, Users, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  
  const handleJoinClick = () => {
    window.open('https://wa.me/23279095969?text=Hello,%20I%20am%20interested%20in%20joining%20SLRiseHub.', '_blank');
  };

  return (
    <div className="relative bg-brand-royal pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Overlay Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Young people collaborating"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-royal via-brand-royal/90 to-brand-royal/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:w-3/4">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20 text-brand-cyan text-sm font-medium mb-6 backdrop-blur-sm animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-brand-cyan mr-2 animate-pulse"></span>
            Empowering the Next Generation of Leaders
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6 animate-fade-in-up animation-delay-100">
            Empowering Sierra Leone’s Youth Through <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan to-white">
             Innovation, Education & Media
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
            SLRiseHub is a credible national youth empowerment platform dedicated to fostering digital skills, entrepreneurship, and sustainable national development.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up animation-delay-300">
            <Button 
                variant="cyan" 
                size="lg" 
                icon={<ArrowRight className="h-5 w-5" />}
                onClick={handleJoinClick}
            >
              Join SLRiseHub
            </Button>
            <Button variant="outline-white" size="lg" onClick={() => document.getElementById('programs')?.scrollIntoView({behavior: 'smooth'})}>
              Explore Programs
            </Button>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-slate-200 font-medium animate-fade-in-up animation-delay-400">
            <div className="flex items-center">
              <Lightbulb className="h-5 w-5 text-brand-cyan mr-2" />
              Innovation & Tech
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-brand-cyan mr-2" />
              Leadership Training
            </div>
            <div className="flex items-center">
              <Globe className="h-5 w-5 text-brand-cyan mr-2" />
              Sustainable Development
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
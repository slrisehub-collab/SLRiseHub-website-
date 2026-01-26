import React, { useEffect } from 'react';
import Hero from './Hero';
import Services from './Services';
import Features from './Features';
import About from './About';
import Contact from './Contact';
import { useLocation } from 'react-router-dom';

const Home: React.FC = () => {
  const location = useLocation();

  // Handle hash scrolling when navigating back from other pages
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
        window.scrollTo(0,0);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Features />
      <Services />
      <Contact />
    </>
  );
};

export default Home;
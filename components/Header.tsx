import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Button from './Button';
import { useLocation, useNavigate, Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Check if we are on a detail page (not root)
  const isDetailPage = location.pathname !== '/';

  useEffect(() => {
    const handleScroll = () => {
      // Always show background on detail pages, or if scrolled
      if (isDetailPage) {
         setIsScrolled(true);
      } else {
         setIsScrolled(window.scrollY > 20);
      }
    };
    
    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDetailPage]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    // If it's the home link, just go top
    if (href === '#') {
        if (isDetailPage) navigate('/');
        else window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    // Extract the id from '#about'
    const targetId = href.replace('#', '');

    if (isDetailPage) {
      // If on detail page, navigate to home with hash
      navigate(`/#${targetId}`);
    } else {
      // If on home page, scroll to element
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Core Values', href: '#values' },
    { name: 'Programs', href: '#programs' },
    { name: 'Get Involved', href: '#contact' },
  ];

  const logoUrl = "https://drive.google.com/thumbnail?id=1QbZZ0MJtwgMPll3ZhVS2BxkZ9_RcMUcM&sz=s200";

  // Text color logic: White on transparent Home, Dark on Scrolled OR Detail Page
  const textColorClass = (isScrolled || isDetailPage) ? 'text-slate-600' : 'text-slate-100';
  const logoTextClass = (isScrolled || isDetailPage) ? 'text-brand-royal' : 'text-white';
  const buttonVariant = (isScrolled || isDetailPage) ? 'primary' : 'white';
  const mobileMenuButtonClass = (isScrolled || isDetailPage) ? 'text-slate-800' : 'text-white';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        (isScrolled || isDetailPage) ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
                src={logoUrl}
                alt="SLRiseHub Logo"
                className="h-10 w-10 rounded-full shadow-sm object-cover bg-white"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://ui-avatars.com/api/?name=SL&background=ffffff&color=1d4ed8&rounded=true&bold=true&size=128";
                  e.currentTarget.onerror = null;
                }}
            />
            <span className={`text-2xl font-bold tracking-tight ${logoTextClass}`}>
              SLRiseHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium hover:text-brand-cyan transition-colors ${textColorClass}`}
              >
                {link.name}
              </a>
            ))}
            <Button 
                variant={buttonVariant} 
                onClick={(e) => handleNavClick(e, '#contact')}
            >
              Partner With Us
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-md ${mobileMenuButtonClass}`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl border-t border-slate-100 absolute w-full top-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-brand-cyan hover:bg-slate-50"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4">
              <Button 
                variant="primary" 
                className="w-full justify-center"
                onClick={(e) => handleNavClick(e, '#contact')}
              >
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/#about" },
  { name: "Core Values", href: "/#values" },
  { name: "Programs", href: "/#programs" },
  { name: "Get Involved", href: "/#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (!isHomePage) {
        setIsScrolled(true);
      } else {
        setIsScrolled(window.scrollY > 20);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    // If we're on the home page and the link is a hash link, scroll to it
    if (isHomePage && href.startsWith("/#")) {
      e.preventDefault();
      const targetId = href.replace("/#", "");
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      setIsMobileMenuOpen(false);
    } else if (isHomePage && href === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  const showSolid = isScrolled || !isHomePage;
  const textColor = showSolid ? "text-foreground" : "text-slate-100";
  const logoColor = showSolid ? "text-brand-royal" : "text-white";
  const menuBtnColor = showSolid ? "text-foreground" : "text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid ? "bg-background shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <span
              className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-royal text-white font-bold text-sm shadow-sm"
              aria-hidden="true"
            >
              SL
            </span>
            <span
              className={`text-2xl font-heading font-bold tracking-tight ${logoColor}`}
            >
              SLRiseHub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium hover:text-brand-cyan transition-colors ${textColor}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={(e) => handleNavClick(e, "/#contact")}
              className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                showSolid
                  ? "bg-brand-royal text-white hover:bg-blue-700"
                  : "bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm"
              }`}
            >
              Partner With Us
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-md ${menuBtnColor}`}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background shadow-xl border-t border-border absolute w-full top-full left-0">
          <nav className="px-4 pt-2 pb-6 space-y-1" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-3 rounded-md text-base font-medium text-foreground hover:text-brand-cyan hover:bg-secondary"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/#contact"
                onClick={(e) => handleNavClick(e, "/#contact")}
                className="block w-full text-center px-5 py-3 rounded-lg bg-brand-royal text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                Partner With Us
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

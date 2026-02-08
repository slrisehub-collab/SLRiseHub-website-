"use client";

import { ArrowRight, Lightbulb, Users, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const handleJoinClick = () => {
    window.open(
      "https://wa.me/23279095969?text=Hello,%20I%20am%20interested%20in%20joining%20SLRiseHub.",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-[90vh] flex items-center bg-brand-dark overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-20"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-br from-brand-dark via-brand-royal/80 to-brand-dark/90" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 z-[2] opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.12] text-brand-cyan text-sm font-medium mb-8 backdrop-blur-sm animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-brand-cyan mr-2.5 animate-pulse" />
            Empowering the Next Generation
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight leading-[1.1] mb-6 animate-fade-in-up animation-delay-100 text-balance">
            Empowering Sierra Leone{"'"}s Youth Through{" "}
            <span className="text-brand-cyan">
              Innovation, Education & Media
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg sm:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl animate-fade-in-up animation-delay-200">
            SLRiseHub is a credible national youth empowerment platform dedicated
            to fostering digital skills, entrepreneurship, and sustainable
            national development.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up animation-delay-300">
            <button
              onClick={handleJoinClick}
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-brand-cyan text-white font-semibold text-base hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-900/25"
            >
              Join SLRiseHub
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <Link
              href="#programs"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-white/20 text-white font-semibold text-base hover:bg-white/10 backdrop-blur-sm transition-colors"
            >
              Explore Programs
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-8 text-sm text-slate-300 font-medium animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-brand-cyan" />
              <span>Innovation & Tech</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-brand-cyan" />
              <span>Leadership Training</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-brand-cyan" />
              <span>Sustainable Development</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

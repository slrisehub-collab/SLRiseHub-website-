"use client";

export default function NewsletterCta() {
  const handleScrollToNewsletter = () => {
    document
      .getElementById("footer-newsletter")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="mt-20 bg-brand-dark rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -mt-20 -mr-20 h-80 w-80 bg-brand-royal rounded-full opacity-20 blur-3xl" />
      <div className="relative z-10">
        <h2 className="text-3xl font-heading font-bold mb-4">
          Want more resources?
        </h2>
        <p className="text-slate-300 max-w-2xl mx-auto mb-8">
          Subscribe to our newsletter to get the latest guides, course updates,
          and tech tips delivered directly to your inbox.
        </p>
        <button
          onClick={handleScrollToNewsletter}
          className="inline-flex items-center justify-center px-8 py-3.5 rounded-lg bg-brand-cyan text-white font-semibold hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-900/25"
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
}

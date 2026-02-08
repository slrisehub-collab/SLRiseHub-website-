"use client";

export default function ApplyButton({
  programTitle,
}: {
  programTitle: string;
}) {
  const handleApplyClick = () => {
    const message = `Hello, I am interested in applying for the ${programTitle} program.`;
    const whatsappUrl = `https://wa.me/23279095969?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleApplyClick}
      className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-lg bg-brand-royal text-white font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20"
    >
      Apply Now
    </button>
  );
}

"use client";

export default function DownloadButton({ url }: { url: string }) {
  return (
    <button
      onClick={() => window.open(url, "_blank")}
      className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg border-2 border-brand-royal text-brand-royal font-semibold text-sm hover:bg-brand-royal hover:text-white transition-colors"
    >
      Download
    </button>
  );
}

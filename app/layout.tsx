import type { Metadata, Viewport } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "SLRiseHub | Empowering Sierra Leone's Youth",
  description:
    "Empowering young people in Sierra Leone through education, digital skills, media literacy, innovation, leadership, and entrepreneurship.",
  keywords: [
    "Sierra Leone",
    "youth empowerment",
    "digital skills",
    "education",
    "entrepreneurship",
    "leadership",
    "media literacy",
  ],
};

export const viewport: Viewport = {
  themeColor: "#1d4ed8",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen font-sans">{children}</body>
    </html>
  );
}

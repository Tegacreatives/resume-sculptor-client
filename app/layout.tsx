import type { Metadata } from "next";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Open_Sans } from "next/font/google";

const font = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Resume Sculptor | AI-Powered Resume Generator Tailored to Any Job Description",
  description:
    "Easily generate tailored resumes for specific job descriptions with Resume Sculptor, an AI-powered tool designed to streamline your job search.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>
        <Navbar />
        <div className="px-10 md:px-14">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Resume Sculptor | AI resume generator for different job descriptions",
  description: "Easily generate tailored resumes for specifc job descriptions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-cols-10 gap-2 h-[100vh]`}
      >
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-8">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}

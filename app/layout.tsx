import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/context/LanguageContext";

export const metadata: Metadata = {
  title: "Behbod Khansari — Front-End Engineer",
  description:
    "Front-end developer specializing in building high-performance, scalable web applications with modern technologies like Next.js, React, and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col py-6">
        <LanguageProvider>
          <Header />
          <div className="orb orb-purple" />
          <div className="orb orb-pink" />
          <div className="orb orb-blue" />

          <main className="flex-1 max-w-[1000px] mx-auto px-10 my-[150px] overflow-hidden">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

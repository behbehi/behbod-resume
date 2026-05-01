import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LanguageProvider } from "@/components/context/LanguageContext";

export const metadata: Metadata = {
  title: "Behbod Khansari",
  description: "this is my resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="py-6">
        <LanguageProvider>
          <Header />
          <div className="orb orb-purple" />
          <div className="orb orb-pink" />
          <div className="orb orb-blue" />
          <div className="max-w-[1000px] mx-auto px-10 my-[150px] overflow-hidden">
            {children}
          </div>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

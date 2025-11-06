import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Virtual Furniture Portfolio Website",
  description: "Curating beautiful virtual furniture for your design inspiration",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main className="min-h-screen bg-[#FAF8F5]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import "@/styles/globals.css";
import "@/styles/index.css";

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
      <body>{children}</body>
    </html>
  );
}


import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import { Anek_Telugu } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { cn } from "@/lib/utils";

const AnekTelugu = Anek_Telugu({
  subsets: ["latin"],
  variable: "--font-caption",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"], 
});

export const metadata: Metadata = {
  title: "Giresse Mabele . Développeur full stack",
  description: "Je suis Développeur Full Stack à la recherche d'une alternance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="h-full">
      <body
        className={cn(GeistSans.variable, geistMono.variable, AnekTelugu.variable, "font-sans h-full")}
      >
        {children}
      </body>
    </html>
  );
}

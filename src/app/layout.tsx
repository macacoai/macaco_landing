import type { Metadata } from "next";
import { Inter, Audiowide, Google_Sans_Flex } from "next/font/google";
import { LanguageProvider } from "@/lib/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: "400",
});

const googleSansFlex = Google_Sans_Flex({
  variable: "--font-google-sans-flex",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Macaco - Your AI-powered QA assistant",
  description:
    "Describe what you want to test in plain language, Macaco generates real automated tests and you run them on your machine as many times as you want. No cost per execution. No vendor lock-in.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${audiowide.variable} ${googleSansFlex.variable}`}>
      <body className="min-h-screen bg-white text-black font-inter antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}

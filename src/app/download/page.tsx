import type { Metadata } from "next";
import Navbar from "@/components/lemon-navbar";
import Footer from "@/components/Footer";
import DownloadClient from "./DownloadClient";

export const metadata: Metadata = {
  title: "Macaco — Download",
  description: "Download the latest Macaco client for Windows, macOS, or Linux.",
  robots: { index: false, follow: false },
};

export default function DownloadPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <DownloadClient />
      </main>
      <Footer />
    </div>
  );
}

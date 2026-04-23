import type { Metadata } from "next";
import Navbar from "@/components/lemon-navbar";
import Footer from "@/components/Footer";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Macaco — Terms of Service",
  description:
    "Terms that govern your use of Macaco — the QA assistant that runs tests locally and leaves the generated code in your hands.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <TermsClient />
      </main>
      <Footer />
    </div>
  );
}

import type { Metadata } from "next";
import Navbar from "@/components/lemon-navbar";
import Footer from "@/components/Footer";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Macaco — Privacy Policy",
  description:
    "How Macaco handles your information — minimum data, local-first execution, and clear controls over what we collect.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex flex-1 flex-col">
        <PrivacyClient />
      </main>
      <Footer />
    </div>
  );
}

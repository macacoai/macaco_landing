import Navbar from "@/components/lemon-navbar";
import Hero from "@/components/Hero";
import WhyMacaco from "@/components/WhyMacaco";
import CTA from "@/components/CTA";
import DiscordCommunity from "@/components/DiscordCommunity";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <WhyMacaco />
        <CTA />
        <DiscordCommunity />
        <Team />
      </main>
      <Footer />
    </>
  );
}

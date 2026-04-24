import { Navbar } from "@/components/web3/Navbar";
import { Hero } from "@/components/web3/Hero";
import { StatsBar } from "@/components/web3/StatsBar";
import { Features } from "@/components/web3/Features";
import { Ecosystem } from "@/components/web3/Ecosystem";
import { CTA } from "@/components/web3/CTA";
import { Footer } from "@/components/web3/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <StatsBar />
      <Features />
      <Ecosystem />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;

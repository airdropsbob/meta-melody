import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroOrb from "@/assets/hero-orb.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />

      <div className="container relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs font-mono text-muted-foreground mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Mainnet v2.0 — Live Now</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6"
          >
            The future of <br />
            <span className="gradient-text">decentralized</span> <br />
            finance.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed"
          >
            A high-performance L2 protocol built for the next generation of on-chain applications. Sub-second finality, near-zero fees, infinite scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="hero" size="xl">
              Start Building <ArrowRight className="ml-1" />
            </Button>
            <Button variant="glass" size="xl">Read Whitepaper</Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative aspect-square max-w-lg mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-primary blur-3xl opacity-30 animate-pulse-glow" />
          <img
            src={heroOrb}
            alt="Web3 protocol crystal visualization"
            width={1280}
            height={1280}
            className="relative w-full h-full object-contain animate-float"
          />
        </motion.div>
      </div>
    </section>
  );
};

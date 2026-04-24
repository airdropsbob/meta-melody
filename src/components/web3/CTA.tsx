import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section id="developers" className="container py-24 md:py-32">
      <div className="relative overflow-hidden rounded-3xl glass glow-border p-12 md:p-20 text-center">
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-primary rounded-full blur-3xl opacity-20 animate-pulse-glow" />
        <div className="relative">
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
            Ship the next <span className="gradient-text">100M users</span> on-chain.
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
            Get $50k in gas credits, dedicated dev support, and a direct line to our core engineering team.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="xl">Apply for Grant <ArrowRight /></Button>
            <Button variant="glass" size="xl">Join Discord</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

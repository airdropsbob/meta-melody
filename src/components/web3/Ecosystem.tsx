const partners = ["Uniswap", "Aave", "Lido", "Chainlink", "MakerDAO", "Curve", "Compound", "1inch", "Balancer", "Synthetix"];

export const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-24 md:py-32 overflow-hidden">
      <div className="container text-center mb-16">
        <p className="font-mono text-xs uppercase tracking-widest text-secondary mb-4">// Ecosystem</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold max-w-3xl mx-auto">
          Trusted by <span className="gradient-text">300+ protocols</span> shaping the on-chain economy.
        </h2>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-marquee w-max gap-6">
          {[...partners, ...partners].map((p, i) => (
            <div
              key={i}
              className="glass glow-border rounded-2xl px-10 py-6 font-display text-2xl font-semibold text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

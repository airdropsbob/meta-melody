const cols = [
  { title: "Protocol", links: ["Architecture", "Tokenomics", "Validators", "Roadmap"] },
  { title: "Developers", links: ["Documentation", "SDK", "GitHub", "Bug Bounty"] },
  { title: "Community", links: ["Discord", "Twitter", "Forum", "Blog"] },
];

export const Footer = () => {
  return (
    <footer className="container py-16 border-t border-border/50">
      <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-12">
        <div>
          <a href="#" className="flex items-center gap-2 font-display font-bold text-xl mb-4">
            <span className="w-8 h-8 rounded-md bg-gradient-primary shadow-glow-cyan" />
            <span className="gradient-text">NEXUS</span>
          </a>
          <p className="text-sm text-muted-foreground max-w-xs">
            The high-performance L2 protocol powering the open economy.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">{c.title}</h4>
            <ul className="space-y-3">
              {c.links.map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-between items-center gap-4 pt-8 border-t border-border/50">
        <p className="font-mono text-xs text-muted-foreground">© 2026 Nexus Labs. All rights reserved.</p>
        <p className="font-mono text-xs text-muted-foreground">v2.0.4 · mainnet · block #18,492,031</p>
      </div>
    </footer>
  );
};

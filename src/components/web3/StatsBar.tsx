const stats = [
  { value: "$4.2B", label: "Total Value Locked" },
  { value: "12.8M", label: "Wallets" },
  { value: "0.001s", label: "Block Time" },
  { value: "$0.0001", label: "Avg Fee" },
];

export const StatsBar = () => {
  return (
    <section className="container py-12">
      <div className="glass glow-border rounded-3xl grid grid-cols-2 md:grid-cols-4 divide-x divide-border/50">
        {stats.map((s) => (
          <div key={s.label} className="p-8 text-center">
            <div className="font-display text-3xl md:text-4xl font-bold gradient-text mb-2">{s.value}</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground font-mono">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

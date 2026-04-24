import { motion } from "framer-motion";
import { Zap, Shield, Layers, Globe2, Code2, Coins } from "lucide-react";

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "100,000+ TPS with sub-second finality powered by parallel execution." },
  { icon: Shield, title: "Zero-Knowledge Secure", desc: "ZK-rollup architecture with cryptographic guarantees inherited from L1." },
  { icon: Layers, title: "Modular Stack", desc: "Compose your own execution, DA, and settlement layers freely." },
  { icon: Globe2, title: "Cross-Chain Native", desc: "Bridge assets and messages across 40+ chains seamlessly." },
  { icon: Code2, title: "EVM Equivalent", desc: "Deploy your Solidity contracts unchanged. Full tooling support." },
  { icon: Coins, title: "MEV Protected", desc: "Encrypted mempools and fair ordering protect every transaction." },
];

export const Features = () => {
  return (
    <section id="protocol" className="container py-24 md:py-32">
      <div className="max-w-2xl mb-16">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-4">// Protocol</p>
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Built different. <span className="gradient-text">By design.</span>
        </h2>
        <p className="text-muted-foreground text-lg">
          Every layer of Nexus is engineered for performance, security, and developer joy.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative glass rounded-3xl p-8 hover:bg-muted/30 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:shadow-glow-cyan transition-all duration-500">
              <f.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-3">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

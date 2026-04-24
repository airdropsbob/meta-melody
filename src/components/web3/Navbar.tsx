import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const links = ["Protocol", "Ecosystem", "Developers", "Docs"];

export const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1100px,calc(100%-2rem))]"
    >
      <nav className="glass glow-border rounded-full px-6 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="w-7 h-7 rounded-md bg-gradient-primary shadow-glow-cyan" />
          <span className="gradient-text">NEXUS</span>
        </a>
        <ul className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">{l}</a>
            </li>
          ))}
        </ul>
        <Button variant="hero" size="sm">Launch App</Button>
      </nav>
    </motion.header>
  );
};

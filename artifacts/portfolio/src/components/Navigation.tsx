import { motion } from "framer-motion";
import { Link } from "wouter";
import { Terminal } from "lucide-react";

export function Navigation() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const navItems = [
    { label: "Expérience", id: "experience" },
    { label: "Projets", id: "projects" },
    { label: "Compétences", id: "skills" },
    { label: "Formation", id: "education" },
  ];

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 border-b border-border/40 bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 group"
          data-testid="link-home"
        >
          <div className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center group-hover:border-primary/50 transition-colors duration-300">
            <Terminal className="w-5 h-5 text-primary" />
          </div>
          <span className="font-display font-bold text-lg hidden sm:block tracking-wide">
            M.Bennani
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-mono text-muted-foreground hover:text-primary transition-colors duration-300"
              data-testid={`nav-${item.id}`}
            >
              // {item.label.toLowerCase()}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => scrollTo('contact')}
          className="px-5 py-2.5 rounded-md bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 font-mono text-sm transition-all duration-300 relative overflow-hidden group"
          data-testid="btn-contact"
        >
          <span className="relative z-10">Me contacter</span>
        </button>
      </div>
    </motion.header>
  );
}

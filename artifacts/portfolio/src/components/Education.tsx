import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="w-full py-24 bg-card/30 relative border-y border-border/50">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">Formation</h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden border border-border bg-card p-8 md:p-10 group"
        >
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="font-mono text-primary text-sm mb-2 uppercase tracking-widest">2024 — 2026</div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Master Expert en Ingénierie Informatique
              </h3>
              <p className="text-xl text-muted-foreground font-display">EPSI Lille</p>
            </div>
            
            <div className="hidden md:block h-24 w-px bg-border/50" />
            
            <div className="max-w-xs">
              <p className="text-muted-foreground/80 text-sm leading-relaxed">
                Formation avancée centrée sur l'architecture logicielle, le DevOps, la sécurité et la gestion de projets complexes en environnement cloud.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

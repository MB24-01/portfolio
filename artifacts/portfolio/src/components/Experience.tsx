import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineScale = useTransform(scrollYProgress, [0.2, 0.8], [0, 1]);

  const experiences = [
    {
      company: "ONDA (Office National Des Aéroports)",
      role: "Développement web & gestion système",
      type: "Stage",
      period: "2023",
      description: "Contribution aux outils web internes et administration système. Immersion dans l'infrastructure réseau d'entreprise et les processus de déploiement sécurisés."
    },
    {
      company: "Telco Dev",
      role: "Développement Full-Stack & intégration API",
      type: "Stage",
      period: "2022",
      description: "Conception et intégration d'APIs REST. Développement de fonctionnalités frontend en React et contribution aux services backend Node.js pour une architecture microservices."
    }
  ];

  return (
    <section id="experience" className="w-full py-32 bg-background relative" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-20"
        >
          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
            <Briefcase className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">Expérience</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] top-4 bottom-4 w-px bg-border">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-primary origin-top"
              style={{ height: '100%', scaleY: lineScale }}
            />
          </div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-20 group"
              >
                {/* Node */}
                <div className="absolute left-[23px] top-6 w-2.5 h-2.5 rounded-full bg-background border border-primary group-hover:bg-primary transition-colors duration-300 z-10" />
                <div className="absolute left-[15px] top-[16px] w-[26px] h-[26px] rounded-full border border-primary/30 scale-0 group-hover:scale-100 transition-transform duration-500 z-0" />
                
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {exp.company}
                  </h3>
                  <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-card border border-border font-mono text-xs text-muted-foreground w-fit">
                    {exp.period}
                  </span>
                </div>
                
                <h4 className="text-lg font-display text-muted-foreground mb-4">
                  {exp.role} <span className="text-primary/50">|</span> <span className="text-foreground/60">{exp.type}</span>
                </h4>
                
                <div className="p-6 rounded-xl bg-card/50 border border-border/50 group-hover:border-primary/20 transition-colors duration-300 backdrop-blur-sm">
                  <p className="text-foreground/80 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

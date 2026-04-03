import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SiPython, SiReact, SiDocker, SiKubernetes, SiTypescript, SiOpenjdk } from "react-icons/si";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const techStack = [
    { icon: SiOpenjdk, name: "Java" },
    { icon: SiPython, name: "Python" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiReact, name: "React" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiKubernetes, name: "Kubernetes" }
  ];

  return (
    <section id="hero" className="w-full min-h-[100dvh] flex items-center justify-center pt-20 pb-16 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Recherche d'alternance DevOps/Cloud — Sept 2026
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6">
            Mohammed <br />
            <span className="text-gradient">Bennani</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-xl md:text-3xl text-muted-foreground font-display font-medium mb-8 max-w-2xl">
            Développeur Full-Stack <span className="text-primary/50">|</span> Étudiant Master EPSI Lille
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-muted-foreground/80 max-w-2xl mb-12 leading-relaxed">
            Ingénieur passionné à l'intersection du développement logiciel et de l'infrastructure cloud. Je conçois des systèmes robustes et scalables en alliant rigueur technique et compréhension des enjeux métier.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-16">
            {techStack.map((tech, i) => (
              <div 
                key={i} 
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-card border border-border hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
              >
                <tech.icon className="w-4 h-4 text-primary" />
                <span className="font-mono text-sm text-foreground/80">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}

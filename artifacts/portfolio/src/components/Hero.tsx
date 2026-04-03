import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { SiPython, SiReact, SiDocker, SiKubernetes, SiTypescript, SiOpenjdk } from "react-icons/si";
import profilePhoto from "@assets/WhatsApp_Image_2025-12-01_at_16.04.57_1775245543234.jpeg";

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
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
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

          {/* Left — text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 flex flex-col items-start"
          >
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-8">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Recherche d'alternance DevOps/Cloud — Sept 2026
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-4">
              Mohammed <br />
              <span className="text-gradient">Bennani</span>
            </motion.h1>

            <motion.h2 variants={itemVariants} className="text-lg md:text-2xl text-muted-foreground font-display font-medium mb-6 max-w-xl">
              Développeur Full-Stack <span className="text-primary/50">|</span> Étudiant Master EPSI Lille
            </motion.h2>

            <motion.p variants={itemVariants} className="text-base text-muted-foreground/80 max-w-xl mb-10 leading-relaxed">
              Ingénieur passionné à l'intersection du développement logiciel et de l'infrastructure cloud. Je conçois des systèmes robustes et scalables en alliant rigueur technique et compréhension des enjeux métier.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-card border border-border hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
                >
                  <tech.icon className="w-3.5 h-3.5 text-primary" />
                  <span className="font-mono text-xs text-foreground/80">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-110 pointer-events-none" />

              {/* Rotating dashed border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-3 rounded-full border border-dashed border-primary/30 pointer-events-none"
              />

              {/* Static solid ring */}
              <div className="absolute -inset-1.5 rounded-full border border-primary/40 pointer-events-none" />

              {/* Photo */}
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/50 shadow-[0_0_40px_rgba(6,182,212,0.2)]">
                <img
                  src={profilePhoto}
                  alt="Mohammed Bennani"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-profile"
                />
              </div>

              {/* Status badge */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-primary/30 text-xs font-mono text-primary whitespace-nowrap shadow-lg"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Disponible Sept 2026
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}

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
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Photo — pinned to the right edge */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute right-0 top-0 bottom-0 w-[26%] pointer-events-none select-none"
      >
        <div className="relative w-full h-full">
          <img
            src={profilePhoto}
            alt="Mohammed Bennani"
            className="absolute bottom-0 right-0 h-[78%] w-auto object-cover object-top"
            style={{ objectPosition: "top center" }}
            data-testid="img-profile"
          />
          {/* Fade left edge so photo blends into the background */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/20 to-transparent" />
          {/* Subtle cyan glow at the base */}
          <div className="absolute bottom-0 right-0 w-3/4 h-1/3 bg-primary/10 blur-[80px] pointer-events-none" />
        </div>

        {/* Status badge over the photo */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="absolute bottom-12 right-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/90 border border-primary/30 text-xs font-mono text-primary whitespace-nowrap shadow-lg backdrop-blur-sm pointer-events-auto"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Disponible Sept 2026
        </motion.div>
      </motion.div>

      {/* Text content — left side */}
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start max-w-xl lg:max-w-2xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-mono text-xs mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Recherche d'alternance DevOps/Cloud — Sept 2026
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6">
            Mohammed <br />
            <span className="text-gradient">Bennani</span>
          </motion.h1>

          <motion.h2 variants={itemVariants} className="text-lg md:text-2xl text-muted-foreground font-display font-medium mb-6 max-w-xl">
            Développeur Full-Stack <span className="text-primary/50">|</span> Étudiant Master EPSI Lille
          </motion.h2>

          <motion.p variants={itemVariants} className="text-base text-muted-foreground/80 max-w-lg mb-10 leading-relaxed">
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
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground z-10"
      >
        <span className="font-mono text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}

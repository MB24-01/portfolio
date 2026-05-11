import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import {
  SiPython,
  SiReact,
  SiDocker,
  SiKubernetes,
  SiTypescript,
  SiOpenjdk
} from "react-icons/si";

import profilePhoto from "@assets/WhatsApp_Image_2025-12-01_at_16.04.57_1775245543234.jpeg";

export function Hero() {
  const techStack = [
    { icon: SiOpenjdk, name: "Java" },
    { icon: SiPython, name: "Python" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiReact, name: "React" },
    { icon: SiDocker, name: "Docker" },
    { icon: SiKubernetes, name: "Kubernetes" }
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-28 pb-16"
    >
      {/* Glow */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div className="z-10 order-2 lg:order-1 text-center lg:text-left">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm mb-8">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
            Recherche d'alternance DevOps/Cloud — Sept 2026
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Mohammed <br />
            <span className="text-white">Bennani</span>
          </h1>

          <h2 className="text-xl md:text-3xl text-gray-300 mb-6">
            Développeur Full-Stack | Étudiant Master EPSI Lille
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10">
            Ingénieur passionné à l'intersection du développement logiciel et de l'infrastructure cloud.
            Je conçois des systèmes robustes et scalables en alliant rigueur technique
            et compréhension des enjeux métier.
          </p>

          {/* STACK */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {techStack.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-500/20 bg-black/30 backdrop-blur-sm"
              >
                <tech.icon className="text-cyan-400" />
                <span className="text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* PHOTO */}
        <div className="relative flex justify-center order-1 lg:order-2">

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full scale-110" />

            {/* Ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute -inset-4 border border-dashed border-cyan-400/40 rounded-full"
            />

            {/* Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-[0_0_60px_rgba(34,211,238,0.35)]">
              <img
                src={profilePhoto}
                alt="Mohammed Bennani"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Badge */}
            <div className="mt-6 flex justify-center">
              <div className="px-4 py-2 rounded-full border border-cyan-500/30 bg-black/40 text-cyan-400 text-sm">
                ● Disponible Sept 2026
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* SCROLL */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400">
        <span className="text-xs tracking-[0.3em] mb-2">SCROLL</span>
        <ArrowDown className="animate-bounce w-4 h-4" />
      </div>
    </section>
  );
}
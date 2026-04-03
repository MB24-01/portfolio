import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Layers, Github, ExternalLink } from "lucide-react";
import { SiReact, SiNodedotjs, SiPython, SiTypescript, SiTailwindcss, SiMysql, SiFlask, SiDocker, SiFirebase, SiJavascript } from "react-icons/si";

const personalProjects = [
  {
    title: "DevTracker",
    category: "Productivité",
    description: "Application de suivi de progression pour développeurs. Gestion de tâches, journaux quotidiens, statistiques d'activité et objectifs hebdomadaires. Interface inspirée des outils CLI.",
    tech: [
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiNodedotjs, name: "Node.js" },
      { icon: SiMysql, name: "MySQL" }
    ],
    color: "from-cyan-500/10 to-blue-500/10",
    accent: "text-cyan-400",
    border: "border-cyan-500/20 hover:border-cyan-500/50"
  },
  {
    title: "BudgetFlow",
    category: "Finance Personnelle",
    description: "Outil de gestion budgétaire avec visualisation graphique des dépenses, catégorisation automatique et alertes de seuil. Export PDF des rapports mensuels.",
    tech: [
      { icon: SiReact, name: "React" },
      { icon: SiJavascript, name: "JavaScript" },
      { icon: SiTailwindcss, name: "Tailwind" },
      { icon: SiFirebase, name: "Firebase" }
    ],
    color: "from-emerald-500/10 to-teal-500/10",
    accent: "text-emerald-400",
    border: "border-emerald-500/20 hover:border-emerald-500/50"
  },
  {
    title: "NoteAPI",
    category: "Backend / API REST",
    description: "API RESTful complète de gestion de notes avec authentification JWT, partage de notes, versioning et recherche full-text. Documentée avec Swagger.",
    tech: [
      { icon: SiPython, name: "Python" },
      { icon: SiFlask, name: "Flask" },
      { icon: SiMysql, name: "MySQL" },
      { icon: SiDocker, name: "Docker" }
    ],
    color: "from-violet-500/10 to-purple-500/10",
    accent: "text-violet-400",
    border: "border-violet-500/20 hover:border-violet-500/50"
  },
  {
    title: "WeatherBoard",
    category: "Dashboard / UI",
    description: "Dashboard météo en temps réel avec cartes interactives, historique des prévisions et alertes géolocalisées. Intégration d'APIs externes et mode hors-ligne.",
    tech: [
      { icon: SiReact, name: "React" },
      { icon: SiTypescript, name: "TypeScript" },
      { icon: SiTailwindcss, name: "Tailwind" }
    ],
    color: "from-orange-500/10 to-amber-500/10",
    accent: "text-orange-400",
    border: "border-orange-500/20 hover:border-orange-500/50"
  },
  {
    title: "CLI Deploy Tool",
    category: "DevOps / Tooling",
    description: "Outil en ligne de commande pour automatiser les déploiements Docker. Gestion des environnements, rollback automatique et notifications Slack sur les événements de déploiement.",
    tech: [
      { icon: SiPython, name: "Python" },
      { icon: SiDocker, name: "Docker" }
    ],
    color: "from-red-500/10 to-rose-500/10",
    accent: "text-red-400",
    border: "border-red-500/20 hover:border-red-500/50"
  }
];

export function PersonalProjects() {
  const [current, setCurrent] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const total = personalProjects.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(false);
    startX.current = e.clientX;
  };
  const onMouseUp = (e: React.MouseEvent) => {
    const diff = e.clientX - startX.current;
    if (Math.abs(diff) > 40) {
      diff < 0 ? next() : prev();
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(diff) > 40) {
      diff < 0 ? next() : prev();
    }
  };

  return (
    <section id="personal-projects" className="w-full py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center justify-between mb-12"
        >
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
              <Layers className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Projets Personnels</h2>
              <p className="text-muted-foreground text-sm mt-1 font-mono">Side-projects & explorations techniques</p>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={prev}
              className="p-2.5 rounded-full bg-card border border-border hover:border-primary/50 hover:text-primary transition-all duration-200"
              aria-label="Projet précédent"
              data-testid="btn-prev-project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="font-mono text-xs text-muted-foreground w-12 text-center">
              {current + 1} / {total}
            </span>
            <button
              onClick={next}
              className="p-2.5 rounded-full bg-card border border-border hover:border-primary/50 hover:text-primary transition-all duration-200"
              aria-label="Projet suivant"
              data-testid="btn-next-project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          ref={trackRef}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="relative cursor-grab active:cursor-grabbing select-none"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[-1, 0, 1].map((offset) => {
              const idx = (current + offset + total) % total;
              const project = personalProjects[idx];
              const isCenter = offset === 0;

              return (
                <motion.div
                  key={`${idx}-${offset}`}
                  animate={{
                    scale: isCenter ? 1 : 0.92,
                    opacity: isCenter ? 1 : 0.5
                  }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative rounded-2xl border bg-card p-6 md:p-8 transition-all duration-300 ${project.border} ${isCenter ? "shadow-2xl" : ""}`}
                  data-testid={`card-personal-project-${idx}`}
                >
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} pointer-events-none`} />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-5">
                      <div>
                        <span className={`font-mono text-xs uppercase tracking-wider ${project.accent}`}>
                          {project.category}
                        </span>
                        <h3 className="text-xl font-bold mt-1">{project.title}</h3>
                      </div>
                      {isCenter && (
                        <div className="flex gap-2">
                          <button
                            className="p-2 rounded-full bg-background/60 border border-border hover:text-primary hover:border-primary/50 transition-all"
                            data-testid={`btn-github-${idx}`}
                          >
                            <Github className="w-4 h-4" />
                          </button>
                          <button
                            className="p-2 rounded-full bg-background/60 border border-border hover:text-primary hover:border-primary/50 transition-all"
                            data-testid={`btn-link-${idx}`}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1.5 px-2.5 py-1 bg-background/60 rounded-md border border-border/50 text-muted-foreground"
                        >
                          <t.icon className="w-3 h-3" />
                          <span className="font-mono text-xs">{t.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        <div className="flex items-center justify-center gap-3 mt-8 sm:hidden">
          <button
            onClick={prev}
            className="p-2.5 rounded-full bg-card border border-border hover:border-primary/50 hover:text-primary transition-all"
            data-testid="btn-prev-project-mobile"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {personalProjects.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-6" : "bg-border"}`}
                data-testid={`dot-project-${i}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="p-2.5 rounded-full bg-card border border-border hover:border-primary/50 hover:text-primary transition-all"
            data-testid="btn-next-project-mobile"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="hidden sm:flex justify-center gap-2 mt-8"
        >
          {personalProjects.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? "bg-primary w-8" : "bg-border w-4 hover:bg-primary/40"}`}
              data-testid={`dot-project-desktop-${i}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

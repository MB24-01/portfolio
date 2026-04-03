import { motion } from "framer-motion";
import { FolderGit2, ExternalLink, Github } from "lucide-react";
import { SiReact, SiExpress, SiNodedotjs, SiMongodb, SiSocketdotio, SiPython, SiFastapi, SiPostgresql, SiDocker, SiKubernetes, SiGooglecloud, SiJsonwebtokens, SiCypress } from "react-icons/si";

export function Projects() {
  const projects = [
    {
      title: "Pandemic Data Platform",
      tagline: "When lives depend on data quality, engineering rigor isn't optional.",
      role: "Infrastructure de données pour la surveillance épidémiologique",
      description: "Architecture complète type 'Mission OMS' pour l'ingestion, le traitement et l'analyse de données de santé critiques. Pipeline ETL robuste, authentification par JWT avec hashage SHA-3, et déploiement Kubernetes sur GKE garantissant haute disponibilité et tolérance aux pannes. Tests e2e complets avec Cypress intégrés dans la CI/CD.",
      tech: [
        { icon: SiPython, name: "Python" },
        { icon: SiFastapi, name: "FastAPI" },
        { icon: SiPostgresql, name: "PostgreSQL" },
        { icon: SiDocker, name: "Docker" },
        { icon: SiKubernetes, name: "Kubernetes" },
        { icon: SiGooglecloud, name: "GKE" },
        { icon: SiJsonwebtokens, name: "JWT" },
        { icon: SiCypress, name: "Cypress" }
      ],
      featured: true
    },
    {
      title: "VerseLink",
      tagline: "Linkedin meets SoundCloud — but built by an engineer who understood the problem.",
      role: "La plateforme de networking pour l'industrie musicale",
      description: "Une solution architecturée pour combler le manque d'espaces professionnels dédiés aux acteurs de la musique. Intègre un moteur de collaboration temps réel, un système de 'Lyrics Cards' pour la création d'artworks personnalisés, et une curation communautaire basée sur les votes.",
      tech: [
        { icon: SiReact, name: "React" },
        { icon: SiExpress, name: "Express" },
        { icon: SiNodedotjs, name: "Node.js" },
        { icon: SiMongodb, name: "MongoDB" },
        { icon: SiSocketdotio, name: "Socket.io" }
      ],
      featured: true
    }
  ];

  return (
    <section id="projects" className="w-full py-32 bg-card/30 relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-20"
        >
          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
            <FolderGit2 className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">Projets Majeurs</h2>
        </motion.div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center group"
            >
              <div className={`w-full lg:w-1/2 flex flex-col ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="mb-4">
                  <span className="font-mono text-primary text-sm tracking-wider uppercase">Project {index + 1}</span>
                  <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-3">{project.title}</h3>
                  <p className="text-lg text-foreground/80 font-display italic">"{project.tagline}"</p>
                </div>
                
                <div className="p-6 md:p-8 rounded-xl bg-background border border-border group-hover:border-primary/30 transition-colors duration-500 shadow-xl relative z-10 -ml-4 lg:-ml-8 mr-4 lg:-mr-8 my-6">
                  <h4 className="text-sm font-bold text-foreground mb-3">{project.role}</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((t, i) => (
                    <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-card rounded-md border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors">
                      <t.icon className="w-3.5 h-3.5" />
                      <span className="font-mono text-xs">{t.name}</span>
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="p-2 rounded-full bg-card border border-border hover:text-primary hover:border-primary/50 transition-all">
                    <Github className="w-5 h-5" />
                  </button>
                  <button className="p-2 rounded-full bg-card border border-border hover:text-primary hover:border-primary/50 transition-all">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className={`w-full lg:w-1/2 aspect-video rounded-xl overflow-hidden border border-border/50 bg-card relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-700 z-10" />
                <div className="absolute inset-0 flex items-center justify-center bg-background/50 backdrop-blur-[2px]">
                  <span className="font-mono text-primary/50 text-sm border border-primary/20 px-4 py-2 rounded">
                    [Architecture Visualization]
                  </span>
                </div>
                {/* Decorative code elements */}
                <div className="absolute top-4 left-4 flex gap-2 z-20">
                  <div className="w-3 h-3 rounded-full bg-destructive/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

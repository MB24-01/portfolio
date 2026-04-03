import { motion } from "framer-motion";
import { TerminalSquare, Server, Layout, Database, Cloud, TestTube } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      featured: true,
      skills: [
        { name: "Docker", level: 90 },
        { name: "Kubernetes", level: 85 },
        { name: "GKE", level: 80 },
        { name: "CI/CD", level: 85 },
        { name: "Linux", level: 90 },
        { name: "Nginx", level: 75 }
      ]
    },
    {
      title: "Backend",
      icon: Server,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "FastAPI", level: 80 },
        { name: "Spring Boot", level: 75 },
        { name: "Express", level: 85 }
      ]
    },
    {
      title: "Langages",
      icon: TerminalSquare,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "SQL", level: 80 },
        { name: "C", level: 70 }
      ]
    },
    {
      title: "Frontend",
      icon: Layout,
      skills: [
        { name: "React", level: 85 },
        { name: "Tailwind CSS", level: 90 },
        { name: "Vite", level: 80 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 85 }
      ]
    },
    {
      title: "Testing & Quality",
      icon: TestTube,
      skills: [
        { name: "Cypress", level: 80 },
        { name: "Jest", level: 85 },
        { name: "JUnit", level: 75 }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="skills" className="w-full py-32 bg-background relative">
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
            <TerminalSquare className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold">Compétences</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((cat, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className={`p-6 rounded-xl border ${cat.featured ? 'bg-primary/5 border-primary/40 shadow-[0_0_30px_-10px_rgba(6,182,212,0.3)]' : 'bg-card border-border'} relative overflow-hidden group`}
            >
              {cat.featured && (
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2" />
              )}
              
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-md ${cat.featured ? 'bg-primary/20 text-primary' : 'bg-background text-muted-foreground'}`}>
                  <cat.icon className="w-5 h-5" />
                </div>
                <h3 className={`text-xl font-bold ${cat.featured ? 'text-foreground' : 'text-foreground/80'}`}>
                  {cat.title}
                </h3>
              </div>

              <div className="space-y-4">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="space-y-1.5">
                    <div className="flex justify-between items-center text-sm font-mono">
                      <span className="text-muted-foreground group-hover:text-foreground/90 transition-colors">{skill.name}</span>
                      <span className="text-primary/60">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 w-full bg-background rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + (sIdx * 0.1) }}
                        className={`h-full rounded-full ${cat.featured ? 'bg-primary' : 'bg-primary/50'}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, ChevronRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="w-full py-32 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border font-mono text-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          Disponible pour septembre 2026
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Prêt à construire ensemble ?
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-muted-foreground font-display max-w-2xl mx-auto mb-12"
        >
          Je recherche activement une alternance en DevOps / Cloud pour ma deuxième année de Master (Septembre 2026). Si mon profil correspond à vos besoins, n'hésitez pas à me contacter.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a 
            href="mailto:contact@example.com" 
            className="flex items-center gap-2 px-8 py-4 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors w-full sm:w-auto justify-center group"
          >
            <Mail className="w-5 h-5" />
            <span>M'envoyer un email</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <div className="flex items-center gap-4 w-full sm:w-auto justify-center">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-md bg-card border border-border hover:border-primary/50 hover:text-primary transition-colors flex items-center justify-center"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 rounded-md bg-card border border-border hover:border-primary/50 hover:text-primary transition-colors flex items-center justify-center"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

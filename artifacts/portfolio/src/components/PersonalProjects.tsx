import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Layers,
  Github,
  ExternalLink,
  Music,
  Users,
  Vote,
  BookOpen,
  CreditCard,
  Image as ImageIcon,
} from "lucide-react";
import { SiReact, SiNodedotjs, SiMongodb, SiSocketdotio, SiExpress, SiTypescript } from "react-icons/si";

import screenshotHome1 from "@assets/WhatsApp_Image_2025-11-17_at_20.53.20_(1)_1775244949186.jpeg";
import screenshotHome2 from "@assets/WhatsApp_Image_2025-11-17_at_20.53.20_(2)_1775244949186.jpeg";
import screenshotArtists from "@assets/WhatsApp_Image_2025-11-17_at_20.53.20_(3)_1775244949186.jpeg";
import screenshotVoting from "@assets/WhatsApp_Image_2025-11-17_at_20.53.20_(4)_1775244949186.jpeg";
import screenshotAlbums1 from "@assets/WhatsApp_Image_2025-11-17_at_20.53.20_1775244949187.jpeg";
import screenshotAlbums2 from "@assets/WhatsApp_Image_2025-11-17_at_20.53.21_(1)_1775244949187.jpeg";
import screenshotCardMaker from "@assets/WhatsApp_Image_2025-11-17_at_20.53.21_(2)_1775244949187.jpeg";
import screenshotSong from "@assets/WhatsApp_Image_2025-11-17_at_20.53.21_1775244949187.jpeg";
import screenshotBlog from "@assets/WhatsApp_Image_2025-11-17_at_20.53.25_1775244949187.jpeg";

const screenshots = [
  { src: screenshotHome1, label: "Accueil — Mode Clair", icon: Music },
  { src: screenshotHome2, label: "Accueil — Mode Sombre", icon: Music },
  { src: screenshotArtists, label: "Artistes", icon: Users },
  { src: screenshotAlbums1, label: "Albums", icon: Music },
  { src: screenshotAlbums2, label: "Albums — Dark", icon: Music },
  { src: screenshotVoting, label: "Système de Vote", icon: Vote },
  { src: screenshotCardMaker, label: "Card Maker", icon: CreditCard },
  { src: screenshotSong, label: "Paroles & Lyrics", icon: BookOpen },
  { src: screenshotBlog, label: "Artist Blog", icon: ImageIcon },
];

const features = [
  { icon: Users, label: "Artistes & Albums", desc: "Découvrez des artistes, explorez leurs discographies et suivez les nouvelles sorties" },
  { icon: CreditCard, label: "Lyrics Card Maker", desc: "Créez des visuels personnalisés à partir de vos paroles préférées — multiple templates" },
  { icon: Vote, label: "Système de Vote", desc: "Votez pour vos songs, albums et artistes favoris — 2 votes max par catégorie" },
  { icon: BookOpen, label: "Artist Blog", desc: "Les artistes publient leurs stories, insights et actualités directement sur la plateforme" },
];

const techStack = [
  { icon: SiReact, name: "React" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiSocketdotio, name: "Socket.io" },
  { icon: SiTypescript, name: "TypeScript" },
];

export function PersonalProjects() {
  const [activeShot, setActiveShot] = useState(0);
  const startX = useRef(0);

  const prev = () => setActiveShot((c) => (c - 1 + screenshots.length) % screenshots.length);
  const next = () => setActiveShot((c) => (c + 1) % screenshots.length);

  const onTouchStart = (e: React.TouchEvent) => { startX.current = e.touches[0].clientX; };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(diff) > 40) diff < 0 ? next() : prev();
  };
  const onMouseDown = (e: React.MouseEvent) => { startX.current = e.clientX; };
  const onMouseUp = (e: React.MouseEvent) => {
    const diff = e.clientX - startX.current;
    if (Math.abs(diff) > 40) diff < 0 ? next() : prev();
  };

  return (
    <section id="personal-projects" className="w-full py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex items-center gap-4 mb-16"
        >
          <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
            <Layers className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold">Projet Perso</h2>
            <p className="text-muted-foreground text-sm mt-1 font-mono">Side-project — de l'idée au produit</p>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left — project info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 font-mono text-xs mb-6">
              <Music className="w-3.5 h-3.5" />
              Plateforme Musicale
            </div>

            <h3 className="text-4xl md:text-5xl font-bold mb-2">VerseLink</h3>
            <p className="text-muted-foreground italic text-lg mb-6 font-display">
              "Your Ultimate Music & Lyrics Destination"
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              J'ai identifié un manque dans l'écosystème musical marocain : les artistes, fans et
              créateurs n'avaient pas de plateforme unifiée pour découvrir la musique, interagir
              avec les paroles et créer du contenu visuel. VerseLink est ma réponse — une plateforme
              full-stack alliant Genius, Spotify et un outil créatif en une seule expérience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {features.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors duration-300 group"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <f.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold">{f.label}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {techStack.map((t, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-card rounded-md border border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                >
                  <t.icon className="w-3.5 h-3.5" />
                  <span className="font-mono text-xs">{t.name}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-primary/50 hover:text-primary transition-all text-sm font-mono"
                data-testid="btn-verselink-github"
              >
                <Github className="w-4 h-4" />
                GitHub
              </button>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-all text-sm font-mono"
                data-testid="btn-verselink-live"
              >
                <ExternalLink className="w-4 h-4" />
                Voir le projet
              </button>
            </div>
          </motion.div>

          {/* Right — screenshot gallery */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            {/* Main screenshot */}
            <div
              className="relative rounded-2xl overflow-hidden border border-border/60 bg-card aspect-video cursor-grab active:cursor-grabbing shadow-2xl"
              onMouseDown={onMouseDown}
              onMouseUp={onMouseUp}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              data-testid="gallery-main"
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeShot}
                  src={screenshots[activeShot].src}
                  alt={screenshots[activeShot].label}
                  className="w-full h-full object-cover object-top select-none"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  draggable={false}
                />
              </AnimatePresence>

              {/* Label overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between">
                <span className="font-mono text-xs text-white/80">
                  {screenshots[activeShot].label}
                </span>
                <span className="font-mono text-xs text-white/40">
                  {activeShot + 1} / {screenshots.length}
                </span>
              </div>

              {/* Nav arrows */}
              <button
                onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all backdrop-blur-sm"
                data-testid="btn-gallery-prev"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-all backdrop-blur-sm"
                data-testid="btn-gallery-next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Thumbnail strip */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {screenshots.map((shot, i) => (
                <button
                  key={i}
                  onClick={() => setActiveShot(i)}
                  className={`relative flex-shrink-0 w-16 h-10 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                    i === activeShot
                      ? "border-primary shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                      : "border-border/40 opacity-50 hover:opacity-80 hover:border-border"
                  }`}
                  data-testid={`btn-thumb-${i}`}
                >
                  <img
                    src={shot.src}
                    alt={shot.label}
                    className="w-full h-full object-cover object-top"
                    draggable={false}
                  />
                </button>
              ))}
            </div>

            {/* Dot nav */}
            <div className="flex justify-center gap-1.5 mt-1">
              {screenshots.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveShot(i)}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === activeShot ? "bg-primary w-6" : "bg-border w-3 hover:bg-primary/40"
                  }`}
                  data-testid={`dot-gallery-${i}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

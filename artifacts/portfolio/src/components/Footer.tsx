import { Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full py-8 border-t border-border/40 bg-background">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Terminal className="w-4 h-4" />
          <span className="font-mono text-sm">© {new Date().getFullYear()} Mohammed Bennani</span>
        </div>
        
        <div className="text-sm font-mono text-muted-foreground/60">
          Designed & Built with precision.
        </div>
      </div>
    </footer>
  );
}

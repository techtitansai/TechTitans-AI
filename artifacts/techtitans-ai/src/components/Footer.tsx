import { Twitter, Instagram, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-display font-bold text-lg">T</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-white">
                TechTitans <span className="text-gradient">AI</span>
              </span>
            </a>
            <p className="text-foreground-muted max-w-sm mb-6">
              Empowering brands with cutting-edge digital solutions. We turn your vision into a stunning digital reality.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground-muted hover:text-primary hover:border-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground-muted hover:text-pink-500 hover:border-pink-500 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground-muted hover:text-blue-500 hover:border-blue-500 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-foreground-muted hover:text-white hover:border-white transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-display font-bold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-foreground-muted hover:text-primary transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-foreground-muted hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#" className="text-foreground-muted hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-foreground-muted hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-display font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-foreground-muted hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-foreground-muted hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-foreground-muted hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-foreground-muted/60 text-sm">
            © {new Date().getFullYear()} TechTitans AI. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm text-foreground-muted/60">Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { PenTool, Video, Layout, Code } from "lucide-react";
import { FadeIn } from "./ui/fade-in";

const services = [
  {
    title: "Branding",
    description: "Create an unforgettable identity that resonates with your audience and establishes market authority.",
    icon: PenTool,
    color: "from-purple-500 to-indigo-500",
    delay: 0.1
  },
  {
    title: "Video Editing",
    description: "Cinematic, high-retention video content designed for modern platforms and audience engagement.",
    icon: Video,
    color: "from-pink-500 to-rose-500",
    delay: 0.2
  },
  {
    title: "Graphic Design",
    description: "Stunning visuals, marketing assets, and ad creatives that convert attention into action.",
    icon: Layout,
    color: "from-amber-500 to-orange-500",
    delay: 0.3
  },
  {
    title: "Web Development",
    description: "Blazing fast, perfectly responsive, and beautifully animated websites that drive results.",
    icon: Code,
    color: "from-primary to-accent",
    delay: 0.4
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            What We <span className="text-gradient">Do</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto">
            Comprehensive digital solutions designed to elevate your brand and scale your business in the modern landscape.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={service.delay}>
              <div className="glass-card glow-border group rounded-3xl p-8 lg:p-10 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                  <service.icon className="w-7 h-7 text-white relative z-10" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/70 transition-all">
                  {service.title}
                </h3>
                <p className="text-foreground-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

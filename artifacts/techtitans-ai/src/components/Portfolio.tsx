import { FadeIn } from "./ui/fade-in";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Aura Fintech",
    category: "Web Development",
    // portfolio modern fintech app dashboard purple blue glow
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    delay: 0.1
  },
  {
    title: "Neon Dynamics",
    category: "Branding",
    // portfolio abstract neon futuristic lighting
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
    delay: 0.2
  },
  {
    title: "Pulse Energy",
    category: "Video Editing",
    // portfolio creative video production desk setup
    image: "https://images.unsplash.com/photo-1535016120720-40c746a5024b?w=800&q=80",
    delay: 0.3
  },
  {
    title: "Vertex AI",
    category: "Graphic Design",
    // portfolio modern 3d abstract network nodes
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    delay: 0.4
  },
  {
    title: "Lumina Lifestyle",
    category: "Web & Branding",
    // portfolio elegant minimal typography fashion
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    delay: 0.5
  },
  {
    title: "Quantum VR",
    category: "Complete Package",
    // portfolio virtual reality abstract digital waves
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    delay: 0.6
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 relative bg-surface/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
              Our <span className="text-gradient">Work</span>
            </h2>
            <p className="text-foreground-muted max-w-xl">
              A selection of our latest projects. We push the boundaries of design and technology to deliver outstanding results.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} direction="left">
            <button className="text-white font-medium inline-flex items-center gap-2 hover:text-primary transition-colors group">
              View All Projects 
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={project.delay}>
              <div className="group relative rounded-3xl overflow-hidden glass-card aspect-[4/3] cursor-pointer">
                {/* Image Background */}
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Hover Gradient Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-accent/40 opacity-0 group-hover:opacity-30 mix-blend-overlay transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="text-accent text-sm font-semibold mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {project.category}
                    </div>
                    <h3 className="text-2xl font-display font-bold text-white flex items-center justify-between">
                      {project.title}
                      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 -rotate-45 group-hover:rotate-0 transition-all duration-500">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </h3>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'A full-stack e-commerce solution with real-time inventory and secure payments.',
    image: 'https://picsum.photos/seed/shop/800/600',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: '#',
    demo: '#',
    className: 'md:col-span-2 md:row-span-2'
  },
  {
    title: 'Task Manager',
    desc: 'Collaborative task management tool with drag-and-drop features.',
    image: 'https://picsum.photos/seed/task/800/600',
    tags: ['Next.js', 'Tailwind'],
    github: '#',
    demo: '#',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'AI Image Gen',
    desc: 'Generate stunning images using AI models and custom prompts.',
    image: 'https://picsum.photos/seed/ai/800/600',
    tags: ['Python', 'React'],
    github: '#',
    demo: '#',
    className: 'md:col-span-1 md:row-span-1'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
              My Work
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white">
              Featured <span className="text-accent-secondary">Projects</span>
            </h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bento-card group overflow-hidden p-0 ${project.className}`}
            >
              <div className="relative h-full flex flex-col">
                <div className="relative aspect-video md:aspect-auto md:flex-1 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent" />
                </div>
                
                <div className="p-8 relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-accent-secondary uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href={project.github} className="text-white hover:text-accent-secondary transition-colors">
                        <Github size={20} />
                      </a>
                      <a href={project.demo} className="text-white hover:text-accent-secondary transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

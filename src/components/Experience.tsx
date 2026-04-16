import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Tech Mahindra',
    role: 'Software Developer Intern',
    period: '2024 - Present',
    location: 'Pune, India',
    desc: 'Working on frontend development using React and modern web technologies. Contributing to enterprise-level applications and collaborating with cross-functional teams.',
    tags: ['React', 'JavaScript', 'UI/UX']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
              Career Path
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white">
              Professional <span className="text-accent-secondary">Experience</span>
            </h3>
          </div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bento-card relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-secondary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-accent-secondary/10 transition-colors" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-secondary">
                    <Briefcase size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-accent-secondary font-medium">{exp.company}</p>
                  </div>
                </div>
                
                <div className="flex flex-col md:items-end gap-2 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 grid md:grid-cols-12 gap-8">
                <div className="md:col-span-8">
                  <p className="text-slate-400 leading-relaxed">
                    {exp.desc}
                  </p>
                </div>
                <div className="md:col-span-4 flex flex-wrap gap-2 content-start">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

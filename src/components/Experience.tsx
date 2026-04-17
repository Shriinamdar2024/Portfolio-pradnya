import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Tech Mahindra',
    logo: 'https://res.cloudinary.com/dn19hommj/image/upload/v1776405713/WhatsApp_Image_2026-04-17_at_10.48.39_AM_vzctj9.jpg',
    role: 'Software Developer Intern',
    period: 'jan 11 2026 - Present',
    location: 'Pune, India',
    desc: 'Working on frontend development using React and modern web technologies. Contributing to enterprise-level applications and collaborating with cross-functional teams.',
    tags: ['React', 'JavaScript', 'UI/UX']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
            Career Path
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">
            Professional <span className="text-accent-secondary">Experience</span>
          </h3>
        </div>

        <div className="relative">
          {/* Vertical Timeline Line with Drawing Animation */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2 overflow-hidden">
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-full bg-gradient-to-b from-accent-secondary via-accent-secondary/50 to-transparent"
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot with Pulse */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, delay: i * 0.2 }}
                  className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-accent-secondary z-20 md:-translate-x-1/2 border-4 border-bg"
                >
                  <div className="absolute inset-0 rounded-full bg-accent-secondary animate-ping opacity-20" />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="w-full md:w-[45%] ml-8 md:ml-0"
                >
                  <div className="bento-card group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-secondary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-accent-secondary/10 transition-colors" />

                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden p-2 shrink-0">
                        {exp.logo ? (
                          <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain filter brightness-110" referrerPolicy="no-referrer" />
                        ) : (
                          <Briefcase size={24} className="text-accent-secondary" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white leading-tight">{exp.role}</h3>
                        <p className="text-accent-secondary text-sm font-medium">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 mb-6 text-xs text-slate-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-accent-secondary" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin size={14} className="text-accent-secondary" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <p className="text-sm text-slate-400 leading-relaxed mb-6">
                      {exp.desc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Date Visualization for Desktop */}
                <div className={`hidden md:block w-[45%] text-sm font-bold uppercase tracking-[0.3em] text-slate-600 relative z-10 ${i % 2 === 0 ? 'text-right pr-6' : 'text-left pl-6'}`}>
                  <span className="bg-[#020617] px-3 py-1 rounded-md">
                    {exp.period}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

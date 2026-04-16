import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Application (MCA)',
    college: 'Institute of Industrial & Computer Management & Research (IICMR), Pune',
    university: 'Savitribai Phule Pune University',
    year: '2024 - 2026',
    location: 'Pune, India',
    desc: 'Currently pursuing MCA with a focus on advanced computing and software development. Maintaining a strong SGPA of 8.32.',
    grade: 'SGPA: 8.32'
  },
  {
    degree: 'Bachelor of Computer Application (BCA)',
    college: 'Vasantrao Dada Patil Institute of Management Studies and Research (VPIMM), Miraj',
    university: 'Shivaji University, Kolhapur',
    year: '2021 - 2024',
    location: 'Miraj, India',
    desc: 'Completed BCA with distinction. Developed a strong foundation in programming, databases, and web technologies.',
    grade: 'CGPA: 7.81'
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    college: 'Science Stream',
    university: 'Maharashtra State Board',
    year: '2021',
    location: 'Maharashtra, India',
    desc: 'Focused on Physics, Chemistry, and Biology.',
    grade: '77.83%'
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    college: 'General Education',
    university: 'Maharashtra State Board',
    year: '2019',
    location: 'Maharashtra, India',
    desc: 'Completed secondary education with consistent academic performance.',
    grade: '73.20%'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
              Academic History
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white">
              Educational <span className="text-accent-tertiary">Background</span>
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bento-card group"
            >
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-accent-tertiary group-hover:rotate-12 transition-transform">
                  <GraduationCap size={28} />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-accent-tertiary/10 border border-accent-tertiary/20 text-accent-tertiary text-[10px] font-bold">
                  <Award size={12} />
                  {edu.grade}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
              <p className="text-accent-tertiary text-sm font-medium mb-4">{edu.college}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar size={14} />
                  <span>{edu.year}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <MapPin size={14} />
                  <span>{edu.location}</span>
                </div>
              </div>
              
              <p className="text-xs text-slate-400 leading-relaxed">
                {edu.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

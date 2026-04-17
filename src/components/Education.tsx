import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const education = [
  {
    degree: 'Master of Computer Application (MCA)',
    college: 'Institute of Industrial & Computer Management & Research (IICMR), Pune',
    logo: 'https://res.cloudinary.com/dn19hommj/image/upload/v1776405712/WhatsApp_Image_2026-04-17_at_10.49.22_AM_kooaw6.jpg',
    university: 'Savitribai Phule Pune University',
    year: '2024 - Present(2026)',
    location: 'Pune, India',
    desc: 'Currently pursuing MCA with a focus on advanced computing and software development. Maintaining a strong SGPA of 8.32.',
    grade: 'SGPA: 8.32'
  },
  {
    degree: 'Bachelor of Computer Application (BCA)',
    college: 'Vasantrao Dada Patil Institute of Management Studies and Research (VPIMM), Miraj',
    logo: 'https://res.cloudinary.com/dn19hommj/image/upload/v1776405713/WhatsApp_Image_2026-04-17_at_10.50.47_AM_luzgmq.jpg',
    university: 'Shivaji University, Kolhapur',
    year: '2021 - 2024',
    location: 'Miraj, India',
    desc: 'Completed BCA with distinction. Developed a strong foundation in programming, databases, and web technologies.',
    grade: 'CGPA: 7.81'
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    college: 'Science Stream',
    logo: 'https://res.cloudinary.com/dn19hommj/image/upload/v1776405714/MHS_poyskg.jpg',
    university: 'Maharashtra State Board',
    year: '2021',
    location: 'Maharashtra, India',
    desc: 'Focused on Physics, Chemistry, and Biology.',
    grade: '77.83%'
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    college: 'General Education',
    logo: 'https://res.cloudinary.com/dn19hommj/image/upload/v1776405714/MHS_poyskg.jpg',
    university: 'Maharashtra State Board',
    year: '2019',
    location: 'Maharashtra, India',
    desc: 'Completed secondary education with consistent academic performance.',
    grade: '73.20%'
  }
];

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
            Academic History
          </h2>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white">
            Educational <span className="text-accent-tertiary">Background</span>
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
              className="w-full bg-gradient-to-b from-accent-tertiary via-accent-tertiary/50 to-transparent"
            />
          </div>

          <div className="space-y-12">
            {education.map((edu, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline Dot with Pulse */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, delay: i * 0.2 }}
                  className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-accent-tertiary z-20 md:-translate-x-1/2 border-4 border-bg"
                >
                  <div className="absolute inset-0 rounded-full bg-accent-tertiary animate-ping opacity-20" />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  initial={{ opacity: 0, x: i % 2 !== 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="w-full md:w-[45%] ml-8 md:ml-0"
                >
                  <div className="bento-card group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-tertiary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-accent-tertiary/10 transition-colors" />

                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden p-2 shrink-0 group-hover:rotate-6 transition-transform">
                          {edu.logo ? (
                            <img src={edu.logo} alt={edu.college} className="w-full h-full object-contain filter brightness-110" referrerPolicy="no-referrer" />
                          ) : (
                            <GraduationCap size={24} className="text-accent-tertiary" />
                          )}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white leading-tight">{edu.degree}</h3>
                          <p className="text-accent-tertiary text-xs font-medium mt-1">{edu.college}</p>
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-accent-tertiary/10 border border-accent-tertiary/20 text-accent-tertiary text-[9px] font-bold shrink-0">
                        <Award size={10} />
                        {edu.grade}
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <Calendar size={14} className="text-accent-tertiary" />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-500">
                        <MapPin size={14} className="text-accent-tertiary" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-400 leading-relaxed">
                      {edu.desc}
                    </p>
                  </div>
                </motion.div>

                {/* Date Visualization for Desktop */}
                <div className={`hidden md:block w-[45%] text-sm font-bold uppercase tracking-[0.3em] text-slate-600 relative z-10 ${i % 2 !== 0 ? 'text-right pr-6' : 'text-left pl-6'}`}>
                  <span className="bg-[#020617] px-3 py-1 rounded-md">
                    {edu.year}
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
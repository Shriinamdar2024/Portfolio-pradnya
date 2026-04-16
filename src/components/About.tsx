import { motion } from 'motion/react';
import { User, Code, Heart, Target, Coffee, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main About Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bento-card relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32" />
            
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
              The Developer
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-8">
              About <span className="text-accent">Me</span>
            </h3>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              I am a dedicated <span className="text-white font-semibold">Software Developer</span> with a strong foundation in the MERN stack. 
              My journey in web development is driven by a passion for creating seamless, 
              interactive experiences that solve real-world problems.
            </p>
            <p className="text-slate-400 mb-10 leading-relaxed">
              Currently pursuing my <span className="text-accent-secondary">MCA from IICMR, Pune</span>, I am constantly 
              exploring new technologies and refining my skills in frontend and backend development.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: <Code size={20} />, label: 'Clean Code' },
                { icon: <Zap size={20} />, label: 'Performance' },
                { icon: <Coffee size={20} />, label: 'Dedication' },
                { icon: <Target size={20} />, label: 'Precision' },
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-accent">{item.icon}</div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats/Quick Info Cards */}
          <div className="lg:col-span-4 grid gap-8">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bento-card bg-accent/10 border-accent/20"
            >
              <h4 className="text-xl font-bold text-white mb-4">Philosophy</h4>
              <p className="text-sm text-slate-300 italic leading-relaxed">
                "Code is not just about instructions for machines; it's about crafting experiences for humans."
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bento-card"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent-secondary/20 flex items-center justify-center text-accent-secondary">
                  <Heart size={20} />
                </div>
                <h4 className="font-bold text-white">Interests</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {['UI Design', 'Open Source', 'Cloud Computing', 'AI'].map(tag => (
                  <span key={tag} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

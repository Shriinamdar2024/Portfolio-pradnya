import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Sparkles, Download, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-[100svh] flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent-secondary/10 rounded-full blur-[120px] animate-pulse delay-1000 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent text-sm font-medium"
          >
            <Sparkles size={16} />
            <span>Open for Collaboration</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight leading-[1.1] text-white">
              Pradnya <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary">Kulkarni</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed">
              A professional <span className="text-white font-semibold">MERN Stack Developer</span> & <span className="text-white font-semibold">Software Engineer</span>.
              I build robust, scalable, and visually stunning web solutions with a focus on clean architecture and user experience.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kulkarnipradnya066@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(139, 92, 246, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-accent/25"
            >
              Get in Touch
              <Mail size={20} />
            </motion.a>

            <div className="flex gap-3">
              <motion.a
                href="https://share.google/kJBrN0OdmKTEgaJGl"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                className="p-4 bg-white/5 border border-white/10 rounded-2xl transition-all"
              >
                <Github size={24} />
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/pradnya-kulkarni-baa300226/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                className="p-4 bg-white/5 border border-white/10 rounded-2xl transition-all"
              >
                <Linkedin size={24} />
              </motion.a>

              <motion.a
                href="https://res.cloudinary.com/dn19hommj/image/upload/fl_attachment:Resume/v1776340609/pk_jmjjzz.jpg"
                whileHover={{ y: -5, backgroundColor: 'rgba(255,255,255,0.1)' }}
                className="p-4 bg-white/5 border border-white/10 rounded-2xl transition-all"
                title="Download Resume"
              >
                <Download size={24} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Professional Image */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: 'spring' }}
            className="relative group"
          >
            {/* Professional Frame */}
            <div className="relative z-10 w-72 h-96 md:w-80 md:h-[28rem] rounded-[2rem] overflow-hidden border-4 border-white/10 bg-surface shadow-2xl">
              <img
                src="https://res.cloudinary.com/dn19hommj/image/upload/v1776341290/pki_mgxqlr.png"
                alt="Pradnya Kulkarni"
                className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 glass-morphism rounded-2xl border-white/10">
                <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">Software Engineer</p>
                <p className="text-sm font-medium text-white">Full Stack Specialist</p>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -inset-4 border border-accent/20 rounded-[2.5rem] -z-10 animate-pulse" />
            <div className="absolute -inset-8 border border-accent-secondary/10 rounded-[3rem] -z-20 animate-pulse delay-700" />

            {/* Floating Tech Icons */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 p-4 glass-morphism rounded-2xl border-white/10 shadow-xl"
            >
              <Sparkles className="text-accent" size={24} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 bg-bg relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xl font-bold tracking-tight text-white"
        >
          PRADNYA<span className="text-accent">.K</span>
        </motion.div>
        
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} Pradnya Kulkarni. Crafted with Passion.
        </p>
        
        <div className="flex gap-8">
          {['LinkedIn', 'GitHub', 'Twitter'].map((item) => (
            <a 
              key={item} 
              href="#"
              className="text-[10px] font-bold text-slate-400 hover:text-accent transition-colors uppercase tracking-widest"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

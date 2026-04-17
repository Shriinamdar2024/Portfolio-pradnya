import React, { useMemo } from 'react';
import { motion, useTime, useTransform } from 'motion/react';
import {
  Code2,
  Database,
  Globe,
  Layout,
  Server,
  Settings,
  Terminal,
  Cpu,
  Layers,
  Box,
  GitBranch,
  FileCode,
  Zap,
  Github,
  Cloud
} from 'lucide-react';

const skills = [
  { name: "React", icon: <Code2 size={24} />, color: "#61dafb" },
  { name: "JavaScript", icon: <FileCode size={24} />, color: "#f7df1e" },
  { name: "Tailwind", icon: <Layout size={24} />, color: "#38bdf8" },
  { name: "Node.js", icon: <Server size={24} />, color: "#339933" },
  { name: "MongoDB", icon: <Database size={24} />, color: "#47a248" },
  { name: "Express", icon: <Terminal size={24} />, color: "#ffffff" },
  { name: "Git", icon: <GitBranch size={24} />, color: "#f05032" },
  { name: "Next.js", icon: <Globe size={24} />, color: "#ffffff" },
  { name: "Python", icon: <Terminal size={24} />, color: "#3776ab" },
  { name: "Docker", icon: <Box size={24} />, color: "#2496ed" },
  { name: "MySQL", icon: <Database size={24} />, color: "#4479a1" },
  { name: "HTML", icon: <FileCode size={24} />, color: "#e34f26" },
  { name: "CSS", icon: <Layers size={24} />, color: "#1572b6" },
  { name: "GitHub", icon: <Github size={24} />, color: "#ffffff" },
  { name: "Vercel", icon: <Cloud size={24} />, color: "#ffffff" },
];

interface OrbitingSkillProps {
  skill: { name: string; icon: React.ReactNode; color: string };
  index: number;
  total: number;
  key?: string | number;
}

function OrbitingSkill({ skill, index, total }: OrbitingSkillProps) {
  const time = useTime();

  // Rotation logic
  const rotate = useTransform(time, (t) => {
    const baseAngle = (index / total) * 2 * Math.PI;
    const currentRotation = (t / 30000) * 2 * Math.PI;
    return baseAngle + currentRotation;
  });

  // Responsive elliptical path
  const [radiusX, setRadiusX] = React.useState(450);
  const [radiusY, setRadiusY] = React.useState(180);

  React.useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth < 768) {
        setRadiusX(window.innerWidth * 0.4);
        setRadiusY(window.innerWidth * 0.15);
      } else {
        setRadiusX(450);
        setRadiusY(180);
      }
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  const x = useTransform(rotate, (r) => Math.cos(r) * radiusX);
  const y = useTransform(rotate, (r) => Math.sin(r) * radiusY);

  const scale = useTransform(y, [-radiusY, radiusY], [0.4, 1]);
  const opacity = useTransform(y, [-radiusY, 0, radiusY], [0.2, 0.5, 1]);
  const zIndex = useTransform(y, [-radiusY, radiusY], [0, 50]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        x,
        y,
        scale,
        opacity,
        zIndex: useTransform(zIndex, (v) => Math.round(v)),
        willChange: 'transform, opacity',
      }}
      className="group cursor-pointer flex flex-col items-center gap-1 md:gap-3"
    >
      <div className="relative">
        <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="p-3 md:p-5 rounded-xl md:rounded-2xl glass-morphism border-white/10 shadow-2xl transition-transform duration-300"
          style={{
            color: skill.color,
            borderColor: `${skill.color}33`,
            boxShadow: `0 0 20px ${skill.color}11`
          }}
        >
          {React.cloneElement(skill.icon as React.ReactElement, { size: window.innerWidth < 768 ? 16 : 24 })}
        </motion.div>
      </div>
      <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-widest text-white/70 group-hover:text-white transition-colors whitespace-nowrap">
        {skill.name}
      </span>
    </motion.div>
  );
}

const StarBackground = React.memo(() => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="stars-container absolute inset-0">
        <div className="stars-layer-1" />
        <div className="stars-layer-2" />
        <div className="stars-layer-3" />
      </div>
    </div>
  );
});
StarBackground.displayName = 'StarBackground';

const Meteor = () => {
  const meteorStyle = useMemo(() => {
    return {
      top: `${Math.random() * 30}%`,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 20,
      duration: Math.random() * 1 + 1.5,
      length: Math.random() * 100 + 150,
    };
  }, []);

  return (
    <motion.div
      initial={{ x: 0, y: 0, opacity: 0 }}
      animate={{
        x: [0, 800],
        y: [0, 800],
        opacity: [0, 1, 0]
      }}
      transition={{
        duration: meteorStyle.duration,
        repeat: Infinity,
        delay: meteorStyle.delay,
        repeatDelay: Math.random() * 25 + 15, // Very long delay between meteors
        ease: "easeOut"
      }}
      className="absolute pointer-events-none"
      style={{
        top: meteorStyle.top,
        left: meteorStyle.left,
        width: '1px',
        height: meteorStyle.length,
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.7) 0%, transparent 100%)',
        transform: 'rotate(135deg)',
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
        willChange: 'transform, opacity',
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-[2px] bg-white rounded-full blur-[1px]" />
    </motion.div>
  );
};

export default function SkillsOrbit() {
  return (
    <section id="skills" className="min-h-screen relative overflow-hidden bg-bg flex flex-col items-center justify-center py-20">
      <StarBackground />
      <Meteor />
      <Meteor />
      <Meteor />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 relative z-20" style={{ willChange: 'transform, opacity' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-widest mb-6"
          >
            <Zap size={12} />
            <span>Technical Ecosystem</span>
          </motion.div>
          <h2 className="text-4xl md:text-7xl font-extrabold text-white mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-secondary">Orbit</span> of Expertise
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A vast universe of technologies I've mastered to build exceptional digital experiences.
          </p>
        </div>

        {/* The Orbit System - Full Screen Background Style */}
        <div className="relative w-full h-[400px] md:h-[600px] flex items-center justify-center mt-10">
          {/* Diagonal Orbit Path Visual - Enlarge */}
          <div className="absolute w-[90vw] md:w-[1000px] h-[30vh] md:h-[400px] border border-white/5 rounded-[100%] rotate-[-15deg] -z-10" style={{ willChange: 'transform' }}>
            <div className="absolute inset-0 border border-accent/10 rounded-[100%] animate-[spin_80s_linear_infinite]" style={{ borderStyle: 'dashed', borderWidth: '1px' }} />
            <div className="absolute inset-8 border border-white/5 rounded-[100%]" />
          </div>

          {/* The Orbit System */}
          <div className="relative w-full h-full flex items-center justify-center rotate-[-15deg]">
            {/* Central Planet */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-20 group"
              style={{ willChange: 'transform' }}
            >
              <div className="absolute -inset-10 md:-inset-16 bg-accent/10 rounded-full blur-2xl md:blur-3xl animate-pulse group-hover:bg-accent/20 transition-colors" />

              <div className="w-28 h-28 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-bg via-surface to-accent/20 border border-white/10 flex items-center justify-center backdrop-blur-3xl shadow-[0_0_40px_rgba(139,92,246,0.3)] md:shadow-[0_0_80px_rgba(139,92,246,0.3)] relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/5 to-transparent" />

                <div className="text-center relative z-10">
                  <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-[0.4em] text-accent mb-1 md:2 block">Core</span>
                  <span className="text-lg md:text-3xl font-black uppercase tracking-widest text-white">Developer</span>
                </div>

                <div className="absolute inset-0 border-2 border-transparent border-t-accent/40 rounded-full animate-spin" />
              </div>
            </motion.div>

            {/* Orbiting Skills */}
            <div className="absolute inset-0 flex items-center justify-center">
              {skills.map((skill, i) => (
                <OrbitingSkill
                  key={skill.name}
                  skill={skill}
                  index={i}
                  total={skills.length}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Fallback / Grid - Only for very small screens if needed, otherwise hidden */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:hidden gap-4 relative z-20">
          {skills.map((skill) => (
            <div key={skill.name} className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3 backdrop-blur-md">
              <div style={{ color: skill.color }}>{skill.icon}</div>
              <span className="text-xs font-bold text-white">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

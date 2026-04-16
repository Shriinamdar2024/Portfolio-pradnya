import React from 'react';
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
  FileCode
} from 'lucide-react';

const skills = [
  { name: "Next.js", icon: <Globe size={24} />, color: "#ffffff" },
  { name: "React", icon: <Code2 size={24} />, color: "#61dafb" },
  { name: "Tailwind", icon: <Layout size={24} />, color: "#38bdf8" },
  { name: "Python", icon: <Terminal size={24} />, color: "#3776ab" },
  { name: "JavaScript", icon: <FileCode size={24} />, color: "#f7df1e" },
  { name: "Docker", icon: <Box size={24} />, color: "#2496ed" },
  { name: "MySQL", icon: <Database size={24} />, color: "#4479a1" },
  { name: "Git", icon: <GitBranch size={24} />, color: "#f05032" },
  { name: "MongoDB", icon: <Server size={24} />, color: "#47a248" },
  { name: "HTML", icon: <FileCode size={24} />, color: "#e34f26" },
  { name: "CSS", icon: <Layers size={24} />, color: "#1572b6" },
];

interface OrbitingSkillProps {
  skill: { name: string; icon: React.ReactNode; color: string };
  index: number;
  total: number;
  key?: string | number;
}

function OrbitingSkill({ skill, index, total }: OrbitingSkillProps) {
  const time = useTime();
  
  // Calculate rotation
  // We want a full rotation every 20 seconds
  const rotate = useTransform(time, (t) => {
    const baseAngle = (index / total) * 2 * Math.PI;
    const currentRotation = (t / 20000) * 2 * Math.PI;
    return baseAngle + currentRotation;
  });

  // Calculate X position (horizontal)
  const x = useTransform(rotate, (r) => Math.cos(r) * 300);
  
  // Calculate Z position (depth)
  const z = useTransform(rotate, (r) => Math.sin(r) * 100);
  
  // Calculate Scale based on Z (front is larger, back is smaller)
  const scale = useTransform(z, [-100, 100], [0.6, 1.2]);
  
  // Calculate Opacity based on Z
  const opacity = useTransform(z, [-100, 0, 100], [0.3, 0.7, 1]);
  
  // Calculate Z-Index based on Z
  const zIndex = useTransform(z, [-100, 100], [0, 50]);

  return (
    <motion.div
      style={{
        position: 'absolute',
        x,
        scale,
        opacity,
        zIndex: useTransform(zIndex, (v) => Math.round(v)),
      }}
      className="flex flex-col items-center gap-3"
    >
      <div 
        className="p-5 rounded-2xl glass-morphism border-white/10 shadow-2xl transition-colors duration-500"
        style={{ color: skill.color, borderColor: `${skill.color}33` }}
      >
        {skill.icon}
      </div>
      <motion.span 
        style={{ opacity: useTransform(z, [0, 100], [0, 1]) }}
        className="text-[10px] font-bold uppercase tracking-widest text-white whitespace-nowrap"
      >
        {skill.name}
      </motion.span>
    </motion.div>
  );
}

export default function SkillsOrbit() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="relative z-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">
            Expertise
          </h2>
          <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
            Technical <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-accent-secondary to-accent-tertiary">Ecosystem</span>
          </h3>
          <p className="text-slate-400 max-w-md text-lg leading-relaxed mb-10">
            A comprehensive toolkit of modern technologies I use to architect and build high-performance digital products.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <h4 className="text-white font-bold mb-2">Frontend</h4>
              <p className="text-xs text-slate-500">React, Next.js, Tailwind</p>
            </div>
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <h4 className="text-white font-bold mb-2">Backend</h4>
              <p className="text-xs text-slate-500">Node.js, Python, Express</p>
            </div>
          </div>
        </div>

        {/* Right Content - 3D Orbit */}
        <div className="relative h-[400px] flex items-center justify-center">
          {/* Orbit Path Visual */}
          <div className="absolute w-[600px] h-[200px] border border-white/5 rounded-[100%] rotate-x-60 -z-10" />
          
          <div className="relative w-full h-full flex items-center justify-center">
            {skills.map((skill, i) => (
              <OrbitingSkill 
                key={skill.name} 
                skill={skill} 
                index={i} 
                total={skills.length} 
              />
            ))}
            
            {/* Central Element */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 360]
              }}
              transition={{ 
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
              className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-accent-secondary/20 flex items-center justify-center border border-white/10 backdrop-blur-3xl shadow-[0_0_50px_rgba(139,92,246,0.2)]"
            >
              <Cpu size={48} className="text-white opacity-50" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

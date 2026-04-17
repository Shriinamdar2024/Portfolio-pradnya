import { motion } from 'motion/react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'AntarriStore',
    desc: 'Antarri Store is a sophisticated full-stack e-commerce platform engineered using the MERN stack (MongoDB, Express, React, Node.js) and optimized for high-performance retail operations. The architecture features a decoupled frontend powered by Vite and React, utilizing Tailwind CSS for a minimalist, enterprise-grade user interface, and Lucide-React for consistent iconography. The backend implements a RESTful API architecture with JWT-based authentication, Multer for multipart/form-data image processing, and Mongoose ODM for flexible schema management across diverse product categories like clothing and mobile accessories. Underpinned by Axios interceptors and state-driven form handling, the project focuses on seamless data synchronization and a robust administrative workflow for local-first development.',
    image: 'https://res.cloudinary.com/dn19hommj/image/upload/v1776357749/store_fkexiu.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Stripe'],
    github: '#',
    demo: 'https://antarristore.vercel.app',
    className: 'md:col-span-2 md:row-span-2'
  },
  {
    title: 'Fire Brigade Management System',
    desc: 'The Fire Brigade Management System is a web-based application developed to streamline and digitize fire emergency operations, enhancing response efficiency and coordination. The system allows users to report incidents in real time, while administrators and dispatchers can manage cases, assign firefighter teams, and monitor ongoing operations through a centralized dashboard. It replaces traditional manual processes with an automated solution, improving communication, resource allocation, and data management during emergencies. Built using HTML, CSS, JavaScript, PHP, and MySQL (XAMPP), the project focuses on creating a user-friendly interface with role-based access, ensuring effective incident handling and improved public safety.',
    image: 'https://res.cloudinary.com/dn19hommj/image/upload/v1776404689/Picture1_scrmlm.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    github: '#',
    className: 'md:col-span-1 md:row-span-1'
  },
  {
    title: 'ShareCharge',
    desc: 'ShareCharge is a pioneering IoT-enabled EV infrastructure platform designed to democratize electric vehicle charging through a decentralized, peer-to-peer (P2P) network. The system architecture integrates smart hardware interfacing with a robust MERN-based backend, enabling real-time station discovery, automated load balancing, and secure digital payment processing. Utilizing a mobile-first React Native or responsive React frontend, the platform features a comprehensive administrative dashboard for station hosts to monitor energy consumption, manage user access, and track revenue analytics. By leveraging RESTful APIs and WebSocket protocols for live telemetry, ShareCharge optimizes urban charging availability through a scalable, "Make in India" hardware-software ecosystem.',
    image: 'https://res.cloudinary.com/dn19hommj/image/upload/v1776405057/Screenshot_2026-04-17_112040_tgfagh.png',
    tags: ['React', 'Tailwind', 'MongoDB', 'Express', 'JWT', 'Stripe'],
    github: '#',
    className: 'md:col-span-1 md:row-span-1'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-text-secondary mb-4">
              My Work
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-text-primary">
              Featured <span className="text-accent-secondary">Projects</span>
            </h3>
          </div>
        </div>

        {/* ✅ FIX: 2 cards per row + equal size */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bento-card group overflow-hidden p-0 h-full"
            >
              <div className="relative flex flex-col h-full">

                {/* IMAGE */}
                <div className="relative w-full flex justify-center items-center p-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="max-w-full h-auto object-contain transition-opacity duration-500 opacity-80 group-hover:opacity-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent pointer-events-none" />
                </div>

                {/* CONTENT */}
                <div className="p-8 relative z-10 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 rounded-md bg-surface/50 border border-text-primary/10 text-[10px] font-bold text-accent-secondary uppercase tracking-widest">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a href={project.github} className="text-text-primary hover:text-accent-secondary transition-colors">
                        <Github size={20} />
                      </a>
                      <a href={project.demo} className="text-text-primary hover:text-accent-secondary transition-colors">
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-accent-secondary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
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
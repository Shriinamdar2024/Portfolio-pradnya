import { motion } from 'motion/react';
import { Mail, Github, Linkedin, Send, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-text-dim mb-4">
              Get In Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-8">
              Let's <span className="text-accent">Connect</span>
            </h3>
            <p className="text-text-dim mb-10 leading-relaxed max-w-md">
              Have a project in mind or just want to say hi? Feel free to reach out! 
              I'm always open to discussing new opportunities and creative ideas.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <Mail size={20} />, label: 'Email', value: 'pradnya.kulkarni@example.com', href: 'mailto:pradnya.kulkarni@example.com' },
                { icon: <Phone size={20} />, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
                { icon: <MapPin size={20} />, label: 'Location', value: 'Pune, Maharashtra, India', href: '#' },
              ].map((item, i) => (
                <a 
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="p-4 rounded-xl bg-surface border border-border-dim text-accent group-hover:bg-accent group-hover:text-bg transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-text-dim uppercase tracking-widest">{item.label}</p>
                    <p className="text-slate-200 font-medium text-sm">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="geometric-card p-8 md:p-10"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-dim uppercase tracking-widest ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-bg border border-border-dim rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-text-dim uppercase tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-bg border border-border-dim rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors text-sm"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-text-dim uppercase tracking-widest ml-1">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Inquiry"
                  className="w-full bg-bg border border-border-dim rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors text-sm"
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-text-dim uppercase tracking-widest ml-1">Message</label>
                <textarea 
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-bg border border-border-dim rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none text-sm"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full py-4 bg-accent hover:bg-accent/90 text-bg rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] uppercase tracking-widest text-xs"
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Video, Coffee, Rocket, ChevronDown } from 'lucide-react';

export default function AboutSection() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const stats = [
    { icon: Code2, value: '50+', label: 'Projects Selesai' },
    { icon: Video, value: '100+', label: 'Video Konten' },
    // { icon: Coffee, value: '1000+', label: 'Cangkir Kopi' },
    // { icon: Rocket, value: '5+', label: 'Tahun Pengalaman' },
  ];

  const accordionData = [
    {
      title: "Passionate Developer",
      content: "Saya adalah seorang Fullstack Web Developer dengan passion yang kuat dalam menciptakan solusi digital yang inovatif.",
      content2: "Dengan pengalaman lebih dari 5 tahun, saya telah membantu berbagai klien dalam mewujudkan ide-ide mereka menjadi aplikasi web yang powerful. Saya selalu haus akan teknologi baru.",
      content3: "Saya fokus pada performa, keamanan, dan pengalaman pengguna (UX) yang luar biasa di setiap baris kode yang saya tulis"
    },
    {
      title: "Creative Content Creator",
      content: "Selain coding, saya aktif berbagi pengetahuan tentang pemrograman melalui berbagai platform. Saya percaya bahwa berbagi ilmu adalah cara terbaik untuk terus belajar dan membangun komunitas yang suportif."
    },
    // {
    //   title: "Problem Solver & Tech Enthusiast",
    //   content: "Selalu haus akan teknologi baru. Saya fokus pada performa, keamanan, dan pengalaman pengguna (UX) yang luar biasa di setiap baris kode yang saya tulis."
    // }
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium mb-2 block uppercase tracking-widest text-sm">Tentang Saya</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Side: Image with Floating Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <div className="relative group">
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="aspect-square rounded-3xl overflow-hidden glass shadow-2xl relative z-10"
              >
                <div className="w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10 flex items-center justify-center border border-white/20">
                  <motion.span 
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    className="text-8xl filter drop-shadow-xl"
                  >
                    👨‍💻
                  </motion.span>
                </div>
              </motion.div>
              
              {/* Floating Badge */}
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="absolute -bottom-6 -right-6 p-6 glass rounded-2xl shadow-card z-20 border border-primary/20 backdrop-blur-md"
              >
                <p className="font-display font-bold text-3xl text-primary">5+ Tahun</p>
                <p className="text-sm font-medium text-muted-foreground uppercase">Pengalaman</p>
              </motion.div>

              {/* Decorative Background Element */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Right Side: Accordion & Stats */}
          <div className="space-y-8">
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <motion.div 
                  key={index}
                  className="border border-primary/10 rounded-xl overflow-hidden bg-background/50"
                  initial={false}
                >
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === index ? -1 : index)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-primary/5 transition-colors"
                  >
                    <span className="font-display font-bold text-lg md:text-xl">
                      {item.title}
                    </span>
                    <ChevronDown 
                      className={`transition-transform duration-300 ${activeAccordion === index ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {activeAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="p-4 pt-0 text-muted-foreground leading-relaxed">
                          {item.content}
                        </div>
                        <div className="p-4 pt-0 text-muted-foreground leading-relaxed">
                          {item.content2}
                        </div>
                        <div className="p-4 pt-0 text-muted-foreground leading-relaxed">
                          {item.content3}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, backgroundColor: "rgba(var(--primary), 0.05)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 glass rounded-xl text-center border border-white/10 shadow-sm"
                >
                  <stat.icon className="h-6 w-6 text-primary mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
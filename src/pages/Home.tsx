import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const homeServices = [
  {
    title: 'Precision Cuts',
    desc: 'Crafted for structure and lifestyle.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDCdoKgCNL98cTOxhUEL3kx7W3j8G-U4qraVU5eMH0DVDrOYznwEIutK4-q64IAEArpqwVOhY1d7WhwCZZqR4KNSS4R4n7gktShIBW9QwNGJmFVA6fU5xj354F3CM3T9B3I5Astmzl8RMGb6ndNXL73vrRgxYMdy4F_KcPAP2B5Euu3uktiqsbNXCQ5rc9J-vxjRv9aHpHfUbsauc-Fej0Cg4ozVmgRrxM6GQkHXUctQ_BVb5YT3WEVt4EhaLRzQ9tn-mARetZHQ4I',
  },
  {
    title: 'Bespoke Colour',
    desc: 'Artistic balayage to full transformations.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUL6y0-l23GZMlxcytdAbGT82XEcQuJB0FLnxqr5uzA2KCR38hLb8xoYoUhwyGMJkP_B5Dkuzyob71aEUcEeRkLPRfczpgOz_5O-DrIcQ0HIJbmToBwyE7G7ezBRKuSg1CkjJDvpY9C2kcKPRRpGdS0lUTa9fKWjtCqGSabP0SbrDwE2sMkUvlMrUafeq7SOlWgc9iaXInq4-JOvqCHcD-dq4oDK8pNz5gZ8BP-PNvy1DnCdCx1zRKSLoI-gk72ztR9w4A2uFmH5s',
  },
  {
    title: 'Extensions',
    desc: 'Pure seamless volume and length.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAujl7H41nKiogkHwn7CUNfmyPtruD-fCilg4pZNcB2AwD_3J_0FZEDjsYW1Tp4SCbT5wLfVxXzh8obYe8SrS019yadG-Qcy3QBTSkjMPElwnWJ6P48GcJOSkasHb8gjfs3VzX4sbiLWUv53maebID4pcjniGGuAM5cup0k7WLoMh56Di1CJf38LQkn8Hk4eD58f-_b1YlAjzh_inQihqYKX8qygUDbiw-srzmzuC-zEzMR_VxpZz9Kn0iBUDkVG18ARECcNzh60-s',
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center relative px-6 md:px-12">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
            >
              <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-on-surface-variant/60 block mb-8 font-bold italic">Atelier NYC</span>
              <h1 className="font-serif text-[clamp(3.5rem,10vw,6rem)] leading-[0.9] text-primary mb-12 tracking-tighter italic">
                Your Hair.<br/>Your Story.
              </h1>
              <p className="font-sans text-lg text-on-surface-variant max-w-lg mb-16 leading-relaxed font-light">
                Premium hair styling by passionate artists. We believe in enhancing your natural beauty through personalized consultation and expert technique.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <Link to="/booking" className="btn-primary flex items-center justify-center gap-4 group">
                  Book Appointment <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/gallery" className="btn-outline flex items-center justify-center">
                  View Lookbook
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="aspect-[4/5] bg-surface-container relative grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1400" 
                alt="Hair Styling"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </motion.div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-surface-container-high hidden lg:block -z-10" />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-gap bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-xl">
              <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-on-surface-variant mb-6 block font-bold">Curated Treatments</span>
              <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-tight italic">Our Signature Services</h2>
            </div>
            <Link to="/services" className="font-sans text-[11px] uppercase tracking-[0.3em] font-bold pb-2 border-b border-primary hover:text-on-surface-variant hover:border-on-surface-variant transition-all">
              Full Service Menu
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {homeServices.map((service, idx) => (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/4] mb-8 overflow-hidden bg-surface-container relative">
                   <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <Link to="/booking" className="btn-primary bg-white text-primary">Book This</Link>
                  </div>
                </div>
                <h3 className="font-serif text-3xl mb-4 group-hover:italic transition-all">{service.title}</h3>
                <p className="font-sans text-sm text-on-surface-variant">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sanctuary Section */}
      <section className="section-gap">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative aspect-[3/4] overflow-hidden grayscale">
            <img 
              src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200" 
              alt="Salon Interior"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-10">
             <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-on-surface-variant font-bold">The Space</span>
             <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] italic">A Sanctuary of Modern Elegance</h2>
             <p className="font-sans text-lg text-on-surface-variant leading-relaxed">
               SI.NES is more than a salon; it's an experience curated for the discerning individual. We blend modern technique with timeless elegance, ensuring every client leaves feeling uniquely themselves.
             </p>
             <p className="font-sans text-sm text-on-surface-variant/80 leading-relaxed">
               Our space is designed to be a retreat—a place where you can unwind, trust our expertise, and emerge transformed. We believe that exceptional hair is the foundation of unwavering confidence.
             </p>
             <Link to="/about" className="btn-outline self-start">
               Our Heritage
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

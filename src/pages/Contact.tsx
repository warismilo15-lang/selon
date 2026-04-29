import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <div className="bg-surface min-h-screen">
       <section className="py-32 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-on-surface-variant font-bold mb-6 block">Get in Touch</span>
        <h1 className="font-serif text-6xl md:text-7xl mb-12 italic">The Contact Studio</h1>
        <p className="font-sans text-lg text-on-surface-variant leading-relaxed">
          For general enquiries, press, or business collaborations, please reach out via the coordinates below.
        </p>
      </section>

      <section className="pb-32 px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-4 flex flex-col gap-12">
           <div className="flex items-start gap-8 group">
             <div className="w-12 h-12 flex items-center justify-center bg-surface-container text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
               <MapPin size={20} />
             </div>
             <div>
               <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold mb-2">Location</h4>
               <p className="font-sans text-sm text-on-surface-variant italic">123 Fashion Avenue<br/>New York, NY 10001</p>
             </div>
           </div>

           <div className="flex items-start gap-8 group">
             <div className="w-12 h-12 flex items-center justify-center bg-surface-container text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
               <Phone size={20} />
             </div>
             <div>
               <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold mb-2">Telephone</h4>
               <p className="font-sans text-sm text-on-surface-variant italic">+1 (212) 555-SI.NES</p>
             </div>
           </div>

           <div className="flex items-start gap-8 group">
             <div className="w-12 h-12 flex items-center justify-center bg-surface-container text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all">
               <Mail size={20} />
             </div>
             <div>
               <h4 className="font-sans text-[10px] uppercase tracking-widest font-bold mb-2">Email</h4>
               <p className="font-sans text-sm text-on-surface-variant italic">studio@sineshair.com</p>
             </div>
           </div>
        </div>

        <div className="lg:col-span-8 bg-surface-container-low p-12">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                 key="success"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 className="h-full flex flex-col items-center justify-center text-center min-h-[300px]"
              >
                <div className="w-16 h-16 bg-primary text-white flex items-center justify-center mb-6">
                  <Send size={24} />
                </div>
                <h3 className="font-serif text-3xl italic mb-4">Message Sent</h3>
                <p className="font-sans text-sm text-on-surface-variant max-w-xs uppercase tracking-widest leading-loose">We will respond within 24 hours.</p>
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Your Name</label>
                  <input required type="text" className="input-field" placeholder="Full Name" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Your Email</label>
                  <input required type="email" className="input-field" placeholder="Email@example.com" />
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="font-sans text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Subject</label>
                  <input required type="text" className="input-field" placeholder="How can we help?" />
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="font-sans text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">Message</label>
                  <textarea required rows={5} className="input-field resize-none" placeholder="Your message here..." />
                </div>
                <div className="md:col-span-2">
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-4">
                    Send Message <Send size={14} />
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}

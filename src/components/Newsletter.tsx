import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1200);
  };

  return (
    <section className="bg-surface py-24 border-t border-outline-variant/30">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h3 className="font-serif text-3xl mb-6">Stay Inspired</h3>
        <p className="font-sans text-sm text-on-surface-variant mb-10 leading-relaxed">
          Join our curated list for exclusive seasonal lookbooks, hair care rituals, and early access to appointments.
        </p>
        
        <div className="min-h-[100px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-on-surface font-sans text-sm tracking-widest uppercase font-bold"
              >
                Welcome to the studio.
              </motion.div>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row w-full gap-4"
              >
                <input 
                  required
                  type="email"
                  placeholder="Your Email"
                  className="input-field py-3 text-center sm:text-left"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  disabled={status === 'submitting'}
                  type="submit"
                  className="btn-primary sm:w-auto px-12 py-3 whitespace-nowrap"
                >
                  {status === 'submitting' ? 'Joining...' : 'Join List'}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

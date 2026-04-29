import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        className="bg-primary text-on-primary py-2 px-4 relative overflow-hidden"
      >
        <p className="font-sans text-[11px] uppercase tracking-[0.2em] font-medium text-center pr-8 leading-tight">
          Book your appointment online — same week slots available ✂️
        </p>
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-on-primary/60 hover:text-on-primary transition-colors p-1"
          aria-label="Dismiss announcement"
        >
          <X size={14} />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

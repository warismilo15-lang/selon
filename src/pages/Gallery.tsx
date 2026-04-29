import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const galleryItems = [
  { id: 1, tag: 'Colour', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800' },
  { id: 2, tag: 'Cuts', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800' },
  { id: 3, tag: 'Bridal', url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800' },
  { id: 4, tag: 'Extensions', url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800' },
  { id: 5, tag: 'Colour', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800' },
  { id: 6, tag: 'Cuts', url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=800' },
  { id: 7, tag: 'Bridal', url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800' },
  { id: 8, tag: 'Extensions', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800' },
];

const filters = ['All', 'Colour', 'Cuts', 'Extensions', 'Bridal'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredItems = activeFilter === 'All' 
    ? galleryItems 
    : galleryItems.filter(item => item.tag === activeFilter);

  return (
    <div className="bg-surface min-h-screen">
      <section className="py-32 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-on-surface-variant font-bold mb-6 block">Lookbook</span>
        <h1 className="font-serif text-6xl md:text-7xl mb-12 italic">The Gallery</h1>
        
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          {filters.map(filter => (
            <button 
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-sans text-[11px] uppercase tracking-[0.2em] font-bold pb-2 transition-all ${activeFilter === filter ? 'text-primary border-b border-primary' : 'text-on-surface-variant/40 hover:text-primary'}`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div 
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="aspect-square relative grayscale group overflow-hidden bg-surface-container"
              >
                <img 
                  src={item.url} 
                  alt={`Portfolio ${item.id}`}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:grayscale-0"
                />
                <div className="absolute inset-x-8 bottom-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span className="bg-white/90 backdrop-blur-md px-4 py-2 font-sans text-[10px] uppercase tracking-widest font-bold">
                    {item.tag}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </div>
  );
}

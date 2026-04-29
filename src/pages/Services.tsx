import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const categories = [
  {
    title: 'Precision Cutting',
    items: [
      { name: 'Signature Haircut', duration: '60 mins', price: 'from $125' },
      { name: 'Restyle Transformation', duration: '90 mins', price: 'from $180' },
      { name: 'Fringe Trim & Finish', duration: '30 mins', price: 'from $45' },
      { name: 'Men’s Grooming', duration: '45 mins', price: 'from $95' },
    ]
  },
  {
    title: 'Technical Colour',
    items: [
      { name: 'Lived-in Balayage', duration: '180 mins', price: 'from $350' },
      { name: 'Full Head Highlight', duration: '150 mins', price: 'from $280' },
      { name: 'Global Tint Gloss', duration: '90 mins', price: 'from $185' },
      { name: 'Creative Multi-Tonal', duration: '240 mins', price: 'POAs' },
    ]
  },
  {
    title: 'Advanced Rituals',
    items: [
      { name: 'Silk Protein Therapy', duration: '45 mins', price: 'from $85' },
      { name: 'Scalp Detox Treatment', duration: '30 mins', price: 'from $65' },
      { name: 'Olaplex Reconstruction', duration: '60 mins', price: 'from $110' },
      { name: 'Luxury Steam Spa', duration: '45 mins', price: 'from $95' },
    ]
  }
];

export default function Services() {
  return (
    <div className="bg-surface">
      <section className="py-32 px-6 md:px-12 text-center max-w-4xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
        >
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-on-surface-variant font-bold mb-6 block">Carefully Curated</span>
          <h1 className="font-serif text-6xl md:text-7xl mb-12 italic">The Service Menu</h1>
          <p className="font-sans text-lg text-on-surface-variant leading-relaxed">
            All services begin with an in-depth consultation. We use only premium, sustainable products tailored to your hair's unique requirements.
          </p>
        </motion.div>
      </section>

      <section className="pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-8 flex flex-col gap-24">
            {categories.map((cat, idx) => (
              <motion.div 
                key={cat.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <h2 className="font-serif text-4xl mb-12 italic border-b border-outline-variant/30 pb-6">{cat.title}</h2>
                <div className="flex flex-col gap-10">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex flex-col md:flex-row md:items-center justify-between gap-4 group">
                      <div className="flex flex-col">
                        <h3 className="font-serif text-2xl group-hover:italic transition-all">{item.name}</h3>
                        <span className="font-sans text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mt-2 italic">{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-8">
                        <span className="font-serif text-xl">{item.price}</span>
                        <Link to={`/booking?service=${encodeURIComponent(item.name)}`} className="btn-primary py-2 px-6">Book</Link>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit bg-surface-container p-12">
            <h3 className="font-serif text-3xl mb-8 italic">Studio Policy</h3>
            <div className="flex flex-col gap-8 text-on-surface-variant font-sans text-sm leading-relaxed">
              <p>
                <strong>Cancellations:</strong> We require 48 hours notice for all cancellations to avoid a 50% charge.
              </p>
              <p>
                <strong>Skin Tests:</strong> New colour clients must visit the studio 48 hours prior to their appointment for a patch test.
              </p>
              <p>
                <strong>Consultations:</strong> Virtual consultations are available upon request for large transformations.
              </p>
              <Link to="/booking" className="btn-outline w-full mt-4 text-center">Request Consultation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

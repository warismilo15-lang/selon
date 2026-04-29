import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="bg-surface min-h-screen">
      <section className="py-32 px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           animate={{ opacity: 1, x: 0 }}
           className="relative aspect-[3/4] bg-surface-container grayscale"
        >
          <img 
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1000" 
            alt="Stylist at work"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div>
          <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-on-surface-variant font-bold mb-6 block">Our Heritage</span>
          <h1 className="font-serif text-6xl italic mb-12">The SI.NES Philosophy</h1>
          <div className="flex flex-col gap-10 font-sans text-lg text-on-surface-variant leading-relaxed font-light">
             <p>
               Founded in the heart of New York City, SI.NES HAIR was born from a desire to redefine the luxury salon experience. We moved away from the clinical and corporate, towards the artistic and intimate.
             </p>
             <p>
               Nora Sines, our founder and principal stylist, spent a decade working with high-fashion magazines and runway houses before opening our doors. That editorial gaze informs everything we do—seeking the "narrative" in every client's hair.
             </p>
             <p>
               We believe that sustainability and luxury are not mutually exclusive. Every product in our studio is carefully vetted for its efficacy and its footprint on the planet.
             </p>
             <Link to="/booking" className="btn-primary self-start mt-4">Join our Story</Link>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-32 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
             <div className="order-2 md:order-1">
                <h2 className="font-serif text-5xl italic mb-12">Artistry in Every Strand</h2>
                <p className="font-sans text-on-surface-variant leading-loose mb-12">
                  Our team is comprised of specialists—each a master of their specific craft, whether that be the technical architecture of a precision cut or the chemical alchemy of a bespoke colour transformation.
                </p>
                <div className="grid grid-cols-2 gap-12">
                  <div>
                    <span className="font-serif text-4xl block mb-2">12+</span>
                    <span className="font-sans text-[10px] uppercase tracking-widest font-bold">Years of Artistry</span>
                  </div>
                   <div>
                    <span className="font-serif text-4xl block mb-2">8k+</span>
                    <span className="font-sans text-[10px] uppercase tracking-widest font-bold">Clients Transformed</span>
                  </div>
                </div>
             </div>
             <div className="order-1 md:order-2 aspect-video overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1000" 
                  alt="Styling work"
                  className="w-full h-full object-cover grayscale"
                />
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant/30 py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
          <div className="md:col-span-4">
            <span className="font-serif text-3xl mb-6 block text-primary">SI.NES HAIR</span>
            <p className="font-sans text-[11px] uppercase tracking-[0.3em] font-medium text-on-surface-variant mb-8 leading-loose">
              ARTISTRY IN EVERY STRAND.
            </p>
            <p className="font-sans text-[11px] uppercase tracking-widest text-on-surface-variant/60">
              © 2024 SI.NES HAIR.
            </p>
          </div>
          
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">
            <div className="flex flex-col gap-6">
              <h4 className="font-sans text-[11px] uppercase tracking-widest font-bold text-primary">Location</h4>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                123 Fashion Avenue<br/>New York, NY 10001
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <h4 className="font-sans text-[11px] uppercase tracking-widest font-bold text-primary">Hours</h4>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                Tue-Fri: 10am - 7pm<br/>Sat: 9am - 5pm<br/>Sun-Mon: Closed
              </p>
            </div>
            
            <div className="flex flex-col gap-6">
              <h4 className="font-sans text-[11px] uppercase tracking-widest font-bold text-primary">Connect</h4>
              <div className="flex flex-col gap-4">
                <a href="https://instagram.com" className="font-sans text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">Instagram</a>
                <a href="https://facebook.com" className="font-sans text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">Facebook</a>
              </div>
            </div>
            
            <div className="flex flex-col gap-6">
              <h4 className="font-sans text-[11px] uppercase tracking-widest font-bold text-primary">Legal</h4>
              <div className="flex flex-col gap-4">
                <Link to="/privacy" className="font-sans text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="font-sans text-[11px] uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

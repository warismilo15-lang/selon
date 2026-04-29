import { motion } from 'motion/react';
import BookingForm from '../components/BookingForm';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function Booking() {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-surface min-h-screen">
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="font-sans text-[11px] uppercase tracking-[0.4em] text-on-surface-variant font-bold mb-6 block">Reservations</span>
              <h1 className="font-serif text-6xl md:text-7xl mb-12 italic">Secure Your Session</h1>
              <div className="flex flex-col gap-12 text-on-surface-variant font-sans text-sm leading-relaxed max-w-sm">
                <p>
                  Welcome to the SI.NES HAIR reservation portal. Please complete the form below to request your preferred date and time.
                </p>
                <div>
                  <h4 className="text-primary font-bold uppercase tracking-widest mb-2">Concierge Hours</h4>
                  <p>Tue-Fri: 10am - 7pm<br/>Sat: 9am - 5pm</p>
                </div>
                <p className="italic">
                  Note: A member of our team will contact you to finalize the consultation details and confirm the booking.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-1 border-r border-outline-variant/20 hidden lg:block" />

          <div className="lg:col-span-6 bg-surface-container py-16 px-12">
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  );
}

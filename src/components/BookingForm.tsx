import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const services = [
  'Precision Signature Cut',
  'Bespoke Colour (Full Head)',
  'Balayage & Styling',
  'Seamless Extensions',
  'Silk Protein Treatment',
  'Bridal Trial & Day Styling',
];

const stylists = [
  'No Preference',
  'Sines (Principal Stylist)',
  'Luna (Creative Colour)',
  'Marcus (Master Cutter)',
];

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    stylist: '',
    date: '',
    time: '',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-surface-container p-12 text-center flex flex-col items-center justify-center min-h-[500px]"
      >
        <CheckCircle2 size={64} className="text-secondary mb-6" />
        <h3 className="font-serif text-3xl mb-4">Request Received</h3>
        <p className="font-sans text-on-surface-variant max-w-sm mx-auto mb-8">
          Thank you, {formData.name}. Our concierge will contact you within 2 hours to confirm your appointment details.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="btn-outline"
        >
          Book Another Appointment
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
      <div className="flex flex-col gap-2">
        <label className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Full Name</label>
        <input 
          required
          type="text"
          className="input-field"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          placeholder="Enter your name"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Email Address</label>
        <input 
          required
          type="email"
          className="input-field"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          placeholder="your@email.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Phone Number</label>
        <input 
          required
          type="tel"
          className="input-field"
          value={formData.phone}
          onChange={(e) => setFormData({...formData, phone: e.target.value})}
          placeholder="+1 (555) 000-0000"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Select Service</label>
        <select 
          required
          className="input-field appearance-none cursor-pointer"
          value={formData.service}
          onChange={(e) => setFormData({...formData, service: e.target.value})}
        >
          <option value="">Select a service</option>
          {services.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Preferred Stylist</label>
        <select 
          required
          className="input-field appearance-none cursor-pointer"
          value={formData.stylist}
          onChange={(e) => setFormData({...formData, stylist: e.target.value})}
        >
          <option value="">Select a stylist</option>
          {stylists.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Preferred Date</label>
        <input 
          required
          type="date"
          className="input-field cursor-pointer"
          value={formData.date}
          onChange={(e) => setFormData({...formData, date: e.target.value})}
        />
      </div>

      <div className="flex flex-col gap-2 md:col-span-2">
        <label className="font-sans text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant">Special Requests</label>
        <textarea 
          rows={3}
          className="input-field resize-none"
          value={formData.notes}
          onChange={(e) => setFormData({...formData, notes: e.target.value})}
          placeholder="Tell us more about your hair goals..."
        />
      </div>

      <div className="md:col-span-2 mt-4">
        <button 
          disabled={isSubmitting}
          type="submit"
          className="btn-primary w-full disabled:opacity-50"
        >
          {isSubmitting ? 'Processing Request...' : 'Send Appointment Request'}
        </button>
      </div>
    </form>
  );
}

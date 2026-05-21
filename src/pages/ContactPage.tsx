import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle } from 'lucide-react';

type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: ContactForm = { name: '', email: '', subject: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-dark to-primary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">Contact Us</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">We'd love to hear from you. Reach out to us for admissions, queries, or a campus visit.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-3 gap-10">
          {/* Info */}
          <div className="flex flex-col gap-5">
            {[
              { icon: MapPin, label: 'Main Campus', value: 'Gulshan-e-Iqbal, Karachi, Pakistan' },
              { icon: Phone, label: 'Phone', value: '+92-21-3456789' },
              { icon: Mail, label: 'Email', value: 'info@froebels.edu.pk' },
              { icon: Clock, label: 'Office Hours', value: 'Mon–Sat: 8:00 AM – 4:00 PM' },
            ].map((item) => (
              <div key={item.label} className="flex gap-4 bg-white rounded-xl p-5 shadow-sm">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-primary text-sm">{item.label}</div>
                  <div className="text-gray-600 text-sm">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-10 text-center">
                <CheckCircle className="text-green-500 mx-auto mb-3" size={40} />
                <h3 className="font-bold text-green-800 text-xl mb-2">Message Sent!</h3>
                <p className="text-green-700">Thank you for contacting Froebel's. We'll get back to you shortly.</p>
                <button onClick={() => { setSubmitted(false); setForm(initialForm); }} className="mt-4 text-primary font-semibold underline text-sm">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-sm flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name *</label>
                    <input name="name" value={form.name} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="Full name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                    <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="your@email.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Subject *</label>
                  <select name="subject" value={form.subject} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary">
                    <option value="">Select a subject</option>
                    <option>Admissions Enquiry</option>
                    <option>Academic Information</option>
                    <option>Fee Structure</option>
                    <option>Campus Visit</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                  <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none" placeholder="Write your message here..."></textarea>
                </div>
                <button type="submit" className="bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-lg transition-colors">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialForm: ContactForm = { name: '', email: '', phone: '', subject: '', message: '' };

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: any) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const campuses = [
    { name: 'Main Campus', address: 'Block 7, Gulshan-e-Iqbal, Karachi', phone: '+92-21-34567891' },
    { name: 'DHA Campus', address: 'Phase 5, Defence Housing Authority, Karachi', phone: '+92-21-35678902' },
    { name: 'Clifton Campus', address: 'Block 2, Clifton, Karachi', phone: '+92-21-36789013' },
    { name: 'North Nazimabad Campus', address: 'Block H, North Nazimabad, Karachi', phone: '+92-21-37890124' },
  ];

  return (
    <div>
      <div className="hero-gradient py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">Contact Us</h1>
        <p className="text-blue-200 text-lg">We'd love to hear from you</p>
      </div>

      {/* Contact Info Cards */}
      <section className="py-16 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Phone, title: 'Phone', info: '+92-21-3456789', sub: 'Mon-Sat, 8am - 4pm', color: 'bg-primary' },
              { icon: Mail, title: 'Email', info: 'info@froebels.edu.pk', sub: 'We reply within 24hrs', color: 'bg-accent' },
              { icon: MapPin, title: 'Address', info: '12 Campuses Citywide', sub: 'Karachi, Pakistan', color: 'bg-primary' },
              { icon: Clock, title: 'Office Hours', info: 'Mon - Saturday', sub: '8:00 AM – 4:00 PM', color: 'bg-accent' },
            ].map((card) => (
              <div key={card.title} className="bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className={`w-12 h-12 ${card.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <card.icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-primary mb-1">{card.title}</h3>
                <p className="text-gray-700 font-semibold text-sm">{card.info}</p>
                <p className="text-gray-400 text-xs mt-1">{card.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14">
            {/* Form */}
            <div>
              <SectionHeader title="Send us a Message" centered={false} />
              <div className="mt-8">
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                    <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-700 mb-2">Message Sent!</h3>
                    <p className="text-green-600">Thank you for contacting us. We will get back to you shortly.</p>
                    <button
                      onClick={() => { setSubmitted(false); setForm(initialForm); }}
                      className="mt-6 bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {error && (
                      <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
                        <AlertCircle size={16} />
                        {error}
                      </div>
                    )}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Your Name *</label>
                        <input
                          type="text" name="name" value={form.name} onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                          placeholder="Full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                        <input
                          type="email" name="email" value={form.email} onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
                        <input
                          type="tel" name="phone" value={form.phone} onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                          placeholder="+92-XXX-XXXXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
                        <input
                          type="text" name="subject" value={form.subject} onChange={handleChange}
                          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                          placeholder="What is this about?"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Message *</label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange} rows={5}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                        placeholder="Your message..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-lg transition-colors"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Campus Locations */}
            <div>
              <SectionHeader title="Our Campuses" centered={false} />
              <div className="mt-8 space-y-4">
                {campuses.map((campus) => (
                  <div key={campus.name} className="bg-secondary rounded-xl p-5 flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shrink-0">
                      <MapPin size={18} className="text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-primary">{campus.name}</h4>
                      <p className="text-gray-600 text-sm">{campus.address}</p>
                      <a href={`tel:${campus.phone}`} className="text-accent text-sm font-semibold hover:underline">{campus.phone}</a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="mt-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl h-64 flex items-center justify-center border-2 border-dashed border-primary/20">
                <div className="text-center">
                  <MapPin size={40} className="text-primary/40 mx-auto mb-2" />
                  <p className="text-gray-500 text-sm">Interactive map available</p>
                  <p className="text-gray-400 text-xs">View all campus locations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { useState } from 'react';
import { testimonials } from '@/lib/data';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="section-divider"></div>
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Testimonials</span>
          <div className="section-divider"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-10">What Our Community Says</h2>

        <div className="bg-white rounded-2xl shadow-md p-8 md:p-12 relative">
          <Quote className="text-accent/20 w-16 h-16 absolute top-6 left-6" />
          <p className="text-gray-700 text-lg leading-relaxed italic mb-6 relative z-10">
            "{t.quote}"
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold">{t.name[0]}</span>
            </div>
            <div className="text-left">
              <div className="font-bold text-primary">{t.name}</div>
              <div className="text-sm text-gray-500">{t.role}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button onClick={prev} className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-sm">
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  i === current ? 'bg-accent w-6' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
          <button onClick={next} className="w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-sm">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { testimonials } from '@/lib/data';

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="What People Say"
          subtitle="Hear from our parents, students, and alumni about their Froebel's experience."
        />
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-10 shadow-xl text-center relative">
            <Quote size={40} className="text-accent/30 absolute top-6 left-6" />
            <p className="text-gray-700 text-lg leading-relaxed italic mb-8">"{ t.text }"</p>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-3">
                {t.name.charAt(0)}
              </div>
              <div className="font-bold text-primary">{t.name}</div>
              <div className="text-gray-500 text-sm">{t.role}</div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === current ? 'bg-accent w-6' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-full flex items-center justify-center transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

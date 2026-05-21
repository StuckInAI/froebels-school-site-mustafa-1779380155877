import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

type Slide = {
  id: number;
  title: string;
  subtitle: string;
  cta: string;
  ctaHref: string;
  bg: string;
};

const slides: Slide[] = [
  {
    id: 1,
    title: 'Shaping Future Leaders',
    subtitle: 'Excellence in Education Since 1975 — Nurturing minds, building character, and inspiring a lifelong love of learning.',
    cta: 'Explore Admissions',
    ctaHref: '/admissions',
    bg: 'from-primary-dark via-primary to-primary-light',
  },
  {
    id: 2,
    title: 'Academic Excellence Redefined',
    subtitle: 'Our O-Level and Matriculation programmes deliver world-class education with outstanding results year after year.',
    cta: 'Our Academics',
    ctaHref: '/academics',
    bg: 'from-slate-900 via-primary to-primary-light',
  },
  {
    id: 3,
    title: 'A Community of Achievers',
    subtitle: 'With 12 campuses and 3,500+ students, Froebel\'s is Pakistan\'s trusted name in quality education.',
    cta: 'Learn More',
    ctaHref: '/about',
    bg: 'from-primary via-primary-dark to-slate-900',
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  const slide = slides[current];

  return (
    <section className={`relative bg-gradient-to-br ${slide.bg} min-h-[600px] flex items-center overflow-hidden`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}></div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            <span className="text-accent-light text-sm font-medium">Admissions Open 2025-26</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif leading-tight mb-6">
            {slide.title}
          </h1>
          <p className="text-blue-200 text-lg md:text-xl mb-8 leading-relaxed">
            {slide.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to={slide.ctaHref}
              className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/30"
            >
              {slide.cta}
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Controls */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={clsx(
              'w-2.5 h-2.5 rounded-full transition-all',
              i === current ? 'bg-accent w-6' : 'bg-white/40 hover:bg-white/70'
            )}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

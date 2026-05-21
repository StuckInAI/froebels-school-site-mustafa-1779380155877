import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 hero-gradient">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mb-4">
          Begin Your Child's Journey Today
        </h2>
        <p className="text-blue-200 text-lg max-w-xl mx-auto mb-10">
          Enrol your child in Froebel's School System and give them the best foundation for a bright future.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/admissions"
            className="bg-accent hover:bg-accent-dark text-white font-bold px-10 py-4 rounded-lg text-lg transition-all hover:shadow-lg"
          >
            Apply for Admission
          </Link>
          <a
            href="tel:+92213456789"
            className="flex items-center gap-2 border-2 border-white/50 text-white hover:bg-white/10 font-bold px-10 py-4 rounded-lg text-lg transition-all"
          >
            <Phone size={20} />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}

import { Link } from 'react-router-dom';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="inline-block bg-accent/20 border border-accent/30 rounded-full px-4 py-1.5 mb-5">
          <span className="text-accent-light text-sm font-medium">Admissions Open 2025-26</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white font-serif mb-4">
          Give Your Child the Best Start
        </h2>
        <p className="text-blue-200 text-lg mb-8 max-w-2xl mx-auto">
          Join the Froebel's family and give your child access to world-class education, expert teachers, and a community that cares.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/admissions"
            className="bg-accent hover:bg-accent-dark text-white font-bold px-8 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-accent/30"
          >
            Apply for Admission
          </Link>
          <Link
            to="/contact"
            className="border-2 border-white/40 text-white hover:bg-white/10 font-semibold px-8 py-3 rounded-lg transition-all"
          >
            Book a School Visit
          </Link>
        </div>
      </div>
    </section>
  );
}

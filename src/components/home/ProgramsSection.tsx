import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { programs } from '@/lib/data';

export default function ProgramsSection() {
  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Our Academic Programmes"
          subtitle="Comprehensive education from pre-school through O-Levels, designed to unlock every child's potential."
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog) => (
            <div key={prog.id} className="card-hover bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="text-4xl mb-4">{prog.icon}</div>
              <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">{prog.ageGroup}</div>
              <h3 className="text-xl font-bold text-primary font-serif mb-1">{prog.name}</h3>
              <p className="text-xs font-semibold text-gray-500 mb-3">{prog.level}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{prog.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/academics"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            View All Programmes
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

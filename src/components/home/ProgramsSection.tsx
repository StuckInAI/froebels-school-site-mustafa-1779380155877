import { Link } from 'react-router-dom';
import { programs } from '@/lib/data';

export default function ProgramsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="section-divider"></div>
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Academics</span>
            <div className="section-divider"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">Our Academic Programmes</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">From nursery to O-Levels, we offer a comprehensive curriculum that prepares students for success.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className={`card-hover border-2 rounded-xl p-6 flex flex-col gap-3 ${prog.color}`}
            >
              <div className="text-4xl">{prog.icon}</div>
              <h3 className="font-bold text-primary text-lg font-serif">{prog.name}</h3>
              <p className="text-xs font-semibold text-accent uppercase tracking-wide">{prog.grades}</p>
              <p className="text-gray-600 text-sm flex-1">{prog.description}</p>
              <Link
                to="/academics"
                className="text-primary font-semibold text-sm hover:text-accent transition-colors mt-auto"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

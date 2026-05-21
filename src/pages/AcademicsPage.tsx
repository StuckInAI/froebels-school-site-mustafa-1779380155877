import { programs } from '@/lib/data';
import { Link } from 'react-router-dom';

export default function AcademicsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary-dark to-primary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">Academic Programmes</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">From nursery to O-Levels — a comprehensive curriculum designed for success.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-10">
            {programs.map((prog, i) => (
              <div
                key={prog.id}
                className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={`rounded-2xl p-10 flex items-center justify-center min-h-56 ${prog.color} border-2`}>
                  <div className="text-center">
                    <div className="text-7xl mb-4">{prog.icon}</div>
                    <div className="text-primary font-bold text-xl font-serif">{prog.grades}</div>
                  </div>
                </div>
                <div className={i % 2 !== 0 ? 'lg:order-first' : ''}>
                  <span className="text-accent font-semibold text-sm uppercase tracking-widest">{prog.grades}</span>
                  <h2 className="text-2xl font-bold text-primary font-serif mt-1 mb-3">{prog.name}</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">{prog.description}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our experienced faculty use modern teaching methodologies combined with our signature Froebel approach to ensure every student reaches their full potential. Regular assessments, parent communication, and co-curricular activities complement the academic programme.
                  </p>
                  <Link
                    to="/admissions"
                    className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
                  >
                    Apply for {prog.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

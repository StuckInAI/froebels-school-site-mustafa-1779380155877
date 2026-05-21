import SectionHeader from '@/components/ui/SectionHeader';
import { programs } from '@/lib/data';

export default function AcademicsPage() {
  return (
    <div>
      <div className="hero-gradient py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">Academics</h1>
        <p className="text-blue-200 text-lg">Comprehensive education from nursery to O-Levels</p>
      </div>

      {/* Programme Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Our Academic Programmes"
            subtitle="Each programme is carefully designed to provide age-appropriate, challenging, and engaging education."
          />
          <div className="mt-12 space-y-10">
            {programs.map((prog, idx) => (
              <div
                key={prog.id}
                id={prog.name.toLowerCase().replace(/\s+/g, '')}
                className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center bg-white rounded-3xl p-8 shadow-md border border-gray-100`}
              >
                <div className="md:w-1/3 text-center">
                  <div className="text-8xl mb-4">{prog.icon}</div>
                  <div className="inline-block bg-primary/10 text-primary text-sm font-bold px-4 py-2 rounded-full">
                    {prog.ageGroup}
                  </div>
                </div>
                <div className="md:w-2/3">
                  <div className="text-accent text-xs font-bold uppercase tracking-widest mb-2">{prog.level}</div>
                  <h3 className="text-2xl font-bold text-primary font-serif mb-3">{prog.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">{prog.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Qualified & experienced faculty',
                      'Modern teaching methodologies',
                      'Regular assessments & feedback',
                      'Extra-curricular integration',
                    ].map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className="text-accent">✓</span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Details */}
      <section id="olevels" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            title="Cambridge O-Level Programme"
            subtitle="Our flagship international programme offering globally recognised qualifications."
          />
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Subjects Offered',
                icon: '📚',
                items: ['English Language', 'Mathematics', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Pakistan Studies', 'Islamiat', 'Economics', 'Additional Mathematics'],
              },
              {
                title: 'Why O-Levels?',
                icon: '🌍',
                items: ['Globally recognised qualification', 'University admission worldwide', 'Rigorous academic standards', 'Critical thinking focus', 'International benchmarking', 'Career advancement'],
              },
              {
                title: 'Our Track Record',
                icon: '🏆',
                items: ['95%+ A* & A grade rate', 'Multiple outstanding learners', 'Cambridge Centre of Excellence', '25+ years offering O-Levels', 'Top results in Pakistan', 'World & country high achievers'],
              },
            ].map((col) => (
              <div key={col.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="text-4xl mb-3">{col.icon}</div>
                <h3 className="font-bold text-primary text-xl font-serif mb-4">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-accent rounded-full shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

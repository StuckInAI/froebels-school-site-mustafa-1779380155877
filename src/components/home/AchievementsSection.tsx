import { achievements } from '@/lib/data';

export default function AchievementsSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="section-divider"></div>
            <span className="text-accent-light font-semibold text-sm uppercase tracking-widest">Achievements</span>
            <div className="section-divider"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white font-serif">Our Pride & Accomplishments</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((a) => (
            <div key={a.id} className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl p-6 text-center transition-colors card-hover">
              <div className="text-5xl mb-3">{a.icon}</div>
              <div className="inline-block bg-accent/20 text-accent-light text-xs font-bold px-3 py-1 rounded-full mb-3">{a.year}</div>
              <h3 className="font-bold text-white text-lg mb-2">{a.title}</h3>
              <p className="text-blue-200 text-sm">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

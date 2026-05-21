import SectionHeader from '@/components/ui/SectionHeader';
import { achievements } from '@/lib/data';

export default function AchievementsSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="Our Achievements"
          subtitle="Proud milestones that reflect our commitment to excellence and quality education."
          light
        />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach) => (
            <div
              key={ach.id}
              className="bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-6 text-center text-white transition-all"
            >
              <div className="text-5xl mb-4">{ach.icon}</div>
              <div className="text-accent text-xs font-bold uppercase tracking-wider mb-2">{ach.year}</div>
              <h3 className="font-bold text-lg font-serif mb-2">{ach.title}</h3>
              <p className="text-blue-200 text-sm leading-relaxed">{ach.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

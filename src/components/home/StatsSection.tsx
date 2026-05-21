import { stats } from '@/lib/data';

export default function StatsSection() {
  return (
    <section className="bg-accent py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center text-white">
              <div className="text-3xl mb-1">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold">{stat.value}</div>
              <div className="text-sm text-yellow-100 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

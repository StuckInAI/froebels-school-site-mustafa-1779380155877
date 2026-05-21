import { Link } from 'react-router-dom';
import { ArrowRight, Calendar } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
import { newsItems } from '@/lib/data';

export default function NewsSection() {
  const featured = newsItems.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="News & Events"
          subtitle="Stay informed with the latest happenings, achievements, and upcoming events at Froebel's."
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((item) => (
            <article key={item.id} className="card-hover bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <div className="bg-gradient-to-br from-primary to-primary-light h-44 flex items-center justify-center">
                <span className="text-6xl opacity-30">📰</span>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <Badge label={item.category} variant="accent" />
                  <span className="text-xs text-gray-400 flex items-center gap-1">
                    <Calendar size={12} />
                    {new Date(item.date).toLocaleDateString('en-PK', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </span>
                </div>
                <h3 className="font-bold text-gray-800 text-base leading-snug mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{item.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/news"
            className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-lg transition-all"
          >
            View All News
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

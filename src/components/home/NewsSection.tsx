import { Link } from 'react-router-dom';
import { newsItems } from '@/lib/data';
import { Calendar, Tag } from 'lucide-react';

export default function NewsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="section-divider"></div>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Latest</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif">News & Events</h2>
          </div>
          <Link to="/news" className="text-primary font-semibold hover:text-accent transition-colors text-sm">
            View All News →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item) => (
            <div key={item.id} className="card-hover bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
              <div className="h-40 bg-secondary flex items-center justify-center">
                <span className="text-primary/30 font-serif text-5xl font-bold">F</span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex items-center gap-1 text-xs text-accent font-semibold">
                    <Tag size={11} />{item.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar size={11} />{item.date}
                  </span>
                </div>
                <h3 className="font-bold text-primary text-sm leading-snug mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{item.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

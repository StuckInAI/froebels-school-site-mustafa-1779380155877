import { newsItems } from '@/lib/data';
import { Calendar, Tag } from 'lucide-react';

export default function NewsPage() {
  return (
    <div>
      <section className="bg-gradient-to-br from-primary-dark to-primary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">News & Events</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">Stay updated with the latest happenings at Froebel's School System.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...newsItems, ...newsItems].map((item, i) => (
              <div key={`${item.id}-${i}`} className="card-hover bg-white rounded-xl overflow-hidden shadow-sm">
                <div className="h-48 bg-secondary flex items-center justify-center">
                  <span className="text-primary/20 font-serif text-7xl font-bold">F</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex items-center gap-1 text-xs text-accent font-semibold bg-accent/10 px-2 py-1 rounded-full">
                      <Tag size={11} />{item.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Calendar size={11} />{item.date}
                    </span>
                  </div>
                  <h3 className="font-bold text-primary text-lg leading-snug mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.excerpt}</p>
                  <button className="text-primary font-semibold text-sm hover:text-accent transition-colors">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

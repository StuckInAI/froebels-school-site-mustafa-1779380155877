import { useState } from 'react';
import { Calendar, Tag } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import Badge from '@/components/ui/Badge';
import { newsItems } from '@/lib/data';

const categories = ['All', 'Academic', 'Events', 'Achievement', 'Facility'];

export default function NewsPage() {
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? newsItems : newsItems.filter((n) => n.category === filter);

  return (
    <div>
      <div className="hero-gradient py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">News & Events</h1>
        <p className="text-blue-200 text-lg">Latest happenings from Froebel's School System</p>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Latest News" subtitle="Stay updated with school news, achievements, and upcoming events." />

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mt-8 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-secondary text-gray-600 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((item) => (
              <article key={item.id} className="card-hover bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
                <div className="bg-gradient-to-br from-primary to-primary-light h-44 flex items-center justify-center">
                  <span className="text-7xl opacity-25">📰</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge label={item.category} variant="accent" />
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar size={12} />
                      {new Date(item.date).toLocaleDateString('en-PK', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                  </div>
                  <h2 className="font-bold text-gray-800 text-base leading-snug mb-3">{item.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.excerpt}</p>
                  <button className="mt-4 text-primary font-semibold text-sm hover:text-accent transition-colors flex items-center gap-1">
                    <Tag size={13} />
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">📭</div>
              <p className="text-lg">No news items found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

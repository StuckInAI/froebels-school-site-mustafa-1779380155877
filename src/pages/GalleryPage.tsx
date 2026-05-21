import { useState } from 'react';

const categories = ['All', 'Sports', 'Academics', 'Events', 'Arts', 'Infrastructure'];

const galleryPlaceholders = [
  { id: 1, title: 'Annual Sports Day 2024', category: 'Sports', emoji: '🏅', bg: 'bg-green-100' },
  { id: 2, title: 'Science Exhibition', category: 'Academics', emoji: '🔬', bg: 'bg-blue-100' },
  { id: 3, title: 'Graduation Ceremony', category: 'Events', emoji: '🎓', bg: 'bg-purple-100' },
  { id: 4, title: 'Art & Craft Display', category: 'Arts', emoji: '🎨', bg: 'bg-pink-100' },
  { id: 5, title: 'Computer Lab', category: 'Infrastructure', emoji: '💻', bg: 'bg-gray-100' },
  { id: 6, title: 'Library', category: 'Infrastructure', emoji: '📚', bg: 'bg-yellow-100' },
  { id: 7, title: 'Football Championship', category: 'Sports', emoji: '⚽', bg: 'bg-green-100' },
  { id: 8, title: 'Annual Day Celebration', category: 'Events', emoji: '🎉', bg: 'bg-orange-100' },
  { id: 9, title: 'Debate Competition', category: 'Academics', emoji: '🎤', bg: 'bg-blue-100' },
  { id: 10, title: 'School Play', category: 'Arts', emoji: '🎭', bg: 'bg-pink-100' },
  { id: 11, title: 'Cricket Match', category: 'Sports', emoji: '🏏', bg: 'bg-green-100' },
  { id: 12, title: 'New Campus Opening', category: 'Events', emoji: '🏫', bg: 'bg-purple-100' },
];

export default function GalleryPage() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All'
    ? galleryPlaceholders
    : galleryPlaceholders.filter((g) => g.category === active);

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-dark to-primary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">Photo Gallery</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">Glimpses of life at Froebel's — memories, milestones, and moments that matter.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors ${
                  active === cat
                    ? 'bg-primary text-white'
                    : 'bg-white border border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item) => (
              <div key={item.id} className={`card-hover ${item.bg} rounded-xl overflow-hidden aspect-square flex flex-col items-center justify-center gap-2 cursor-pointer`}>
                <span className="text-5xl">{item.emoji}</span>
                <span className="text-sm font-semibold text-gray-700 text-center px-3">{item.title}</span>
                <span className="text-xs text-gray-500 bg-white/60 px-2 py-0.5 rounded-full">{item.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

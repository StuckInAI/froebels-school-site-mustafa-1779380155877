import { CheckCircle, Award, Users, BookOpen } from 'lucide-react';

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">About Froebel's</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">Nearly five decades of nurturing minds, shaping characters, and building Pakistan's future leaders.</p>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="section-divider"></div>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Our History</span>
            </div>
            <h2 className="text-3xl font-bold text-primary font-serif mb-4">A Legacy Since 1975</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Froebel's School System was established in 1975, inspired by the educational philosophy of Friedrich Froebel — the German educator who founded the concept of kindergarten. Our founders believed that education should be holistic, nurturing both the mind and the spirit of every child.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              What began as a single campus in Karachi has grown into a network of 12 campuses, serving over 3,500 students from Pre-Primary through O-Levels and Matriculation.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Today, Froebel's stands as one of Pakistan's most respected educational institutions, with a track record of producing graduates who excel in higher education and beyond.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: BookOpen, label: 'Founded', value: '1975', color: 'bg-blue-50' },
              { icon: Users, label: 'Students', value: '3,500+', color: 'bg-green-50' },
              { icon: Award, label: 'Campuses', value: '12', color: 'bg-orange-50' },
              { icon: CheckCircle, label: 'Teachers', value: '250+', color: 'bg-purple-50' },
            ].map((item) => (
              <div key={item.label} className={`${item.color} rounded-xl p-6 text-center`}>
                <item.icon className="text-primary mx-auto mb-2" size={28} />
                <div className="text-2xl font-bold text-primary font-serif">{item.value}</div>
                <div className="text-sm text-gray-500 mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="section-divider"></div>
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Our Purpose</span>
              <div className="section-divider"></div>
            </div>
            <h2 className="text-3xl font-bold text-primary font-serif">Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border-t-4 border-primary">
              <h3 className="text-xl font-bold text-primary font-serif mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide quality education that develops the intellectual, moral, social, and physical potential of every student in a safe, stimulating, and supportive environment — preparing them to be responsible citizens and lifelong learners.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-sm border-t-4 border-accent">
              <h3 className="text-xl font-bold text-primary font-serif mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be Pakistan's leading educational institution, recognized for academic excellence, character development, and innovation — producing graduates who are equipped to lead, serve, and succeed in a rapidly changing world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary font-serif">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { emoji: '🎓', label: 'Excellence' },
              { emoji: '🤝', label: 'Integrity' },
              { emoji: '💡', label: 'Innovation' },
              { emoji: '❤️', label: 'Compassion' },
              { emoji: '🌍', label: 'Diversity' },
              { emoji: '💪', label: 'Resilience' },
            ].map((v) => (
              <div key={v.label} className="text-center bg-secondary rounded-xl p-5">
                <div className="text-4xl mb-2">{v.emoji}</div>
                <div className="font-semibold text-primary">{v.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

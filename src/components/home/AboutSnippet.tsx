import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

const points = [
  'Established in 1975 with a commitment to quality education',
  'Cambridge-affiliated institution offering O-Levels',
  'Experienced and qualified faculty of 200+ teachers',
  'State-of-the-art facilities across 12 campuses',
  'Holistic development through academics & extra-curricular',
  'Safe and nurturing learning environment',
];

export default function AboutSnippet() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=80"
                alt="Students in classroom"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-4 bg-accent text-white p-5 rounded-xl shadow-xl">
              <div className="text-3xl font-bold">49+</div>
              <div className="text-sm text-yellow-100">Years of Excellence</div>
            </div>
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/10 rounded-full"></div>
          </div>

          {/* Text side */}
          <div>
            <SectionHeader
              title="About Froebel's"
              subtitle="A legacy of nurturing bright minds and responsible citizens for nearly five decades."
              centered={false}
            />
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {points.map((pt) => (
                <div key={pt} className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-accent shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{pt}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex gap-4">
              <Link
                to="/about"
                className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Read More
              </Link>
              <Link
                to="/contact"
                className="border-2 border-primary text-primary hover:bg-secondary font-semibold px-6 py-3 rounded-lg transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

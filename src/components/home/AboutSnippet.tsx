import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const highlights = [
  'Play-based Froebel methodology since 1975',
  'Experienced & certified teaching staff',
  'State-of-the-art classrooms & labs',
  'Strong focus on character development',
  'Consistent board & Cambridge toppers',
  '12 campuses across Karachi',
];

export default function AboutSnippet() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">
        {/* Visual */}
        <div className="relative">
          <div className="bg-secondary rounded-2xl p-8 flex items-center justify-center min-h-72">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-4xl font-bold font-serif">F</span>
              </div>
              <p className="text-primary font-serif text-2xl font-bold">Froebel's</p>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest">School System</p>
              <p className="text-gray-500 text-sm mt-2">Est. 1975</p>
            </div>
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-5 -right-5 bg-accent text-white rounded-xl px-5 py-3 shadow-lg">
            <div className="text-2xl font-bold">49+</div>
            <div className="text-xs font-medium">Years of Excellence</div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="section-divider"></div>
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">About Us</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-4">
            A Legacy of Learning & Leadership
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Founded in 1975, Froebel's School System has been at the forefront of quality education in Pakistan. Named after Friedrich Froebel, the father of kindergarten, our school has built a reputation for academic excellence, holistic development, and producing confident, capable graduates.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Our 12 campuses across Karachi serve over 3,500 students with a dedicated team of 250+ qualified educators committed to nurturing every child's potential.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
                <CheckCircle size={16} className="text-accent shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            to="/about"
            className="inline-flex items-center bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Read More About Us
          </Link>
        </div>
      </div>
    </section>
  );
}

import { Users } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { facultyMembers } from '@/lib/data';

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="py-20 hero-gradient">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white font-serif mb-4">About Froebel's</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Nearly five decades of nurturing bright minds and shaping responsible citizens.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <SectionHeader title="Our History" subtitle="A legacy built on dedication, excellence, and a passion for learning." centered={false} />
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 1975, Froebel's School System began as a single campus with a vision to provide quality education that goes beyond textbooks. Named after Friedrich Froebel, the pioneer of early childhood education, the school embodies his philosophy that education should nurture the whole child.
                </p>
                <p>
                  Over the decades, Froebel's has grown to 12 campuses across Pakistan, serving over 3,500 students. Our affiliation with Cambridge International enables us to offer globally recognized O-Level qualifications alongside the national curriculum.
                </p>
                <p>
                  Today, Froebel's stands as one of Pakistan's most respected educational institutions, known for academic excellence, character development, and producing leaders who make a positive impact in society.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=80"
                alt="School building"
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Mission & Vision" subtitle="Guiding principles that shape everything we do." />
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-primary font-serif mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide a holistic education that develops intellectual curiosity, moral character, and the skills needed to thrive in a rapidly changing world. We are committed to creating a safe, inclusive, and stimulating environment where every student can reach their full potential.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🌟</div>
              <h3 className="text-2xl font-bold text-primary font-serif mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be Pakistan's leading educational institution that produces globally competitive, ethically grounded, and socially responsible graduates who contribute meaningfully to their communities and the world at large.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Principal's Message" />
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-secondary rounded-2xl p-10 flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold shrink-0">
                A
              </div>
              <div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Welcome to Froebel's School System. It is my privilege to lead this outstanding institution that has been shaping young minds for nearly five decades. Our commitment to academic excellence, moral development, and holistic education remains unwavering.
                  </p>
                  <p>
                    At Froebel's, we believe that every child is unique and has unlimited potential. Our dedicated faculty works tirelessly to nurture each student's individual strengths while building a solid academic foundation.
                  </p>
                  <p>
                    We look forward to partnering with families to create an enriching educational journey for every student. Together, we can build a brighter future.
                  </p>
                </div>
                <div className="mt-4 font-bold text-primary italic">— Dr. Ayesha Malik, Principal</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Our Leadership Team" subtitle="Experienced educators dedicated to your child's success." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facultyMembers.map((f) => (
              <div key={f.id} className="card-hover bg-white rounded-2xl p-6 text-center shadow-sm">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {f.name.charAt(0)}
                </div>
                <h3 className="font-bold text-primary text-lg">{f.name}</h3>
                <p className="text-accent font-semibold text-sm">{f.designation}</p>
                <p className="text-gray-500 text-sm mt-1">{f.department}</p>
                <div className="mt-3 pt-3 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-1 text-gray-500 text-xs">
                    <Users size={12} />
                    <span>{f.qualification}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

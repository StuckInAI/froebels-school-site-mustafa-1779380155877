import { Users } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { facultyMembers } from '@/lib/data';

export default function AboutPage() {
  return (
    <div>
      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Our Mission & Vision" subtitle="Guiding principles that shape everything we do." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide a holistic, inclusive, and innovative education that empowers every student to achieve academic excellence, develop strong moral values, and become a responsible citizen of the world.
              </p>
            </div>
            <div className="bg-secondary rounded-2xl p-8">
              <h3 className="text-xl font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading educational institution in Pakistan, recognized globally for producing confident, creative, and compassionate leaders who contribute positively to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeader title="Principal's Message" />
          <div className="mt-10 bg-white rounded-2xl shadow-sm p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center text-white text-3xl font-bold shrink-0 mx-auto md:mx-0">
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

import { Users } from 'lucide-react';
import { facultyMembers } from '@/lib/data';
import SectionHeader from '@/components/ui/SectionHeader';

export default function AboutPage() {
  return (
    <div>
      {/* Principal's Message */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <SectionHeader title="Principal's Message" />
            <div className="mt-8">
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

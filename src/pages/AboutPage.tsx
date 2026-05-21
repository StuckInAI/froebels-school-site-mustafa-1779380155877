import { Users } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { facultyMembers } from '@/lib/data';

export default function AboutPage() {
  return (
    <div>
      {/* Page Banner */}
      <div className="hero-gradient py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">About Froebel's</h1>
        <p className="text-blue-200 text-lg">Excellence in Education Since 1975</p>
      </div>

      {/* History */}
      <section id="history" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader title="Our History" subtitle="" centered={false} />
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Froebel's School System was founded in 1975 with a vision to provide quality education rooted in the principles of Friedrich Froebel, the pioneering German educator who believed in the natural development of children.
                </p>
                <p>
                  From a single campus in Karachi, we have grown to 12 campuses spread across major cities of Pakistan, serving over 3,500 students and employing more than 200 qualified teachers and staff.
                </p>
                <p>
                  For nearly five decades, Froebel's has remained committed to academic excellence, character building, and the holistic development of every student who passes through its doors.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=700&q=80"
                alt="School history"
                className="rounded-2xl shadow-xl w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section id="mission" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Mission & Vision" subtitle="Our guiding principles that drive everything we do." />
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-primary">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">📖</span>
              </div>
              <h3 className="text-2xl font-bold text-primary font-serif mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide an exceptional educational experience that equips students with knowledge, skills, and values to become responsible, contributing members of society. We strive to create a stimulating learning environment that fosters critical thinking, creativity, and a love of learning.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-accent">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                <span className="text-white text-xl">🏆</span>
              </div>
              <h3 className="text-2xl font-bold text-primary font-serif mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be Pakistan's leading educational institution, recognized internationally for producing well-rounded graduates who are academically excellent, morally upright, and globally competitive. We envision a future where every Froebel's alumnus is a leader in their chosen field.
              </p>
            </div>
          </div>

          {/* Core Values */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: '📖', title: 'Academic Excellence', desc: 'Highest standards in all academic pursuits' },
              { icon: '🤝', title: 'Integrity', desc: 'Honesty and ethical conduct in all actions' },
              { icon: '🌍', title: 'Diversity', desc: 'Celebrating every background and perspective' },
              { icon: '💡', title: 'Innovation', desc: 'Embracing new ideas and technologies' },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-5 text-center shadow-sm">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h4 className="font-bold text-primary text-sm mb-1">{v.title}</h4>
                <p className="text-gray-500 text-xs">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section id="principal" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Principal's Message" />
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-secondary rounded-3xl p-8 md:p-12 flex flex-col md:flex-row gap-8 items-start">
              <div className="shrink-0">
                <div className="w-28 h-28 bg-primary rounded-full flex items-center justify-center text-white text-4xl font-bold font-serif">
                  A
                </div>
                <div className="text-center mt-3">
                  <div className="font-bold text-primary">Dr. Ayesha Malik</div>
                  <div className="text-sm text-gray-500">Principal</div>
                </div>
              </div>
              <div>
                <div className="text-5xl text-accent/30 font-serif leading-none mb-2">&ldquo;</div>
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

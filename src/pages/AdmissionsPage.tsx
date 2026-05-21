import { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';

type FormData = {
  studentName: string;
  parentName: string;
  phone: string;
  email: string;
  grade: string;
  campus: string;
  message: string;
};

const initialForm: FormData = {
  studentName: '',
  parentName: '',
  phone: '',
  email: '',
  grade: '',
  campus: '',
  message: '',
};

export default function AdmissionsPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: any) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.studentName || !form.parentName || !form.phone || !form.grade) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div>
      <div className="hero-gradient py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">Admissions</h1>
        <p className="text-blue-200 text-lg">Join the Froebel's family — Admissions open for 2025-26</p>
      </div>

      {/* How to Apply */}
      <section id="apply" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="How to Apply" subtitle="Our simple 4-step admission process." />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Inquiry', desc: 'Visit our campus or fill the online inquiry form to learn about available seats.' },
              { step: '02', title: 'Application', desc: 'Submit the completed application form along with required documents.' },
              { step: '03', title: 'Assessment', desc: 'Student undergoes an age-appropriate assessment or entrance test.' },
              { step: '04', title: 'Enrollment', desc: 'Upon selection, complete the enrollment process and fee payment.' },
            ].map((s) => (
              <div key={s.step} className="bg-secondary rounded-2xl p-6 text-center relative">
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-primary text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents */}
      <section className="py-14 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Required Documents" subtitle="Please prepare the following documents for admission." />
          <div className="mt-8 max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              'Birth Certificate (original & copy)',
              'Previous school leaving certificate',
              'Last academic result / report card',
              'Recent passport-size photographs (x4)',
              "Parent's/Guardian's CNIC copy",
              'Vaccination record (for Pre-School)',
            ].map((doc) => (
              <div key={doc} className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm">
                <CheckCircle size={18} className="text-accent shrink-0" />
                <span className="text-gray-700 text-sm">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section id="fees" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Fee Structure" subtitle="Transparent fee structure for all academic programmes." />
          <div className="mt-12 max-w-3xl mx-auto">
            <div className="overflow-x-auto rounded-2xl shadow-md">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="py-4 px-6 text-left">Programme</th>
                    <th className="py-4 px-6 text-right">Monthly Fee</th>
                    <th className="py-4 px-6 text-right">Registration</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { prog: 'Pre-School (Nursery & KG)', fee: 'PKR 8,500', reg: 'PKR 5,000' },
                    { prog: 'Primary (Grades 1–5)', fee: 'PKR 10,500', reg: 'PKR 7,000' },
                    { prog: 'Middle School (Grades 6–8)', fee: 'PKR 13,000', reg: 'PKR 9,000' },
                    { prog: 'Secondary / Matric', fee: 'PKR 15,500', reg: 'PKR 11,000' },
                    { prog: 'O-Level Programme', fee: 'PKR 22,000', reg: 'PKR 15,000' },
                  ].map((row, i) => (
                    <tr key={row.prog} className={i % 2 === 0 ? 'bg-white' : 'bg-secondary'}>
                      <td className="py-3 px-6 text-gray-700">{row.prog}</td>
                      <td className="py-3 px-6 text-right font-semibold text-primary">{row.fee}</td>
                      <td className="py-3 px-6 text-right text-gray-600">{row.reg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">* Fees are subject to annual revision. Additional charges may apply for transport, books, and activities.</p>
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section id="scholarships" className="py-14 bg-secondary">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader title="Scholarships" subtitle="Rewarding academic excellence and supporting deserving students." />
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: 'Merit Scholarship', icon: '🏆', desc: 'Up to 50% fee waiver for students with outstanding academic performance.' },
              { title: 'Need-Based Aid', icon: '🤝', desc: 'Financial assistance for deserving students from low-income families.' },
              { title: 'Sibling Discount', icon: '👨‍👩‍👧‍👦', desc: '10% discount on monthly fee for second and subsequent siblings enrolled.' },
            ].map((s) => (
              <div key={s.title} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h3 className="font-bold text-primary text-lg mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <SectionHeader title="Online Inquiry Form" subtitle="Submit your inquiry and we will get back to you promptly." />
          <div className="mt-10">
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-700 mb-2">Inquiry Submitted!</h3>
                <p className="text-green-600">Thank you for your interest in Froebel's. Our admissions team will contact you within 2 working days.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm(initialForm); }}
                  className="mt-6 bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-secondary rounded-2xl p-8 space-y-5">
                {error && (
                  <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
                    <AlertCircle size={16} />
                    {error}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Student Name *</label>
                    <input
                      type="text" name="studentName" value={form.studentName} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
                      placeholder="Student's full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Parent Name *</label>
                    <input
                      type="text" name="parentName" value={form.parentName} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
                      placeholder="Parent/Guardian name"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
                    <input
                      type="tel" name="phone" value={form.phone} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
                      placeholder="+92-XXX-XXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Email</label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Grade Applying For *</label>
                    <select
                      name="grade" value={form.grade} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
                    >
                      <option value="">Select Grade</option>
                      {['Nursery', 'KG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9 (Matric)', 'Grade 10 (Matric)', 'O-Level'].map((g) => (
                        <option key={g} value={g}>{g}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Preferred Campus</label>
                    <select
                      name="campus" value={form.campus} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white"
                    >
                      <option value="">Select Campus</option>
                      {['Main Campus', 'DHA Campus', 'Gulshan Campus', 'North Nazimabad Campus', 'Clifton Campus'].map((c) => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Additional Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange} rows={3}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 bg-white resize-none"
                    placeholder="Any questions or special requirements..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-lg transition-colors text-base"
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

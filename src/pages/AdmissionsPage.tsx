import { useState } from 'react';
import { CheckCircle, Clock, FileText, Users } from 'lucide-react';

type FormData = {
  studentName: string;
  dateOfBirth: string;
  grade: string;
  parentName: string;
  email: string;
  phone: string;
  message: string;
};

const initialForm: FormData = {
  studentName: '',
  dateOfBirth: '',
  grade: '',
  parentName: '',
  email: '',
  phone: '',
  message: '',
};

export default function AdmissionsPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-primary-dark to-primary py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white font-serif mb-4">Admissions 2025-26</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">Join the Froebel's family. Applications are now open for the 2025-26 academic year.</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary font-serif text-center mb-10">Admission Process</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: FileText, step: '01', title: 'Submit Application', desc: 'Fill out the online admission form with your child\'s details.' },
              { icon: Clock, step: '02', title: 'Document Review', desc: 'Our team reviews the submitted documents within 3-5 working days.' },
              { icon: Users, step: '03', title: 'Assessment', desc: 'Age-appropriate assessment or interview scheduled for the student.' },
              { icon: CheckCircle, step: '04', title: 'Confirmation', desc: 'Receive admission confirmation and fee payment instructions.' },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                  <item.icon size={20} className="text-white" />
                </div>
                <div className="text-accent font-bold text-sm mb-1">Step {item.step}</div>
                <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-primary font-serif text-center mb-8">Online Admission Enquiry</h2>
          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <CheckCircle className="text-green-500 mx-auto mb-3" size={40} />
              <h3 className="font-bold text-green-800 text-xl mb-2">Application Submitted!</h3>
              <p className="text-green-700">Thank you for your interest in Froebel's. Our admissions team will contact you within 2-3 working days.</p>
              <button
                onClick={() => { setSubmitted(false); setForm(initialForm); }}
                className="mt-4 text-primary font-semibold underline text-sm"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm flex flex-col gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Student Name *</label>
                  <input name="studentName" value={form.studentName} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Date of Birth *</label>
                  <input type="date" name="dateOfBirth" value={form.dateOfBirth} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Applying for Grade *</label>
                <select name="grade" value={form.grade} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary">
                  <option value="">Select grade</option>
                  {['Nursery', 'KG 1', 'KG 2', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9 (Matric)', 'Grade 9 (O-Level)', 'Grade 10 (Matric)', 'Grade 10 (O-Level)'].map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Parent/Guardian Name *</label>
                  <input name="parentName" value={form.parentName} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="Full name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="+92-XXX-XXXXXXX" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Email Address *</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Additional Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={3} className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none" placeholder="Any questions or special requirements..."></textarea>
              </div>
              <button type="submit" className="bg-accent hover:bg-accent-dark text-white font-bold py-3 rounded-lg transition-colors">
                Submit Enquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}

import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary text-xl font-bold font-serif">F</span>
            </div>
            <div>
              <div className="font-bold text-lg font-serif">Froebel's</div>
              <div className="text-accent-light text-xs uppercase tracking-widest">School System</div>
            </div>
          </div>
          <p className="text-blue-200 text-sm leading-relaxed mb-4">
            Excellence in Education since 1975. Nurturing minds, building character, and shaping the leaders of tomorrow.
          </p>
          <div className="flex gap-3">
            {[
              { icon: Facebook, label: 'Facebook' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Instagram, label: 'Instagram' },
              { icon: Youtube, label: 'YouTube' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-8 h-8 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold text-accent-light mb-4 uppercase text-sm tracking-widest">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: 'About Us', href: '/about' },
              { label: 'Academic Programs', href: '/academics' },
              { label: 'Admissions', href: '/admissions' },
              { label: 'News & Events', href: '/news' },
              { label: 'Photo Gallery', href: '/gallery' },
              { label: 'Contact Us', href: '/contact' },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-blue-200 hover:text-accent-light text-sm transition-colors flex items-center gap-1"
                >
                  <span className="text-accent">›</span> {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Programs */}
        <div>
          <h4 className="font-bold text-accent-light mb-4 uppercase text-sm tracking-widest">Programs</h4>
          <ul className="space-y-2">
            {['Pre-Primary', 'Primary School', 'Middle School', 'Matriculation', 'O-Levels'].map((p) => (
              <li key={p}>
                <Link
                  to="/academics"
                  className="text-blue-200 hover:text-accent-light text-sm transition-colors flex items-center gap-1"
                >
                  <span className="text-accent">›</span> {p}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold text-accent-light mb-4 uppercase text-sm tracking-widest">Contact</h4>
          <ul className="space-y-3">
            <li className="flex gap-3 text-sm text-blue-200">
              <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
              <span>Main Campus, Gulshan-e-Iqbal, Karachi, Pakistan</span>
            </li>
            <li>
              <a href="tel:+92213456789" className="flex gap-3 text-sm text-blue-200 hover:text-accent-light transition-colors">
                <Phone size={16} className="text-accent shrink-0" />
                <span>+92-21-3456789</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@froebels.edu.pk" className="flex gap-3 text-sm text-blue-200 hover:text-accent-light transition-colors">
                <Mail size={16} className="text-accent shrink-0" />
                <span>info@froebels.edu.pk</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-blue-300">
          <span>© {new Date().getFullYear()} Froebel's School System. All rights reserved.</span>
          <span>Designed with ❤️ for quality education</span>
        </div>
      </div>
    </footer>
  );
}

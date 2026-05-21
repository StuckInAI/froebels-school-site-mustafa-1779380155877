import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-primary text-xl font-bold font-serif">F</span>
            </div>
            <div>
              <div className="font-bold text-lg font-serif">Froebel's</div>
              <div className="text-accent text-xs uppercase tracking-widest">School System</div>
            </div>
          </div>
          <p className="text-blue-200 text-sm leading-relaxed mb-5">
            Froebel's School System has been a beacon of excellence in education since 1975, nurturing generations of leaders, thinkers, and responsible citizens.
          </p>
          <div className="flex gap-3">
            {[
              { Icon: Facebook, href: '#' },
              { Icon: Twitter, href: '#' },
              { Icon: Instagram, href: '#' },
              { Icon: Youtube, href: '#' },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-9 h-9 bg-white/10 hover:bg-accent rounded-full flex items-center justify-center transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4 relative">
            Quick Links
            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent"></span>
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              { label: 'About Us', href: '/about' },
              { label: 'Academics', href: '/academics' },
              { label: 'Admissions', href: '/admissions' },
              { label: 'News & Events', href: '/news' },
              { label: 'Gallery', href: '/gallery' },
              { label: 'Contact Us', href: '/contact' },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="text-blue-200 hover:text-accent text-sm transition-colors flex items-center gap-2"
                >
                  <span className="text-accent text-xs">›</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Academic Programs */}
        <div>
          <h3 className="font-bold text-lg mb-4 relative">
            Programmes
            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent"></span>
          </h3>
          <ul className="mt-4 space-y-2">
            {[
              'Pre-School (Nursery & KG)',
              'Primary School (Gr. 1-5)',
              'Middle School (Gr. 6-8)',
              'Secondary (Matric)',
              'O-Level Programme',
              'Extra-Curricular Activities',
            ].map((prog) => (
              <li key={prog} className="text-blue-200 text-sm flex items-center gap-2">
                <span className="text-accent text-xs">›</span>
                {prog}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4 relative">
            Contact Us
            <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-accent"></span>
          </h3>
          <ul className="mt-4 space-y-4">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-accent shrink-0 mt-0.5" />
              <span className="text-blue-200 text-sm">Froebel's School System, Multiple Campuses across Pakistan</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-accent shrink-0" />
              <a href="tel:+92213456789" className="text-blue-200 hover:text-accent text-sm transition-colors">
                +92-21-3456789
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-accent shrink-0" />
              <a href="mailto:info@froebels.edu.pk" className="text-blue-200 hover:text-accent text-sm transition-colors">
                info@froebels.edu.pk
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-blue-300">
          <p>© {new Date().getFullYear()} Froebel's School System. All rights reserved.</p>
          <p>Excellence in Education Since 1975</p>
        </div>
      </div>
    </footer>
  );
}

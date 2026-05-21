import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react';
import { navItems } from '@/lib/data';
import clsx from 'clsx';
import type { NavItem } from '@/types';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (href: string) =>
    href === '/' ? location.pathname === '/' : location.pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top bar */}
      <div className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+92213456789" className="flex items-center gap-1 hover:text-accent-light transition-colors">
              <Phone size={13} />
              <span>+92-21-3456789</span>
            </a>
            <a href="mailto:info@froebels.edu.pk" className="flex items-center gap-1 hover:text-accent-light transition-colors">
              <Mail size={13} />
              <span>info@froebels.edu.pk</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-xs text-blue-200">Excellence in Education Since 1975</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-md">
              <span className="text-white text-2xl font-bold font-serif">F</span>
            </div>
            <div>
              <div className="text-primary font-bold text-xl leading-tight font-serif">Froebel's</div>
              <div className="text-accent text-xs font-semibold uppercase tracking-widest">School System</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <DesktopNavItem
                key={item.label}
                item={item}
                isActive={isActive(item.href)}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
              />
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link
              to="/admissions"
              className="hidden md:inline-flex items-center bg-accent hover:bg-accent-dark text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              Apply Now
            </Link>
            <button
              className="lg:hidden text-primary p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <MobileNavItem
                key={item.label}
                item={item}
                isActive={isActive(item.href)}
                onClose={() => setMobileOpen(false)}
              />
            ))}
            <Link
              to="/admissions"
              className="mt-3 bg-accent text-white text-center py-2 rounded font-semibold"
              onClick={() => setMobileOpen(false)}
            >
              Apply Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

type DesktopNavItemProps = {
  item: NavItem;
  isActive: boolean;
  openDropdown: string | null;
  setOpenDropdown: (v: string | null) => void;
};

function DesktopNavItem({ item, isActive, openDropdown, setOpenDropdown }: DesktopNavItemProps) {
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div
      className="relative group"
      onMouseEnter={() => hasChildren && setOpenDropdown(item.label)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <Link
        to={item.href}
        className={clsx(
          'nav-link flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded transition-colors',
          isActive
            ? 'text-accent'
            : 'text-gray-700 hover:text-primary'
        )}
      >
        {item.label}
        {hasChildren && <ChevronDown size={14} />}
      </Link>
      {hasChildren && openDropdown === item.label && (
        <div className="dropdown-menu absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl border border-gray-100 min-w-52 z-50" style={{ display: 'block' }}>
          {item.children!.map((child) => (
            <Link
              key={child.label}
              to={child.href}
              className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-secondary hover:text-primary transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

type MobileNavItemProps = {
  item: NavItem;
  isActive: boolean;
  onClose: () => void;
};

function MobileNavItem({ item, isActive, onClose }: MobileNavItemProps) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  return (
    <div>
      <div className="flex items-center justify-between">
        <Link
          to={item.href}
          className={clsx(
            'flex-1 py-2 text-sm font-semibold',
            isActive ? 'text-accent' : 'text-gray-700'
          )}
          onClick={!hasChildren ? onClose : undefined}
        >
          {item.label}
        </Link>
        {hasChildren && (
          <button
            onClick={() => setOpen(!open)}
            className="p-2 text-gray-500"
          >
            <ChevronDown size={16} className={clsx('transition-transform', open && 'rotate-180')} />
          </button>
        )}
      </div>
      {hasChildren && open && (
        <div className="ml-4 flex flex-col gap-1 border-l-2 border-gray-100 pl-3">
          {item.children!.map((child) => (
            <Link
              key={child.label}
              to={child.href}
              className="py-1.5 text-sm text-gray-600 hover:text-primary"
              onClick={onClose}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

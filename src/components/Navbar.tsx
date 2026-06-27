import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';
import { clinicConfig, getPhoneUrl } from '../config/clinicConfig';
import { Button } from './ui/Button';

const navLinks = [
  { key: 'nav.home', to: '/' },
  { key: 'nav.services', to: '/services' },
  { key: 'nav.about', to: '/about' },
  { key: 'nav.faq', to: '/faq' },
  { key: 'nav.contact', to: '/contact' },
];

export function Navbar() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-4'}
      `}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group"
            aria-label="Kawade Dental Clinic Home"
          >
            <div className="w-9 h-9 rounded-xl bg-[#0077b6] flex items-center justify-center shadow-md group-hover:bg-[#00b4d8] transition-colors duration-300">
              <span className="text-white font-black text-lg leading-none">K</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-[#1f2937] text-base leading-tight">
                {clinicConfig.clinicName}
              </p>
              <p className="text-xs text-[#6b7280] leading-tight">
                {clinicConfig.doctorTitle}
              </p>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map(({ key, to }) => (
              <li key={key}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'text-[#0077b6] bg-[#0077b6]/10'
                        : 'text-[#374151] hover:text-[#0077b6] hover:bg-[#0077b6]/5'
                    }`
                  }
                >
                  {t(key)}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <Button
              as="a"
              href={getPhoneUrl()}
              variant="outline"
              size="sm"
              icon={<Phone size={14} />}
              iconPosition="left"
            >
              {clinicConfig.phoneDisplay}
            </Button>
            <Button as="a" href="/contact" variant="primary" size="sm">
              {t('nav.bookAppointment')}
            </Button>
          </div>

          {/* Mobile: Language + Hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              id="mobile-menu-btn"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="p-2 rounded-lg text-[#374151] hover:text-[#0077b6] hover:bg-[#0077b6]/5 transition-colors duration-200"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="pt-2 pb-4 flex flex-col gap-1 border-t border-gray-100 mt-3">
                {navLinks.map(({ key, to }) => (
                  <NavLink
                    key={key}
                    to={to}
                    end={to === '/'}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-[#0077b6] bg-[#0077b6]/10'
                          : 'text-[#374151] hover:text-[#0077b6] hover:bg-[#0077b6]/5'
                      }`
                    }
                  >
                    {t(key)}
                  </NavLink>
                ))}
                <div className="mt-3 pt-3 border-t border-gray-100 flex flex-col gap-2">
                  <Button
                    as="a"
                    href={getPhoneUrl()}
                    variant="outline"
                    size="sm"
                    icon={<Phone size={14} />}
                    iconPosition="left"
                  >
                    {clinicConfig.phoneDisplay}
                  </Button>
                  <Button as="a" href="/contact" variant="primary" size="sm">
                    {t('nav.bookAppointment')}
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}

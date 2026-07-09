import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenBooking: () => void;
}

export default function Navbar({ darkMode, setDarkMode, onOpenBooking }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Sticky header state
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll progress computation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      {/* Skip to Main Content Link for Accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-blue-600 focus:text-white focus:rounded-xl focus:font-bold focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
      >
        Skip to Main Content
      </a>

      {/* Scroll Progress Bar */}
      <div 
        id="scroll-progress-bar"
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-blue-600 via-teal-400 to-emerald-400 z-50 transition-all duration-75"
        style={{ width: `${scrollProgress}%` }}
      />

      <header
        id="app-header"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "glass py-3 shadow-md border-b border-white/20 dark:border-white/5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M12 2C8.5 2 6 4.5 6 8c0 4 3 6 3 10 0 .5-.5 1-1 1h-1a2 2 0 0 0-2 2v1h14v-1a2 2 0 0 0-2-2h-1c-.5 0-1-.5-1-1 0-4 3-6 3-10 0-3.5-2.5-6-6-6z" />
                  <path d="M9 10c0-1.5 1-2.5 3-2.5" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-teal-400 transition-colors">
                  Dr. Phadatare
                </span>
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase font-bold text-teal-600 dark:text-teal-400">
                  Dental Clinic
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-teal-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Dark mode Toggle */}
              <button
                id="dark-mode-toggle-desktop"
                onClick={toggleDarkMode}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} />}
              </button>

              {/* Call CTA */}
              <a
                href="tel:+919767437855"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-colors"
              >
                <Phone size={16} className="text-teal-500 animate-pulse" />
                <span className="font-mono">+91 97674 37855</span>
              </a>

              {/* Appointment CTA */}
              <button
                id="navbar-book-btn"
                onClick={onOpenBooking}
                className="px-5 py-2 rounded-xl text-sm font-bold text-white bg-gradient-brand hover:opacity-90 active:scale-95 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/35 transition-all cursor-pointer"
              >
                Book Appointment
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                id="dark-mode-toggle-mobile"
                onClick={toggleDarkMode}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
              </button>

              <button
                id="mobile-menu-toggle"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Toggle Menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-nav-drawer"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden w-full glass border-b border-slate-200 dark:border-slate-800 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 rounded-xl text-base font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-teal-400 hover:bg-slate-100/70 dark:hover:bg-slate-800/70 transition-all"
                  >
                    {link.label}
                  </a>
                ))}
                
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3 px-4">
                  <a
                    href="tel:+919767437855"
                    className="flex items-center justify-center gap-2 py-3 rounded-xl text-base font-semibold border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200"
                  >
                    <Phone size={18} className="text-teal-500" />
                    <span className="font-mono">+91 97674 37855</span>
                  </a>

                  <button
                    id="mobile-drawer-book-btn"
                    onClick={() => {
                      setIsOpen(false);
                      onOpenBooking();
                    }}
                    className="w-full py-3 rounded-xl text-base font-bold text-white bg-gradient-brand shadow-lg shadow-blue-500/20 text-center cursor-pointer"
                  >
                    Book Appointment
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}

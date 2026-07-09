import { Shield, Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesLinks = [
    { label: "Teeth Cleaning & Scaling", href: "#services" },
    { label: "Root Canal Treatment", href: "#services" },
    { label: "Cosmetic Veneers", href: "#services" },
    { label: "Dental Implants", href: "#services" },
    { label: "Pediatric Care", href: "#services" },
    { label: "Laser Treatments", href: "#services" }
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Treatments", href: "#services" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Before & After Results", href: "#gallery" },
    { label: "Patient Reviews", href: "#reviews" },
    { label: "FAQs", href: "#faq" },
    { label: "Contact Us", href: "#contact" }
  ];

  return (
    <footer id="app-footer" className="bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer bento-grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand details */}
          <div className="lg:col-span-4 space-y-5">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-brand flex items-center justify-center text-white shadow-md">
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
                <span className="font-display font-black text-lg tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  Dr. Phadatare
                </span>
                <span className="text-[10px] font-mono tracking-[0.2em] uppercase font-bold text-teal-400">
                  Dental Clinic
                </span>
              </div>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Providing modern, compassionate, and premium dental treatments for patients of all ages in Hadapsar, Pune. Your smile deserves the best healthcare.
            </p>
            {/* Social media links */}
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="p-2.5 rounded-xl bg-slate-800 hover:bg-blue-600 hover:text-white transition-all text-slate-300" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-slate-800 hover:bg-pink-600 hover:text-white transition-all text-slate-300" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 hover:text-white transition-all text-slate-300" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-teal-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services shortcuts */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2.5 text-sm">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="hover:text-teal-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact/Hours details */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">Clinic Contacts</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex gap-2.5 items-start">
                <MapPin size={16} className="text-teal-400 shrink-0 mt-0.5" />
                <span className="leading-tight">
                  Flat-2, Ajinkyatara Kamdhenu Estate, Opp. Mahalaxmi Hotel, Hadapsar, Pune – 411028
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone size={16} className="text-teal-400 shrink-0" />
                <a href="tel:+919767437855" className="font-mono hover:text-white transition-colors font-bold text-slate-300">
                  +91 97674 37855
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Mail size={16} className="text-teal-400 shrink-0" />
                <a href="mailto:info@drphadataredental.com" className="hover:text-white transition-colors text-slate-300">
                  info@drphadataredental.com
                </a>
              </li>
              <li className="flex gap-2.5 items-start pt-1">
                <Clock size={16} className="text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-slate-200">Mon – Sat: 10:00 AM – 8:30 PM</p>
                  <p className="text-xs text-rose-400 mt-0.5">Closed on Sundays</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower Footer: Copyright and Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} Dr. Phadatare Dental Clinic. All Rights Reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart size={12} className="text-rose-500 fill-rose-500 animate-pulse" /> for families in Pune.
          </p>
        </div>

      </div>
    </footer>
  );
}

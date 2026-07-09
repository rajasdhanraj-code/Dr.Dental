import { useState, useEffect, useRef } from "react";
import { MessageSquare, Calendar, ArrowUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Galleries from "./components/Galleries";
import Testimonials from "./components/Testimonials";
import DoctorProfile from "./components/DoctorProfile";
import AppointmentForm from "./components/AppointmentForm";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [preSelectedTreatment, setPreSelectedTreatment] = useState<string>("");
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  const bookingFormRef = useRef<HTMLDivElement | null>(null);

  // Sync dark mode state with document classes and local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("dr_phadatare_theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.body.classList.add("dark");
    } else {
      setDarkMode(false);
      document.body.classList.remove("dark");
    }
  }, []);

  const handleSetDarkMode = (val: boolean) => {
    setDarkMode(val);
    if (val) {
      localStorage.setItem("dr_phadatare_theme", "dark");
      document.body.classList.add("dark");
    } else {
      localStorage.setItem("dr_phadatare_theme", "light");
      document.body.classList.remove("dark");
    }
  };

  // Back-to-Top fade-in threshold
  useEffect(() => {
    const handleScrollVisibility = () => {
      if (window.scrollY > 450) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScrollVisibility);
    return () => window.removeEventListener("scroll", handleScrollVisibility);
  }, []);

  const scrollToBooking = () => {
    if (bookingFormRef.current) {
      bookingFormRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleBookWithTreatment = (treatmentName: string) => {
    setPreSelectedTreatment(treatmentName);
    scrollToBooking();
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      
      {/* Navigation Header */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={handleSetDarkMode} 
        onOpenBooking={scrollToBooking} 
      />

      {/* Page Sections */}
      <main id="main-content" className="flex-grow">
        
        {/* 1. Hero Folder */}
        <Hero onOpenBooking={scrollToBooking} />

        {/* 2. About Us Folder */}
        <About />

        {/* 3. Services Folder */}
        <Services onOpenBookingWithTreatment={handleBookWithTreatment} />

        {/* 4. Why Choose Us Folder */}
        <WhyChooseUs />

        {/* 5. Galleries Folder (Before/After + Clinic tour) */}
        <Galleries />

        {/* 6. Testimonials Folder */}
        <Testimonials />

        {/* 7. Doctor Profile Folder */}
        <DoctorProfile onOpenBooking={scrollToBooking} />

        {/* 8. Appointment Form Folder */}
        <AppointmentForm 
          preSelectedTreatment={preSelectedTreatment} 
          setPreSelectedTreatment={setPreSelectedTreatment} 
          bookingFormRef={bookingFormRef} 
        />

        {/* 9. FAQ Accordions Folder */}
        <FAQ />

        {/* 10. Contact Section Map Folder */}
        <Contact />

      </main>

      {/* Footer Folder */}
      <Footer />

      {/* Floating Utilities */}
      
      {/* Floating Action Button Group (Bottom Left/Right offsets) */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3.5 z-40 items-end">
        {/* Back to top button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              id="back-to-top-btn"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              onClick={handleScrollToTop}
              className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-250 dark:border-slate-800 text-slate-800 dark:text-slate-200 shadow-2xl hover:-translate-y-1 transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>

        {/* Floating Fast Booking CTA */}
        <button
          id="floating-book-btn"
          onClick={scrollToBooking}
          className="flex items-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-bold text-white bg-blue-600 dark:bg-blue-600 shadow-2xl hover:bg-blue-700 hover:-translate-y-1 transition-all cursor-pointer group"
        >
          <Calendar size={18} className="group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">Book Visit</span>
        </button>

        {/* Floating WhatsApp chat trigger */}
        <a
          id="floating-whatsapp-btn"
          href="https://wa.me/919767437855?text=Hi%20Dr.%20Phadatare%20Dental,%20I'd%20like%20to%20schedule%20a%20consultation%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl hover:-translate-y-1 transition-all flex items-center justify-center shrink-0 cursor-pointer"
          aria-label="Contact Doctor on WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 shrink-0"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.18 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.528 1.966 14.067.942 11.451.942 6.015.942 1.59 5.311 1.585 10.74c0 1.697.453 3.35 1.313 4.816l-.988 3.61 3.737-.96zM17.15 14.15c-.29-.145-1.72-.85-1.985-.947-.267-.099-.462-.146-.657.146-.194.29-.757.947-.927 1.14-.17.195-.34.22-.63.075-.29-.145-1.225-.45-2.333-1.442-.862-.77-1.444-1.72-1.614-2.011-.17-.29-.018-.448.127-.592.13-.13.29-.34.436-.51.145-.17.194-.292.292-.487.1-.194.048-.364-.025-.51-.073-.145-.657-1.584-.9-2.143-.236-.57-.474-.492-.657-.502-.17-.008-.364-.01-.558-.01-.195 0-.51.074-.777.364-.268.29-1.022.997-1.022 2.431s1.045 2.82 1.19 3.015c.147.195 2.057 3.143 4.984 4.403.696.3 1.239.479 1.662.613.7.223 1.338.192 1.843.117.563-.083 1.722-.704 1.964-1.385.243-.68.243-1.263.17-1.385-.073-.122-.268-.195-.558-.34z" />
          </svg>
        </a>
      </div>

    </div>
  );
}

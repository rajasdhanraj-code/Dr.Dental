import { useState } from "react";
import { Search, X, Check, ArrowRight, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES_DATA } from "../data";
import { Service } from "../types";
import LucideIcon from "./LucideIcon";

interface ServicesProps {
  onOpenBookingWithTreatment: (treatmentName: string) => void;
}

export default function Services({ onOpenBookingWithTreatment }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeServiceModal, setActiveServiceModal] = useState<Service | null>(null);

  const categories = ["All", "Preventive", "Cosmetic", "Restorative", "Surgical", "Pediatric", "Advanced"];

  // Filter logic
  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-950/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            Our Dental Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Comprehensive Dental Care For <span className="text-gradient">Your Whole Family</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            We offer 19 custom treatments spanning preventive hygiene, full cosmetic reconstructions, advanced laser dentistry, and pediatric care. Select a category below to explore.
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Categories Horizontal scrollable on small screens */}
          <div className="flex flex-wrap gap-2 justify-center md:justify-start w-full md:w-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  selectedCategory === category
                    ? "bg-gradient-brand text-white shadow-md shadow-blue-500/15"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-950 dark:text-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Services Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => (
              <motion.div
                layout
                id={`service-card-${service.id}`}
                key={service.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-6 sm:p-8 rounded-[32px] border border-slate-200/60 dark:border-slate-800/60 flex flex-col justify-between group hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1.5 transition-all duration-300 shadow-xl shadow-slate-100/40 dark:shadow-none"
              >
                <div className="space-y-4">
                  {/* Top: Icon + Category Badge */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-brand flex items-center justify-center text-white shadow-md">
                      <LucideIcon name={service.icon} size={22} />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold bg-blue-500/10 text-blue-600 dark:text-teal-400 px-2.5 py-1 rounded-lg">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-teal-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Learn More Button */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800/60 mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setActiveServiceModal(service)}
                    className="text-xs font-bold text-blue-600 dark:text-teal-400 flex items-center gap-1 group-hover:gap-1.5 transition-all cursor-pointer"
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </button>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">DR. PHADATARE</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* No results placeholder */}
        {filteredServices.length === 0 && (
          <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-slate-800">
            <p className="text-slate-400 dark:text-slate-500 text-lg">No treatments match your search query.</p>
            <button
              onClick={() => { setSelectedCategory("All"); setSearchQuery(""); }}
              className="mt-4 px-4 py-2 rounded-xl text-sm font-semibold bg-blue-600 text-white cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Learn More Modal overlay */}
      <AnimatePresence>
        {activeServiceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveServiceModal(null)}
              className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 max-w-lg w-full shadow-2xl relative border border-slate-100 dark:border-slate-800 z-10 max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveServiceModal(null)}
                className="absolute right-4 top-4 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>

              {/* Service Meta */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center text-white shrink-0">
                  <LucideIcon name={activeServiceModal.icon} size={28} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider font-bold bg-blue-500/10 text-blue-600 dark:text-teal-400 px-2.5 py-1 rounded-lg">
                    {activeServiceModal.category} Treatment
                  </span>
                  <h3 className="font-display font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white mt-1">
                    {activeServiceModal.title}
                  </h3>
                </div>
              </div>

              {/* Description & Clinical Information */}
              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-sans mb-8">
                <p className="font-semibold text-slate-800 dark:text-white">
                  {activeServiceModal.description}
                </p>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 border-l-2 border-blue-500 pl-3">
                  {activeServiceModal.detailedDescription}
                </p>

                {/* Highlighted core benefits */}
                <div className="pt-4 space-y-2">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400">Treatment Highlights</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                      <Check size={14} className="text-emerald-500" /> State-of-the-art diagnostics
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                      <Check size={14} className="text-emerald-500" /> Comfort & pain-free methods
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                      <Check size={14} className="text-emerald-500" /> Sterile global standard setup
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
                      <Check size={14} className="text-emerald-500" /> Led by Dr. Phadatare
                    </div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    onOpenBookingWithTreatment(activeServiceModal.title);
                    setActiveServiceModal(null);
                  }}
                  className="flex-1 py-3 px-4 rounded-xl text-sm font-bold text-white bg-gradient-brand text-center flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/10"
                >
                  <Calendar size={16} />
                  Book for this Treatment
                </button>
                <button
                  onClick={() => setActiveServiceModal(null)}
                  className="py-3 px-4 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-center cursor-pointer"
                >
                  Close
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

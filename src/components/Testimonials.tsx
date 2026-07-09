import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { REVIEWS_DATA } from "../data";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, isPlaying]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS_DATA.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS_DATA.length) % REVIEWS_DATA.length);
  };

  return (
    <section id="reviews" className="py-24 bg-slate-50 dark:bg-slate-950/40 relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            Patient Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Our <span className="text-gradient">Patients Say</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Read real feedback from families and patients in Hadapsar, Pune who trust Dr. Phadatare Dental.
          </p>
        </div>

        {/* Reviews Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Big Google Badge - Bento Card */}
          <div className="lg:col-span-4 text-center lg:text-left space-y-6">
            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-8 rounded-[32px] border border-slate-200/60 dark:border-slate-800/60 shadow-xl shadow-slate-100/40 dark:shadow-none space-y-6 relative group overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 rounded-full -mr-8 -mt-8" />
              
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center font-display font-black text-2xl text-blue-600 dark:text-blue-400 shadow-inner">
                  G
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-slate-950 dark:text-white">Google Reviews</h3>
                  <p className="text-xs text-slate-400">Verified Patient Feedback</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-baseline justify-center lg:justify-start gap-2">
                  <span className="text-5xl font-display font-black text-slate-900 dark:text-white">5.0</span>
                  <span className="text-xl text-slate-400">/ 5.0</span>
                </div>
                
                {/* 5 Stars */}
                <div className="flex items-center justify-center lg:justify-start text-amber-400 gap-1">
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                  <Star size={20} fill="currentColor" />
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-slate-800 space-y-1">
                <p className="text-lg font-bold text-slate-850 dark:text-slate-100 font-mono">317+</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">Happy Patients on Google maps</p>
              </div>

              {/* Verified badge */}
              <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 py-2 px-3 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                100% Honest Local Patient Reviews
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Testimonials Carousel - Bento Card */}
          <div className="lg:col-span-8 relative">
            <div 
              className="relative"
              onMouseEnter={() => setIsPlaying(false)}
              onMouseLeave={() => setIsPlaying(true)}
            >
              {/* Main Testimonial Block */}
              <div className="min-h-[280px] sm:min-h-[240px] flex flex-col justify-between p-8 sm:p-10 rounded-[32px] bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 shadow-xl shadow-slate-100/40 dark:shadow-none relative overflow-hidden">
                
                {/* Quote watermark */}
                <Quote size={80} className="absolute -top-4 right-4 text-slate-100 dark:text-slate-800/40 pointer-events-none -z-10" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    {/* Stars and rating */}
                    <div className="flex text-amber-400 gap-1">
                      {Array.from({ length: REVIEWS_DATA[currentIndex].rating }).map((_, i) => (
                        <Star key={i} size={18} fill="currentColor" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 italic font-sans leading-relaxed">
                      "{REVIEWS_DATA[currentIndex].text}"
                    </p>

                    {/* Patient detail */}
                    <div className="flex items-center gap-3 pt-2">
                      <div className="w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center text-white font-bold font-display text-sm shadow-md uppercase">
                        {REVIEWS_DATA[currentIndex].name[0]}
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-sm text-slate-950 dark:text-white">
                          {REVIEWS_DATA[currentIndex].name}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span>{REVIEWS_DATA[currentIndex].source}</span>
                          <span>•</span>
                          <span>{REVIEWS_DATA[currentIndex].date}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation and Indicators inside the box */}
                <div className="flex items-center justify-between pt-8 border-t border-slate-100 dark:border-slate-800/80 mt-8">
                  {/* Indicators */}
                  <div className="flex gap-2">
                    {REVIEWS_DATA.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`h-2.5 rounded-full transition-all cursor-pointer ${
                          currentIndex === idx ? "w-6 bg-blue-600 dark:bg-teal-400" : "w-2.5 bg-slate-200 dark:bg-slate-800"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Arrow control buttons */}
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                      aria-label="Previous review"
                    >
                      <ChevronLeft size={16} />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2.5 rounded-xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
                      aria-label="Next review"
                    >
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Eye, Maximize2, X, MoveHorizontal } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BEFORE_AFTER_DATA, CLINIC_GALLERY_DATA } from "../data";

export default function Galleries() {
  const [activeTab, setActiveTab] = useState<"results" | "tour">("results");
  
  // Before & After States
  const [baIndex, setBaIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0-100
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  // Clinic Tour States
  const [tourFilter, setTourFilter] = useState<string>("All");
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const tourCategories = ["All", "Reception", "Treatment Room", "Dental Equipment", "Waiting Area", "Happy Patients", "Clinic Exterior"];

  const filteredTourImages = CLINIC_GALLERY_DATA.filter((img) => {
    return tourFilter === "All" || img.category === tourFilter;
  });

  // Slide Handle Drag Logic (Touch and Mouse)
  const handleMove = (clientX: number) => {
    if (!sliderContainerRef.current) return;
    const rect = sliderContainerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging.current) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    handleMove(e.clientX);
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    const handleMouseUp = () => stopDragging();
    const handleTouchEnd = () => stopDragging();

    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  const handleStartDrag = () => {
    isDragging.current = true;
  };

  return (
    <section id="gallery" className="py-24 bg-slate-50 dark:bg-slate-950/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            Clinic Showcase
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            See the Dr. Phadatare <span className="text-gradient">Dental Difference</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Explore our real transformation clinical casework and take a virtual visual tour of our modern Pune clinic.
          </p>

          {/* Toggle Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-200/60 dark:bg-slate-900/80 mt-6 border border-slate-200/20 shadow-inner">
            <button
              onClick={() => setActiveTab("results")}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === "results"
                  ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-teal-400 shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              Treatment Results (Before & After)
            </button>
            <button
              onClick={() => setActiveTab("tour")}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === "tour"
                  ? "bg-white dark:bg-slate-800 text-blue-600 dark:text-teal-400 shadow-md"
                  : "text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200"
              }`}
            >
              Clinic Gallery (Tour)
            </button>
          </div>
        </div>

        {/* Dynamic Showcase View */}
        <div className="relative">
          <AnimatePresence mode="wait">
            {activeTab === "results" ? (
              <motion.div
                key="results-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Content Split: Case switcher and interactive slider */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  
                  {/* Case Info / Selector */}
                  <div className="lg:col-span-5 space-y-6">
                    <div className="space-y-2">
                      <span className="text-xs uppercase font-bold text-teal-600 dark:text-teal-400 font-mono">Case Study 0{baIndex + 1}</span>
                      <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-950 dark:text-white">
                        {BEFORE_AFTER_DATA[baIndex].title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-450 text-sm sm:text-base leading-relaxed">
                        {BEFORE_AFTER_DATA[baIndex].description}
                      </p>
                    </div>

                    {/* Casework selection menu */}
                    <div className="flex flex-col gap-3">
                      {BEFORE_AFTER_DATA.map((caseItem, idx) => (
                        <button
                          key={caseItem.id}
                          onClick={() => { setBaIndex(idx); setSliderPosition(50); }}
                          className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between cursor-pointer ${
                            baIndex === idx
                              ? "bg-white dark:bg-slate-900 border-blue-500 shadow-md"
                              : "bg-white/50 dark:bg-slate-900/30 border-slate-100 dark:border-slate-800/60 hover:bg-white dark:hover:bg-slate-900"
                          }`}
                        >
                          <div className="space-y-0.5">
                            <p className="text-xs font-mono text-slate-400">Case #0{idx + 1}</p>
                            <p className="font-bold text-sm text-slate-800 dark:text-slate-200">{caseItem.title}</p>
                          </div>
                          <Eye size={16} className={baIndex === idx ? "text-blue-500" : "text-slate-400"} />
                        </button>
                      ))}
                    </div>

                    <p className="text-xs text-slate-400 dark:text-slate-500 italic">
                      💡 Tip: Use your mouse or finger to drag the vertical handle on the image to view the clinical comparison.
                    </p>
                  </div>

                  {/* Interactive Slider */}
                  <div className="lg:col-span-7 flex justify-center">
                    <div
                      ref={sliderContainerRef}
                      onMouseMove={(e) => {
                        if (!isDragging.current) return;
                        handleMove(e.clientX);
                      }}
                      onTouchMove={(e) => {
                        if (!isDragging.current) return;
                        handleMove(e.touches[0].clientX);
                      }}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleStartDrag();
                        handleMove(e.clientX);
                      }}
                      onTouchStart={(e) => {
                        handleStartDrag();
                        handleMove(e.touches[0].clientX);
                      }}
                      className="relative w-full aspect-[4/3] rounded-[40px] overflow-hidden shadow-2xl shadow-blue-500/5 border-8 border-white dark:border-slate-900 select-none cursor-ew-resize max-w-xl"
                    >
                      {/* After Image (Always under) */}
                      <img
                        src={BEFORE_AFTER_DATA[baIndex].afterImg}
                        alt="Restored teeth - After Treatment"
                        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        width={800}
                        height={600}
                      />
                      <div className="absolute right-4 bottom-4 bg-teal-500/90 text-white font-mono text-[10px] font-bold py-1 px-2.5 rounded-lg uppercase tracking-wider shadow-sm z-20">
                        After
                      </div>

                      {/* Before Image (Slices over top) */}
                      <div
                        className="absolute inset-y-0 left-0 overflow-hidden pointer-events-none"
                        style={{ width: `${sliderPosition}%` }}
                      >
                        <img
                          src={BEFORE_AFTER_DATA[baIndex].beforeImg}
                          alt="Damaged teeth - Before Treatment"
                          className="absolute inset-y-0 left-0 w-full h-full object-cover max-w-none pointer-events-none"
                          style={{ width: sliderContainerRef.current?.getBoundingClientRect().width || "100%" }}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          width={800}
                          height={600}
                        />
                      </div>
                      <div className="absolute left-4 bottom-4 bg-slate-950/80 text-white font-mono text-[10px] font-bold py-1 px-2.5 rounded-lg uppercase tracking-wider shadow-sm z-20">
                        Before
                      </div>

                      {/* Sliding handle bar line */}
                      <div
                        className="absolute inset-y-0 w-1 bg-white cursor-ew-resize flex items-center justify-center z-30"
                        style={{ left: `${sliderPosition}%` }}
                      >
                        {/* Drag Circle */}
                        <div className="w-10 h-10 rounded-full bg-white text-slate-800 shadow-xl border border-slate-200 flex items-center justify-center shrink-0 -ml-4.5 scale-95 hover:scale-105 active:scale-95 transition-transform pointer-events-none">
                          <MoveHorizontal size={18} className="text-blue-600 animate-pulse" />
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </motion.div>
            ) : (
              <motion.div
                key="tour-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-8"
              >
                {/* Category pills for the gallery filter */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {tourCategories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setTourFilter(cat)}
                      className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        tourFilter === cat
                          ? "bg-gradient-brand text-white shadow-sm"
                          : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Grid layout */}
                <motion.div
                  layout
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  <AnimatePresence mode="popLayout">
                    {filteredTourImages.map((img) => (
                      <motion.div
                        layout
                        key={img.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        className="group relative rounded-[32px] overflow-hidden aspect-[4/3] bg-slate-200 border border-slate-200/60 dark:border-slate-800/60 shadow-xl shadow-slate-100/40 dark:shadow-none cursor-pointer p-1.5 bg-white dark:bg-slate-900"
                        onClick={() => setLightboxImage(img.url)}
                      >
                        <img
                          src={img.url}
                          alt={img.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          width={800}
                          height={600}
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-slate-950/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                          <div className="text-center space-y-2 p-4">
                            <Maximize2 size={24} className="mx-auto text-teal-400 animate-bounce" />
                            <p className="font-display font-extrabold text-base sm:text-lg leading-tight">{img.title}</p>
                            <span className="text-[10px] font-mono tracking-wider bg-white/20 px-2 py-0.5 rounded uppercase">
                              {img.category}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>

      {/* Fullscreen Tour Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl"
            >
              <img
                src={lightboxImage}
                alt="Clinic Showcase View"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}

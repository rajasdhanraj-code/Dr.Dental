import { useState } from "react";
import { ChevronDown, HelpCircle, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ_DATA } from "../data";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1"); // Open first by default

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Background Decorative Blurs from Bento Theme */}
      <div className="absolute top-[-10%] right-[-10%] w-[450px] h-[450px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] bg-teal-100/50 dark:bg-teal-900/10 rounded-full blur-[100px] opacity-60 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            Frequently Asked Questions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Common Dental <span className="text-gradient">Questions & Answers</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Find answers to standard inquiries about procedure pain levels, children's therapies, emergencies, and payment logistics.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQ_DATA.map((item) => {
            const isOpen = openId === item.id;
            
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md rounded-[20px] border border-slate-200/60 dark:border-slate-800/60 shadow-md shadow-slate-100/30 dark:shadow-none overflow-hidden"
              >
                {/* Trigger Button */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex items-center justify-between p-5 text-left text-slate-850 dark:text-slate-150 font-bold font-display text-sm sm:text-base hover:text-blue-600 dark:hover:text-teal-400 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3 pr-4">
                    <HelpCircle size={18} className="text-teal-500 shrink-0" />
                    <span>{item.question}</span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue-500" : ""
                    }`}
                  />
                </button>

                {/* Content Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-sans border-t border-slate-100 dark:border-slate-800/60">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Secondary Help Trigger - Large Bento Card */}
        <div className="mt-12 text-center bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-8 rounded-[32px] border border-slate-200/60 dark:border-slate-800/60 shadow-xl shadow-slate-100/40 dark:shadow-none">
          <p className="text-sm text-slate-600 dark:text-slate-400 font-medium">Still have questions about our dental services?</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+919767437855"
              className="py-2.5 px-5 rounded-xl text-xs sm:text-sm font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-sm"
            >
              Call Clinic
            </a>
            <a
              href="https://wa.me/919767437855?text=Hello%20Dr.%20Phadatare%20Dental,%20I'd%20like%20to%20ask%20a%20question%20about..."
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-5 rounded-xl text-xs sm:text-sm font-bold border border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 flex items-center justify-center gap-1.5"
            >
              <MessageSquare size={14} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

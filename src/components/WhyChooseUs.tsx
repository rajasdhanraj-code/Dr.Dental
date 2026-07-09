import { WHY_CHOOSE_US_DATA } from "../data";
import { motion } from "motion/react";
import LucideIcon from "./LucideIcon";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
      {/* Background Decorative Blurs from Bento Theme */}
      <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-teal-100/50 dark:bg-teal-900/10 rounded-full blur-[100px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-500/10 text-xs font-semibold text-teal-600 dark:text-teal-400 uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            High Clinical Standards, <span className="text-gradient">Gentle Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            We combine high-tech dentistry with a warm clinical environment to offer Pune patients unmatched satisfaction and oral wellness.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US_DATA.map((item, idx) => {
            // Give different colors to icon containers
            const iconBgColors = [
              "bg-blue-500/10 text-blue-600 dark:text-blue-400 dark:bg-blue-500/20",
              "bg-teal-500/10 text-teal-600 dark:text-teal-400 dark:bg-teal-500/20",
              "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 dark:bg-indigo-500/20",
              "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 dark:bg-emerald-500/20",
              "bg-sky-500/10 text-sky-600 dark:text-sky-400 dark:bg-sky-500/20",
              "bg-rose-500/10 text-rose-600 dark:text-rose-400 dark:bg-rose-500/20",
            ];

            return (
              <motion.div
                id={`why-choose-card-${item.id}`}
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative p-6 sm:p-8 rounded-[32px] bg-white/70 dark:bg-slate-900/70 backdrop-blur-md border border-slate-200/60 dark:border-slate-800/60 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-300 shadow-xl shadow-slate-100/40 dark:shadow-none"
              >
                {/* Accent border top on hover */}
                <div className="absolute top-0 left-8 right-8 h-1 rounded-b-full bg-gradient-to-r from-blue-600 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="space-y-4">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${iconBgColors[idx % iconBgColors.length]}`}>
                    <LucideIcon name={item.icon} size={24} />
                  </div>

                  {/* Text Content */}
                  <div className="space-y-2">
                    <h3 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-teal-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Subtle bottom-right design mark */}
                <div className="absolute bottom-4 right-4 text-slate-200/50 dark:text-slate-800/50 group-hover:text-teal-500/10 transition-colors pointer-events-none font-display font-black text-6xl">
                  0{idx + 1}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

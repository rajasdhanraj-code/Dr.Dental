import { useState, useEffect } from "react";
import { Star, Award, Shield, Zap, Phone, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import clinicHeroImage from "../assets/images/clinic_hero_family_1783529321452.jpg";

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  // Simple Counter hook simulation
  const [patientsCount, setPatientsCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);

  useEffect(() => {
    let startP = 0;
    const endP = 317;
    const durationP = 1500;
    const stepTimeP = Math.abs(Math.floor(durationP / endP));

    const timerP = setInterval(() => {
      startP += 5;
      if (startP >= endP) {
        setPatientsCount(endP);
        clearInterval(timerP);
      } else {
        setPatientsCount(startP);
      }
    }, stepTimeP * 5);

    let startR = 0;
    const endR = 50; // 5.0 * 10
    const durationR = 1000;
    const stepTimeR = Math.abs(Math.floor(durationR / endR));

    const timerR = setInterval(() => {
      startR += 1;
      if (startR >= endR) {
        setRatingCount(endR);
        clearInterval(timerR);
      } else {
        setRatingCount(startR);
      }
    }, stepTimeR);

    return () => {
      clearInterval(timerP);
      clearInterval(timerR);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      {/* Background Decorative Elements from Bento Theme */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100/70 dark:bg-blue-900/10 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[400px] h-[400px] bg-teal-100/70 dark:bg-teal-900/10 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl -z-10 animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-teal-500/10 blur-3xl -z-10 animate-pulse pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Bento: Large Area Left (Hero text) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col justify-center">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-700 dark:text-slate-200 uppercase tracking-widest shadow-sm w-fit mx-auto lg:mx-0"
            >
              <div className="flex text-yellow-400 text-xs">★★★★★</div>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              5.0 Google Rating · 317+ Reviews
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] tracking-tight"
            >
              Your Smile Deserves <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">the Best Care.</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-350 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans"
            >
              Trusted by <strong className="text-slate-900 dark:text-white">317+ happy families</strong>. We provide comprehensive, pain-free dental care using advanced technology in a comfortable, luxurious clinic.
            </motion.p>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                id="hero-book-btn"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold text-white bg-gradient-brand hover:opacity-95 active:scale-98 shadow-xl shadow-blue-500/10 flex items-center justify-center gap-2 group transition-all cursor-pointer"
              >
                Book Appointment
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="tel:+919767437855"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl text-base font-bold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800/80 border border-slate-200/80 dark:border-slate-800 flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <Phone size={18} className="text-teal-500" />
                Call +91 97674 37855
              </a>
            </motion.div>

            {/* Bento Trust Indicators / Micro stats block */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-4 pt-6"
            >
              <div className="p-4 bg-white/60 dark:bg-slate-900/60 rounded-2xl border border-white dark:border-slate-850 shadow-xl shadow-slate-100/50 dark:shadow-none backdrop-blur-sm transition-all hover:scale-102">
                <p className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-teal-400 font-mono">12+</p>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">Years Exp.</p>
              </div>

              <div className="p-4 bg-white/60 dark:bg-slate-900/60 rounded-2xl border border-white dark:border-slate-850 shadow-xl shadow-slate-100/50 dark:shadow-none backdrop-blur-sm transition-all hover:scale-102">
                <p className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-teal-400 font-mono">{(ratingCount / 10).toFixed(1)}</p>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">Google Star</p>
              </div>

              <div className="p-4 bg-white/60 dark:bg-slate-900/60 rounded-2xl border border-white dark:border-slate-850 shadow-xl shadow-slate-100/50 dark:shadow-none backdrop-blur-sm transition-all hover:scale-102">
                <p className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-teal-400 font-mono">{patientsCount}+</p>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-tighter">Happy Patients</p>
              </div>
            </motion.div>
          </div>

          {/* Bento: Right Column (Visual collage / Image Container) */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[40px] overflow-hidden shadow-2xl shadow-blue-150/10 dark:shadow-none border border-slate-200/60 dark:border-slate-850 bg-white/80 dark:bg-slate-900/80 p-2 group"
            >
              {/* Inner wrapper with huge rounded corner */}
              <div className="rounded-[32px] overflow-hidden relative">
                {/* Family Hero Image */}
                <img
                  src={clinicHeroImage}
                  alt="Happy Indian family smiling and showing white teeth"
                  className="w-full h-[420px] sm:h-[480px] object-cover group-hover:scale-103 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  fetchPriority="high"
                  width={800}
                  height={600}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Glass Floating Trust Badges inside the Bento Box */}
                <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-3 z-10">
                  <div className="bg-white/40 dark:bg-slate-950/40 backdrop-blur-md p-3 rounded-2xl flex items-center gap-2.5 shadow-lg border border-white/30 dark:border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 dark:text-teal-300 shrink-0">
                      <Shield size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-bold tracking-wider text-slate-600 dark:text-slate-300">Technology</p>
                      <p className="text-xs font-bold text-slate-950 dark:text-white leading-tight">Modern Tech</p>
                    </div>
                  </div>

                  <div className="bg-white/40 dark:bg-slate-950/40 backdrop-blur-md p-3 rounded-2xl flex items-center gap-2.5 shadow-lg border border-white/30 dark:border-white/10">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 dark:text-blue-300 shrink-0">
                      <Award size={16} />
                    </div>
                    <div>
                      <p className="text-[9px] uppercase font-bold tracking-wider text-slate-600 dark:text-slate-300">Certified</p>
                      <p className="text-xs font-bold text-slate-950 dark:text-white leading-tight">Pain-Free</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Visual background accents */}
            <div className="absolute -top-4 -right-4 w-12 h-12 bg-teal-400 rounded-full blur-xl -z-10 opacity-60" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full blur-xl -z-10 opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}

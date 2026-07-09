import { CheckCircle2, Shield, HeartHandshake, Smile } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  const values = [
    {
      title: "Comfort-First Care",
      desc: "Our treatments are engineered to be quiet, comfortable, and pain-free for patients of all ages.",
      icon: Smile,
      color: "text-blue-600 dark:text-blue-400 bg-blue-500/10"
    },
    {
      title: "Highest Hygiene Standards",
      desc: "We practice rigid international autoclave sterilization protocols for every instrument and surface.",
      icon: Shield,
      color: "text-teal-600 dark:text-teal-400 bg-teal-500/10"
    },
    {
      title: "Personalized Integrity",
      desc: "We focus on patient education and propose treatment paths that fit your long-term wellness.",
      icon: HeartHandshake,
      color: "text-emerald-600 dark:text-emerald-400 bg-emerald-500/10"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Side */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[40px] border border-slate-200/60 dark:border-slate-800/60 p-2 bg-white/80 dark:bg-slate-900/80 shadow-2xl shadow-slate-100/40 dark:shadow-none"
            >
              <div className="aspect-[4/5] rounded-[32px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1513224502586-d1e602410265?auto=format&fit=crop&q=80&w=800&h=1000"
                  alt="Modern Dental Clinic interior showing state of the art equipment"
                  className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width={800}
                  height={1000}
                />
              </div>

              {/* Floating Overlay Badge - Styled as a Mini Bento Box */}
              <div className="absolute -bottom-6 -right-6 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-slate-200/80 dark:border-slate-800 max-w-[240px] animate-float">
                <p className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 font-mono">100%</p>
                <p className="text-sm font-bold text-slate-950 dark:text-white mt-1">Sterilized & Safe</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Following global clinical guidelines strictly.</p>
              </div>
            </motion.div>
          </div>

          {/* Text Content Side */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest"
              >
                About Our Clinic
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight"
              >
                Exceptional Dental Care with a <span className="text-gradient">Patient-First Approach</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed font-sans"
            >
              <p>
                At <strong className="text-slate-900 dark:text-white">Dr. Phadatare Dental</strong>, we believe every smile deserves exceptional care. Our clinic offers comprehensive dental treatments using modern technology and a patient-first approach. We focus on comfort, precision, hygiene, and long-term oral health for patients of all ages.
              </p>
              <p>
                Whether you need preventive care, cosmetic dentistry, restorative treatment, or emergency dental services, our experienced team is committed to helping you achieve a healthy and confident smile.
              </p>
            </motion.div>

            {/* List of points - Bento Grid cards */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
            >
              {values.map((v, idx) => (
                <div key={idx} className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-5 rounded-[24px] border border-slate-200/60 dark:border-slate-800/60 shadow-md shadow-slate-100/30 dark:shadow-none transition-all hover:scale-103 duration-300">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${v.color}`}>
                    <v.icon size={20} />
                  </div>
                  <h3 className="font-display font-extrabold text-sm text-slate-950 dark:text-white">{v.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}

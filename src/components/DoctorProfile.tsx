import { Award, Heart, CheckCircle, Clock, Calendar } from "lucide-react";
import { motion } from "motion/react";
import doctorPortrait from "../assets/images/doctor_phadatare_portrait_1783529337050.jpg";

interface DoctorProfileProps {
  onOpenBooking: () => void;
}

export default function DoctorProfile({ onOpenBooking }: DoctorProfileProps) {
  const stats = [
    { label: "Years Experience", value: "12+" },
    { label: "Happy Patients", value: "3,500+" },
    { label: "Successful Implants", value: "450+" },
    { label: "Clinical Staff", value: "8" }
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
      {/* Background Decorative Blurs from Bento Theme */}
      <div className="absolute top-[-10%] right-[-10%] w-[450px] h-[450px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] bg-teal-100/50 dark:bg-teal-900/10 rounded-full blur-[100px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Doctor Image Column - Bento Styled */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-[40px] border border-slate-200/60 dark:border-slate-800 p-2 bg-white/80 dark:bg-slate-900/80 shadow-2xl shadow-slate-100/40 dark:shadow-none max-w-sm mx-auto lg:max-w-none group"
            >
              <div className="rounded-[32px] overflow-hidden relative">
                <img
                  src={doctorPortrait}
                  alt="Portrait of Dr. Phadatare, Senior Dentist"
                  className="w-full h-auto object-cover aspect-[3/4] group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  width={600}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge - Bento Style */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md p-4 rounded-[24px] shadow-xl border border-slate-200/80 dark:border-slate-800 text-center">
                <p className="text-sm font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 uppercase tracking-widest font-display">Dr. Phadatare</p>
                <p className="text-xs text-slate-500 dark:text-slate-350 mt-0.5">B.D.S., Senior Cosmetic Dentist & Implantologist</p>
              </div>
            </motion.div>
          </div>

          {/* Biography Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                Meet the Doctor
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Your Health and Smile are in <span className="text-gradient">Caring Hands</span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 dark:text-slate-350 leading-relaxed font-sans text-sm sm:text-base">
              <p>
                Hello, I am <strong className="text-slate-900 dark:text-white">Dr. Phadatare</strong>, and I welcome you to our family dental clinic. Over the past 12 years of clinical practice in Pune, my core philosophy has been centered on delivering highly personalized, transparent, and completely comfortable dental treatments.
              </p>
              <p>
                I believe that dentistry is not just about correcting structural dental issues, but about restoring health, confidence, and self-esteem. We use high-precision diagnostic lasers and digital scanners to diagnose correctly and treat conservatively, ensuring your natural tooth structure is preserved as much as possible.
              </p>
              <p>
                Our team takes special care of dental anxious patients and young children. I invite you to visit our clinic and experience stress-free healthcare firsthand.
              </p>
            </div>

            {/* Bento Micro Stats Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-slate-200/60 dark:border-slate-800/60">
              {stats.map((s, idx) => (
                <div key={idx} className="text-center lg:text-left bg-white/60 dark:bg-slate-900/60 p-3.5 rounded-2xl border border-white dark:border-slate-850/60 shadow-sm">
                  <p className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-teal-400 font-mono leading-tight">{s.value}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium leading-none">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Core commitments list */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Clinical Focus</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 text-sm">
                  <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                  <span>Conservative and preventative dentistry</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 text-sm">
                  <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                  <span>Advanced Zirconia restorations</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 text-sm">
                  <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                  <span>Micro-endodontics (Rotary Root Canal)</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 dark:text-slate-300 text-sm">
                  <CheckCircle size={16} className="text-emerald-500 shrink-0" />
                  <span>Precision Implant placement & bone grafts</span>
                </div>
              </div>
            </div>

            {/* Booking Trigger */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4 items-center">
              <button
                id="doctor-book-appointment-btn"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-brand hover:opacity-90 active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar size={16} />
                Schedule Consultation
              </button>
              
              <span className="text-xs text-slate-400 font-medium">Available Monday to Saturday: 10:00 AM – 8:30 PM</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

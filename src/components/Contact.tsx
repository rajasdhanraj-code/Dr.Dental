import { MapPin, Phone, MessageSquare, Compass, Clock, Mail } from "lucide-react";
import { motion } from "motion/react";

export default function Contact() {
  const addressQuery = "Dr. Phadatare Dental, Flat-2, Ajinkyatara Kamdhenu Estate, Near Avirat Academy, Opposite Mahalaxmi Hotel, Vitthal Tupe Natyagruh Road, Hadapsar, Pune, Maharashtra 411028";
  const directionsURL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(addressQuery)}`;

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 overflow-hidden relative">
      {/* Background Decorative Blurs from Bento Theme */}
      <div className="absolute top-[-10%] left-[-10%] w-[450px] h-[450px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[450px] h-[450px] bg-teal-100/50 dark:bg-teal-900/10 rounded-full blur-[100px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            Contact & Directions
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Find Us in <span className="text-gradient">Hadapsar, Pune</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Visit our modern facility or call us directly. We are easily accessible from Vitthal Tupe Natyagruh Road with ample roadside parking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Clinic Details Column - Bento Card */}
          <div className="lg:col-span-5 p-8 rounded-[32px] border border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md shadow-xl shadow-slate-100/40 dark:shadow-none flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div className="space-y-1.5">
                <span className="text-xs uppercase font-mono tracking-widest text-blue-600 dark:text-teal-400 font-bold">Location Name</span>
                <h3 className="font-display font-extrabold text-2xl text-slate-950 dark:text-white">Dr. Phadatare Dental</h3>
                <p className="text-xs text-slate-400 font-semibold flex items-center gap-1">⭐ 5.0 Google Business Rating • 317+ Reviews</p>
              </div>

              {/* Details stack */}
              <div className="space-y-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                {/* Physical Address */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-900 dark:text-slate-200">Address</h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-sans">
                      Flat-2, Ajinkyatara Kamdhenu Estate,<br />
                      Near Avirat Academy,<br />
                      Opposite Mahalaxmi Hotel,<br />
                      Vitthal Tupe Natyagruh Road, Malwadi Road 28,<br />
                      Hadapsar, Pune, Maharashtra – 411028
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-600 shrink-0 mt-0.5">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-900 dark:text-slate-200">Phone</h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-relaxed font-sans">
                      <a href="tel:+919767437855" className="hover:text-blue-600 font-mono font-bold text-slate-800 dark:text-white transition-colors">
                        +91 97674 37855
                      </a>
                    </p>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex gap-3.5 items-start">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 shrink-0 mt-0.5">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-900 dark:text-slate-200">Working Hours</h4>
                    <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 leading-none font-sans">
                      Monday – Saturday: <span className="font-semibold text-slate-700 dark:text-slate-350">10:00 AM – 8:30 PM</span>
                    </p>
                    <p className="text-[10px] text-rose-500 font-semibold mt-1.5">Closed on Sundays</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 mt-auto">
              <div className="grid grid-cols-2 gap-3">
                {/* Call Button */}
                <a
                  href="tel:+919767437855"
                  className="py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 text-center flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Phone size={16} />
                  Call Clinic
                </a>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/919767437855?text=Hello%20Dr.%20Phadatare%20Dental,%20I'd%20like%20to%20inquire%20about%20a%20clinical%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-600 text-center flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageSquare size={16} />
                  WhatsApp
                </a>
              </div>

              {/* Get Directions Button */}
              <a
                href={directionsURL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-800/80 text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <Compass size={16} className="text-blue-500" />
                Get Directions (Google Maps)
              </a>
            </div>
          </div>

          {/* Map Embed Column - Bento Card */}
          <div className="lg:col-span-7 h-[350px] sm:h-[450px] lg:h-auto rounded-[32px] border border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/80 p-2 shadow-xl shadow-slate-100/40 dark:shadow-none relative group overflow-hidden">
            <div className="rounded-[24px] overflow-hidden w-full h-full">
              {/* Map Iframe */}
              <iframe
                title="Dr. Phadatare Dental Clinic Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.522818556708!2d73.92644267501235!3d18.50524458258671!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1f4e1564be3%3A0xeecbfca00ef9012f!2sAjinkyatara%20Kamdhenu%20Estate!5e0!3m2!1sen!2sin!4v1720448123456!5m2!1sen!2sin"
                className="w-full h-full border-0"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

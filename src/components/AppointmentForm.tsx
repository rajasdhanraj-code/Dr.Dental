import React, { useState, useEffect } from "react";
import { Calendar, Phone, CheckCircle, Mail, MessageSquare, Trash2, ShieldCheck, Clock, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES_DATA } from "../data";
import { Appointment } from "../types";

interface AppointmentFormProps {
  preSelectedTreatment: string;
  setPreSelectedTreatment: (val: string) => void;
  bookingFormRef: React.RefObject<HTMLDivElement | null>;
}

export default function AppointmentForm({
  preSelectedTreatment,
  setPreSelectedTreatment,
  bookingFormRef,
}: AppointmentFormProps) {
  const [formData, setFormData] = useState<Appointment>({
    fullName: "",
    mobileNumber: "",
    email: "",
    treatment: "",
    preferredDate: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Appointment>>({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [myBookings, setMyBookings] = useState<Appointment[]>([]);

  // Update treatment when parent preSelectedTreatment changes
  useEffect(() => {
    if (preSelectedTreatment) {
      setFormData((prev) => ({ ...prev, treatment: preSelectedTreatment }));
    }
  }, [preSelectedTreatment]);

  // Load existing bookings from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("dr_phadatare_bookings");
    if (saved) {
      try {
        setMyBookings(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse bookings from localStorage", e);
      }
    }
  }, []);

  const validate = () => {
    const newErrors: Partial<Appointment> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required";
    
    // 10-digit Indian Mobile check
    const cleanMobile = formData.mobileNumber.replace(/\D/g, "");
    if (!cleanMobile) {
      newErrors.mobileNumber = "Mobile number is required";
    } else if (cleanMobile.length < 10) {
      newErrors.mobileNumber = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.treatment) newErrors.treatment = "Please select a treatment";
    if (!formData.preferredDate) {
      newErrors.preferredDate = "Preferred date is required";
    } else {
      const selected = new Date(formData.preferredDate);
      const today = new Date();
      today.setHours(0,0,0,0);
      if (selected < today) {
        newErrors.preferredDate = "Appointment date must be in the future";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name as keyof Appointment]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Save Booking
    const updatedBookings = [...myBookings, formData];
    localStorage.setItem("dr_phadatare_bookings", JSON.stringify(updatedBookings));
    setMyBookings(updatedBookings);
    
    setIsSuccess(true);
    // Clear parent pre-select state
    setPreSelectedTreatment("");
  };

  const handleDeleteBooking = (index: number) => {
    const updated = myBookings.filter((_, idx) => idx !== index);
    localStorage.setItem("dr_phadatare_bookings", JSON.stringify(updated));
    setMyBookings(updated);
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      mobileNumber: "",
      email: "",
      treatment: "",
      preferredDate: "",
      message: "",
    });
    setIsSuccess(false);
  };

  // Generate WhatsApp message based on form values
  const getWhatsAppURL = (appData: Appointment) => {
    const number = "919767437855";
    const text = `Hello Dr. Phadatare Dental, I would like to book a dental appointment.
Here are my details:
• *Name:* ${appData.fullName}
• *Mobile:* ${appData.mobileNumber}
• *Treatment:* ${appData.treatment}
• *Preferred Date:* ${appData.preferredDate}
• *Message:* ${appData.message || "None"}`;
    
    return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section 
      id="booking"
      ref={bookingFormRef}
      className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden"
    >
      {/* Background Decorative Blurs from Bento Theme */}
      <div className="absolute top-[-10%] right-[-10%] w-[450px] h-[450px] bg-blue-100/50 dark:bg-blue-900/10 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[450px] h-[450px] bg-teal-100/50 dark:bg-teal-900/10 rounded-full blur-[100px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            Book Appointment
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Schedule Your <span className="text-gradient">Dental Consultation</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Take the first step toward a healthy, radiant smile. Fill out the form below, and our care representative will call you to lock in your preferred slot.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Booking Guidelines / Urgent Slots Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-6 sm:p-8 rounded-[32px] border border-slate-200/60 dark:border-slate-800/60 space-y-6 shadow-xl shadow-slate-100/40 dark:shadow-none">
              <h3 className="font-display font-extrabold text-lg text-slate-900 dark:text-white">Appointment Guidelines</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-600 shrink-0 mt-0.5">
                    <Clock size={16} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-800 dark:text-slate-200">Flexible Timing</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-sans leading-relaxed">Appointments are available Mon-Sat from 10:00 AM – 8:30 PM. Choose your date below.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-600 shrink-0 mt-0.5">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-800 dark:text-slate-200">Confirmation Call</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-sans leading-relaxed">Once you submit, our patient coordinator will call your mobile number within 2 hours to confirm your exact time slot.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-800 dark:text-slate-200">Rigid Hygiene Guarantee</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-sans leading-relaxed">We strictly allocate 30 minutes between patients to fully sanitize our treatment operatories using advanced autoclave systems.</p>
                  </div>
                </div>
              </div>

              {/* Direct Booking on WhatsApp prompt */}
              <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/60">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Prefer Instant Booking?</p>
                <a
                  href="https://wa.me/919767437855?text=Hi%20Dr.%20Phadatare%20Dental%20Clinic,%20I'd%20like%20to%20book%20an%20appointment%20for%20a%20dental%20check-up."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md shadow-emerald-500/10 transition-colors cursor-pointer"
                >
                  <MessageSquare size={16} />
                  Book Instantly via WhatsApp
                </a>
              </div>
            </div>

            {/* Local Storage "My Appointments" panel */}
            {myBookings.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-6 rounded-[32px] border border-slate-200/60 dark:border-slate-800/60 space-y-4 shadow-xl shadow-slate-100/40 dark:shadow-none"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-display font-extrabold text-sm text-blue-800 dark:text-blue-300 uppercase tracking-wider">Your Booked Visits ({myBookings.length})</h4>
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                </div>
                
                <div className="space-y-3 max-h-[220px] overflow-y-auto pr-1">
                  {myBookings.map((bk, idx) => (
                    <div 
                      key={idx}
                      className="bg-slate-50 dark:bg-slate-850 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800/60 flex items-center justify-between gap-4 shadow-sm"
                    >
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-slate-900 dark:text-white leading-tight">{bk.treatment}</p>
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
                          <User size={10} />
                          <span>{bk.fullName}</span>
                          <span>•</span>
                          <Calendar size={10} />
                          <span>{bk.preferredDate}</span>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => handleDeleteBooking(idx)}
                        className="p-1.5 rounded-lg text-slate-400 hover:text-rose-500 hover:bg-slate-150/40 transition-colors cursor-pointer"
                        title="Cancel appointment"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-md p-6 sm:p-10 rounded-[32px] border border-slate-200/60 dark:border-slate-800/60 shadow-xl shadow-slate-100/40 dark:shadow-none relative">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Full Name *</label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Akshay Kulkarni"
                          className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-950 dark:text-white transition-all ${
                            errors.fullName ? "border-rose-500 ring-rose-500/10" : "border-slate-200 dark:border-slate-800"
                          }`}
                        />
                        {errors.fullName && <p className="text-xs text-rose-500 font-medium">{errors.fullName}</p>}
                      </div>

                      {/* Mobile Number */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Mobile Number *</label>
                        <input
                          type="tel"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleInputChange}
                          placeholder="e.g. 9876543210"
                          className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-950 dark:text-white transition-all ${
                            errors.mobileNumber ? "border-rose-500 ring-rose-500/10" : "border-slate-200 dark:border-slate-800"
                          }`}
                        />
                        {errors.mobileNumber && <p className="text-xs text-rose-500 font-medium">{errors.mobileNumber}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Email address */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="akshay@gmail.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-950 dark:text-white transition-all"
                        />
                      </div>

                      {/* Preferred Date */}
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Preferred Date *</label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-950 dark:text-white transition-all ${
                            errors.preferredDate ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                          }`}
                        />
                        {errors.preferredDate && <p className="text-xs text-rose-500 font-medium">{errors.preferredDate}</p>}
                      </div>
                    </div>

                    {/* Treatment Selector Dropdown */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Treatment Required *</label>
                      <select
                        name="treatment"
                        value={formData.treatment}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-950 dark:text-white transition-all ${
                          errors.treatment ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
                        }`}
                      >
                        <option value="">-- Select a Dental Treatment --</option>
                        {SERVICES_DATA.map((srv) => (
                          <option key={srv.id} value={srv.title}>{srv.title} ({srv.category})</option>
                        ))}
                      </select>
                      {errors.treatment && <p className="text-xs text-rose-500 font-medium">{errors.treatment}</p>}
                    </div>

                    {/* Message */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider">Message or Symptoms</label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please describe any tooth sensitivity, pain, or cosmetic goals you have..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-950 dark:text-white transition-all resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      id="booking-submit-btn"
                      type="submit"
                      className="w-full py-4 rounded-xl text-base font-bold text-white bg-gradient-brand hover:opacity-95 active:scale-98 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all cursor-pointer mt-2"
                    >
                      Book Appointment
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="booking-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-500 flex items-center justify-center mx-auto shadow-inner animate-bounce">
                      <CheckCircle size={36} />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white">Appointment Submitted Successfully!</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-md mx-auto">
                        Thank you, <strong>{formData.fullName}</strong>. Your preferred request for <strong>{formData.treatment}</strong> on <strong>{formData.preferredDate}</strong> has been registered.
                      </p>
                      <p className="text-xs text-slate-400 max-w-sm mx-auto">
                        Our Pune clinical coordinator will review slots and call you on <strong>{formData.mobileNumber}</strong> within 2 hours to confirm your final schedule.
                      </p>
                    </div>

                    {/* Success CTAs */}
                    <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                      <a
                        href={getWhatsAppURL(formData)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-3 px-4 rounded-xl text-sm font-bold text-white bg-emerald-500 hover:bg-emerald-600 text-center flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <MessageSquare size={16} />
                        Confirm via WhatsApp
                      </a>
                      <button
                        onClick={resetForm}
                        className="py-3 px-6 rounded-xl text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                      >
                        Book Another Appointment
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

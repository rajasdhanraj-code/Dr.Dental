export interface Service {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  category: "Preventive" | "Cosmetic" | "Restorative" | "Surgical" | "Pediatric" | "Advanced";
  icon: string; // Lucide icon name
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  source: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  description: string;
  beforeImg: string;
  afterImg: string;
}

export interface ClinicImage {
  id: string;
  title: string;
  category: "Reception" | "Treatment Room" | "Dental Equipment" | "Waiting Area" | "Happy Patients" | "Clinic Exterior";
  url: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface Appointment {
  fullName: string;
  mobileNumber: string;
  email: string;
  treatment: string;
  preferredDate: string;
  message: string;
}

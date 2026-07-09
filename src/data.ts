import { Service, WhyChooseUsItem, Review, BeforeAfterItem, ClinicImage, FAQItem } from "./types";

export const SERVICES_DATA: Service[] = [
  {
    id: "teeth-cleaning",
    title: "Professional Teeth Cleaning",
    description: "Remove plaque, tartar, and surface stains to maintain clean, fresh, and healthy gums.",
    detailedDescription: "A professional teeth cleaning (scaling and polishing) is the cornerstone of good oral hygiene. Our dental hygienists use modern ultrasonic scaling instruments to painlessly remove hardened plaque (calculus) and surface stains. This prevents gingivitis, cavities, and bad breath, leaving your smile feeling fresh and bright.",
    category: "Preventive",
    icon: "Sparkles"
  },
  {
    id: "dental-checkups",
    title: "Dental Check-ups",
    description: "Comprehensive oral examinations and professional dental advice for early cavity detection.",
    detailedDescription: "Regular check-ups allow Dr. Phadatare to monitor your overall oral health. Using high-precision diagnostics, we inspect teeth for early decay, evaluate gum health, conduct oral cancer screenings, and provide tailored dental hygiene advice. Early detection prevents minor issues from becoming complex treatments.",
    category: "Preventive",
    icon: "ClipboardCheck"
  },
  {
    id: "digital-xrays",
    title: "Digital X-Rays",
    description: "High-precision, low-radiation imaging to detect hidden dental issues instantly.",
    detailedDescription: "Our digital X-ray technology provides instant high-resolution imagery of your teeth, roots, and jaw bone structure. It uses up to 90% less radiation than traditional film X-rays. This helps us accurately diagnose hidden decay, abscesses, bone loss, and impacted teeth before they cause pain.",
    category: "Preventive",
    icon: "ScanFace"
  },
  {
    id: "teeth-whitening",
    title: "Teeth Whitening",
    description: "Premium professional whitening to remove deep stains and brighten your smile significantly.",
    detailedDescription: "Brighten your smile in just one session! We offer advanced chair-side professional teeth whitening that uses premium-grade whitening gels activated by specialized curing lights. It safely removes deep stains caused by tea, coffee, age, or tobacco, elevating your confidence with a brilliant white smile.",
    category: "Cosmetic",
    icon: "Zap"
  },
  {
    id: "dental-bonding",
    title: "Dental Bonding",
    description: "Quick, non-invasive restoration for chipped, cracked, or slightly spaced teeth.",
    detailedDescription: "Dental bonding involves applying a tooth-colored composite resin to repair chips, cracks, or minor gaps. The resin is carefully sculpted to match your surrounding teeth and hardened with a special light. This cost-effective cosmetic procedure delivers dramatic, natural-looking improvements in a single visit.",
    category: "Cosmetic",
    icon: "Layers"
  },
  {
    id: "teeth-reshaping",
    title: "Teeth Reshaping",
    description: "Subtle, painless contouring to improve the alignment and symmetry of your teeth.",
    detailedDescription: "Teeth reshaping (odontoplasty) is a subtle, pain-free procedure that alters the shape, length, or surface of your teeth. By removing tiny amounts of tooth enamel, we can smooth out rough edges, correct overlapping, and balance your smile's harmony instantly.",
    category: "Cosmetic",
    icon: "Grid3X3"
  },
  {
    id: "veneers",
    title: "Veneers",
    description: "Ultra-thin, custom-made porcelain or composite shells for a perfect Hollywood smile makeover.",
    detailedDescription: "Veneers are ultra-thin custom shells of dental porcelain or high-grade composite designed to cover the front surface of your teeth. They are the premier choice for correcting severe stains, gaps, uneven tooth sizes, or crooked teeth, resulting in a perfectly balanced, spectacular smile.",
    category: "Cosmetic",
    icon: "ShieldCheck"
  },
  {
    id: "cosmetic-dentistry",
    title: "Cosmetic Dentistry",
    description: "Personalized smile design services to craft your absolute best aesthetic smile.",
    detailedDescription: "Cosmetic dentistry is an art form. Dr. Phadatare combines multiple aesthetic techniques—whitening, veneers, contouring, and alignment—to perform full smile makeovers tailored to your facial features, skin tone, and personal desires, ensuring a highly natural and jaw-dropping outcome.",
    category: "Cosmetic",
    icon: "Heart"
  },
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    description: "Painless, expert root canal therapies to save infected teeth and eliminate toothache.",
    detailedDescription: "A root canal is a highly routine, painless procedure designed to save a severely damaged or infected tooth. We remove the inflamed dental pulp, clean and disinfect the root canals, and seal the space. We use modern rotary instruments and local anesthesia to ensure your treatment is quiet, comfortable, and completely pain-free.",
    category: "Restorative",
    icon: "Activity"
  },
  {
    id: "dental-fillings",
    title: "Dental Fillings",
    description: "Strong, tooth-colored composite fillings to restore cavities cleanly and invisibly.",
    detailedDescription: "We use premium, BPA-free, tooth-colored composite resins for all dental fillings. Unlike dark silver amalgam, composite fillings blend seamlessly with your natural enamel, restoring the tooth's structural strength, sealing off bacteria, and maintaining a beautifully clean appearance.",
    category: "Restorative",
    icon: "Gem"
  },
  {
    id: "dental-crowns",
    title: "Dental Crowns",
    description: "Custom, high-strength porcelain or zirconia caps to protect and restore weakened teeth.",
    detailedDescription: "Dental crowns (caps) cover damaged or weakened teeth, restoring their shape, size, strength, and appearance. We offer ultra-premium Zirconia and E-Max porcelain crowns that replicate the natural translucency of real teeth while offering outstanding longevity and chewing durability.",
    category: "Restorative",
    icon: "Crown"
  },
  {
    id: "dentures-bridges",
    title: "Dentures & Bridges",
    description: "Premium fixed bridges and comfortable custom dentures to replace missing teeth perfectly.",
    detailedDescription: "Don't let missing teeth affect your chewing or speech. We design durable dental bridges (fixed restorations supported by adjacent teeth) and premium light-weight partial or complete dentures. Our prosthetics are custom-fabricated to fit your gum lines snugly, restoring your facial structure and biting ability.",
    category: "Restorative",
    icon: "Smile"
  },
  {
    id: "dental-implants",
    title: "Dental Implants",
    description: "Lifetime, modern tooth replacement solutions that look, feel, and function like real teeth.",
    detailedDescription: "Dental implants represent the gold standard in modern tooth replacement. An implant consists of a medical-grade titanium post placed in the jawbone, acting as a root, topped by a premium dental crown. It prevents bone loss, stays permanently fixed, and provides 100% natural chewing strength.",
    category: "Restorative",
    icon: "Anchor"
  },
  {
    id: "mouth-guards",
    title: "Mouth Guards",
    description: "Custom-fit protective sports guards and night guards to prevent tooth wear and clenching.",
    detailedDescription: "We provide high-quality, custom-molded night guards to prevent bruxism (nighttime teeth grinding/clenching) which causes jaw pain and enamel wear. We also design custom athletic mouthguards for sports enthusiasts to protect teeth and gums from impact injuries.",
    category: "Preventive",
    icon: "ShieldAlert"
  },
  {
    id: "pediatric-dentistry",
    title: "Pediatric Dentistry",
    description: "Gentle, friendly, and completely stress-free dental care tailored for young children.",
    detailedDescription: "We understand that dental visits can be scary for little ones. Our pediatric care is designed to be gentle, playful, and educational. Dr. Phadatare and staff take special care to build a trust-based relationship, offering milk-teeth extractions, cavity fillings, fluoride treatments, and gentle cleanings.",
    category: "Pediatric",
    icon: "Baby"
  },
  {
    id: "laser-dentistry",
    title: "Laser Dentistry",
    description: "Advanced, highly precise laser treatments for virtually bleeding-free and painless tissue care.",
    detailedDescription: "Laser dentistry is a state-of-the-art approach that uses narrow, focused light beams for precise tissue care. It minimizes bleeding, reduces the need for sutures, accelerates healing times, and lowers the risk of bacterial infection, making gum treatments, biopsies, and whitening much more comfortable.",
    category: "Advanced",
    icon: "Flame"
  },
  {
    id: "tooth-extractions",
    title: "Tooth Extractions",
    description: "Gentle and completely sterile tooth extractions, including complex wisdom teeth removals.",
    detailedDescription: "While our priority is always to preserve natural teeth, some cases require extractions due to severe decay, overcrowding, or dental impaction (especially wisdom teeth). Dr. Phadatare performs extractions using highly sterile, gentle techniques under local anesthesia to guarantee minimum pressure or discomfort.",
    category: "Surgical",
    icon: "Scissors"
  },
  {
    id: "oral-surgery",
    title: "Oral Surgery",
    description: "Advanced surgical solutions including bone grafting and cosmetic gum procedures.",
    detailedDescription: "For more advanced cases, our clinic provides expert oral surgical procedures. This includes jaw bone grafting prior to implants, root-end resection (apicoectomy), and advanced aesthetic gum grafting. All surgeries are performed in a strictly sterile environment following rigid global protocols.",
    category: "Surgical",
    icon: "Stethoscope"
  },
  {
    id: "emergency-dental",
    title: "Emergency Dental Care",
    description: "Urgent, immediate assistance for severe toothaches, accidents, or broken teeth.",
    detailedDescription: "Dental emergencies can happen at any time and require swift attention. If you are experiencing unbearable tooth pain, a dental abscess, a knocked-out tooth, or a cracked crown, call us immediately. We prioritize urgent patients to provide rapid pain relief and repair on the same day.",
    category: "Advanced",
    icon: "FlameKindling"
  }
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: "equipment",
    title: "Modern Dental Equipment",
    description: "Equipped with state-of-the-art digital dental chairs, low-radiation x-rays, and premium dental lasers.",
    icon: "Cpu"
  },
  {
    id: "experience",
    title: "Experienced Dental Care",
    description: "Led by highly skilled dental experts with a proven history of performing thousands of successful dental restorations.",
    icon: "Award"
  },
  {
    id: "comfort",
    title: "Comfortable & Pain-Free",
    description: "We use advanced micro-needle anesthesia techniques and laser systems to ensure high comfort and minimal discomfort.",
    icon: "Heart"
  },
  {
    id: "pricing",
    title: "Affordable & Transparent Pricing",
    description: "No hidden charges. Clear, structured treatment estimates given to patients upfront before initiating care.",
    icon: "IndianRupee"
  },
  {
    id: "personalized",
    title: "Personalized Patient Care",
    description: "We design individual custom treatment courses based strictly on your long-term oral goals and medical records.",
    icon: "UserCheck"
  },
  {
    id: "emergency",
    title: "Emergency Dental Support",
    description: "Dedicated urgent care slots available daily to relieve unexpected toothaches or oral emergencies rapidly.",
    icon: "Clock"
  }
];

export const REVIEWS_DATA: Review[] = [
  {
    id: "rev-1",
    name: "Akshay Kulkarni",
    rating: 5,
    text: "Very calm doctor. Best service.",
    date: "2 weeks ago",
    source: "Google Review"
  },
  {
    id: "rev-2",
    name: "Pooja Patil",
    rating: 5,
    text: "Best treatment. Good staff and very cooperative.",
    date: "1 month ago",
    source: "Google Review"
  },
  {
    id: "rev-3",
    name: "Rahul Deshmukh",
    rating: 5,
    text: "Have a lot of dental work done here. My whole family visits this clinic. Things always go well.",
    date: "3 months ago",
    source: "Google Review"
  },
  {
    id: "rev-4",
    name: "Snehal Shinde",
    rating: 5,
    text: "Doctor explains the treatment very clearly and behaves very politely. Clinic is clean and hygienic.",
    date: "1 month ago",
    source: "Google Review"
  },
  {
    id: "rev-5",
    name: "Amol Jagtap",
    rating: 5,
    text: "Very professional dental clinic in Hadapsar. Root canal treatment was absolutely painless.",
    date: "2 months ago",
    source: "Google Review"
  }
];

export const BEFORE_AFTER_DATA: BeforeAfterItem[] = [
  {
    id: "ba-1",
    title: "Smile Makeover",
    description: "Full mouth veneers and cosmetic contouring to create a beautifully symmetric smile.",
    beforeImg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600&h=450",
    afterImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600&h=450"
  },
  {
    id: "ba-2",
    title: "Teeth Whitening",
    description: "Advanced chairside laser teeth whitening. Brightened by up to 8 shades in one hour.",
    beforeImg: "https://images.unsplash.com/photo-1513224502586-d1e602410265?auto=format&fit=crop&q=80&w=600&h=450",
    afterImg: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=600&h=450"
  },
  {
    id: "ba-3",
    title: "Zirconia Dental Crowns",
    description: "Restored heavily chipped and decayed front teeth using high-translucency Zirconia crowns.",
    beforeImg: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600&h=450&blur=2",
    afterImg: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600&h=450&brightness=110"
  }
];

export const CLINIC_GALLERY_DATA: ClinicImage[] = [
  {
    id: "cg-1",
    title: "Modern Reception Area",
    category: "Reception",
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: "cg-2",
    title: "Premium Dental Operatory",
    category: "Treatment Room",
    url: "https://images.unsplash.com/photo-1513224502586-d1e602410265?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: "cg-3",
    title: "Advanced Dental Chair & Laser",
    category: "Dental Equipment",
    url: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: "cg-4",
    title: "Warm Waiting Lounge",
    category: "Waiting Area",
    url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: "cg-5",
    title: "Happy Patient Consultation",
    category: "Happy Patients",
    url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800&h=600"
  },
  {
    id: "cg-6",
    title: "Dr. Phadatare Dental Exterior",
    category: "Clinic Exterior",
    url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800&h=600"
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "Do you provide emergency dental treatment?",
    answer: "Yes, we offer emergency dental appointments on the same day for cases involving severe dental pain, knocked-out or broken teeth, swollen gums, or tooth infections. Please contact us at +91 97674 37855 immediately."
  },
  {
    id: "faq-2",
    question: "How long does teeth whitening take?",
    answer: "Our professional chairside dental whitening treatment takes approximately 45 to 60 minutes in a single visit and can brighten your teeth up to 8 shades instantly using safe curing-light technology."
  },
  {
    id: "faq-3",
    question: "Is root canal treatment painful?",
    answer: "No, root canal treatments at our clinic are completely pain-free. We use modern rotary files, highly effective local anesthesia, and soft laser systems. Most patients feel immediate relief from the toothache rather than pain during the procedure."
  },
  {
    id: "faq-4",
    question: "Do you treat children?",
    answer: "Yes, we love working with children! Dr. Phadatare and our patient staff are highly experienced in pediatric dentistry, providing gentle cleanings, milk-teeth fillings, extractions, and protective fluoride application."
  },
  {
    id: "faq-5",
    question: "What payment methods are accepted?",
    answer: "We accept all major credit/debit cards, UPI payments (GPay, PhonePe, Paytm), net banking, as well as cash. We also offer easy installment estimates for advanced procedures like implants and orthodontics."
  },
  {
    id: "faq-6",
    question: "Do I need an appointment?",
    answer: "While we do accommodate walk-ins for emergencies, we highly recommend booking an appointment in advance. This ensures minimal wait times and guarantees dedicated, unhurried time with Dr. Phadatare. You can book directly using our website form or by calling +91 97674 37855."
  }
];

export const SEO_KEYWORDS = [
  "Best Dentist in Hadapsar",
  "Best Dentist in Pune",
  "Dental Clinic in Hadapsar",
  "Root Canal Treatment Pune",
  "Teeth Whitening Pune",
  "Dental Implants Pune",
  "Cosmetic Dentist Pune",
  "Family Dentist Pune",
  "Emergency Dentist Hadapsar",
  "Dental Clinic Near Me"
];

// ============================================================
// Clinic Configuration — single source of truth
// Update this file to change any clinic details site-wide.
// ============================================================

export const clinicConfig = {
  // Clinic identity
  clinicName: 'Kawade Dental Clinic',
  tagline: 'Exceptional Dental Care & Straight Smile',
  doctorName: 'Dr. Kawade',
  doctorFullName: 'Dr. Suresh Kawade',
  doctorTitle: 'BDS, MDS – Prosthodontics',
  doctorExperience: '15+ Years of Experience',

  // Contact
  phone: '+919876543210',
  phoneDisplay: '+91 98765 43210',
  whatsapp: '919876543210', // without + sign, used in wa.me URL
  email: 'kawadedental@gmail.com',

  // Location
  address: '123, Main Road, Pune, Maharashtra – 411001',
  addressLine1: '123, Main Road',
  addressLine2: 'Pune, Maharashtra – 411001',
  mapUrl: 'https://maps.google.com/?q=Kawade+Dental+Clinic+Pune',

  // Working hours
  workingHours: {
    weekdays: 'Mon – Sat: 9:00 AM – 7:00 PM',
    sunday: 'Sunday: By Appointment Only',
  },

  // Social media
  facebook: 'https://facebook.com/kawadedental',
  instagram: 'https://instagram.com/kawadedental',

  // WhatsApp pre-filled message
  whatsappMessage: 'Hello Doctor, I would like to book an appointment.',

  // Statistics
  stats: {
    surgeries: '170+',
    satisfiedClients: '85%',
    staffMembers: '176',
    yearlySurgeries: '98+',
  },
} as const;

// Helper: WhatsApp deep-link URL with pre-filled message
export const getWhatsAppUrl = (): string => {
  const encoded = encodeURIComponent(clinicConfig.whatsappMessage);
  return `https://wa.me/${clinicConfig.whatsapp}?text=${encoded}`;
};

// Helper: tel: link
export const getPhoneUrl = (): string => `tel:${clinicConfig.phone}`;

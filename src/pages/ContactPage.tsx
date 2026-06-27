import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { clinicConfig, getPhoneUrl, getWhatsAppUrl } from '../config/clinicConfig';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';

export function ContactPage() {
  const { t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network request for EmailJS/Formspree integration
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    }, 1500);
  };

  return (
    <section className="min-h-screen pt-28 pb-20 bg-gray-50" aria-label="Contact Us">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <SectionHeading
            label="Contact"
            heading={t('contact.heading')}
            subheading={t('contact.description')}
            align="center"
          />
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          
          {/* Contact Information Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            {[
              { icon: <Phone size={24} strokeWidth={1.5} />, label: 'Phone', value: clinicConfig.phoneDisplay, href: getPhoneUrl() },
              { icon: <Mail size={24} strokeWidth={1.5} />, label: 'Email', value: clinicConfig.email, href: `mailto:${clinicConfig.email}` },
              { icon: <MapPin size={24} strokeWidth={1.5} />, label: 'Address', value: clinicConfig.addressLine1, subValue: clinicConfig.addressLine2, href: clinicConfig.mapUrl },
              { icon: <Clock size={24} strokeWidth={1.5} />, label: 'Hours', value: clinicConfig.workingHours.weekdays, subValue: clinicConfig.workingHours.sunday },
            ].map(({ icon, label, value, subValue, href }) => (
              <div key={label} className="flex items-start gap-5 p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-[#0077b6]/20 transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#0077b6]/10 text-[#0077b6] flex items-center justify-center shrink-0 group-hover:bg-[#0077b6] group-hover:text-white transition-colors duration-300">
                  {icon}
                </div>
                <div>
                  <p className="text-sm text-[#6b7280] font-semibold tracking-wider mb-1 uppercase">{label}</p>
                  {href ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-[#1f2937] font-medium hover:text-[#0077b6] transition-colors text-base block">
                      {value}
                    </a>
                  ) : (
                    <p className="text-[#1f2937] font-medium text-base">{value}</p>
                  )}
                  {subValue && <p className="text-[#6b7280] text-sm mt-0.5">{subValue}</p>}
                </div>
              </div>
            ))}

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-2">
              <Button as="a" href={getPhoneUrl()} variant="primary" size="md" icon={<Phone size={16} />} iconPosition="left" className="w-full">
                Call Now
              </Button>
              <Button as="a" href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" variant="outline" size="md" icon={<MessageCircle size={16} />} iconPosition="left" className="w-full !border-green-500 !text-green-600 hover:!bg-green-500 hover:!text-white">
                WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 bg-white rounded-[2rem] p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#caf0f8]/50 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
            
            <h2 className="text-3xl font-black text-[#1f2937] mb-8 relative z-10">
              {t('contact.formHeading')}
            </h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-[#374151]">{t('contact.name')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t('contact.namePlaceholder')}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0077b6]/30 focus:border-[#0077b6] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-semibold text-[#374151]">{t('contact.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t('contact.phonePlaceholder')}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0077b6]/30 focus:border-[#0077b6] transition-all"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-[#374151]">{t('contact.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t('contact.emailPlaceholder')}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0077b6]/30 focus:border-[#0077b6] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-semibold text-[#374151]">{t('contact.subject')}</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={t('contact.subjectPlaceholder')}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0077b6]/30 focus:border-[#0077b6] transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-[#374151]">{t('contact.message')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.messagePlaceholder')}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0077b6]/30 focus:border-[#0077b6] transition-all resize-none"
                />
              </div>

              <div className="mt-2">
                <Button 
                  type="submit" 
                  variant="primary" 
                  size="lg" 
                  className="w-full sm:w-auto min-w-[200px]"
                  disabled={status === 'submitting'}
                  icon={status === 'submitting' ? undefined : <Send size={18} />}
                >
                  {status === 'submitting' ? t('contact.submitting') : t('contact.submit')}
                </Button>
              </div>
              
              {/* Status Messages */}
              {status === 'success' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium leading-relaxed">{t('contact.successMessage')}</p>
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                  <p className="text-sm font-medium leading-relaxed">{t('contact.errorMessage')}</p>
                </motion.div>
              )}

            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

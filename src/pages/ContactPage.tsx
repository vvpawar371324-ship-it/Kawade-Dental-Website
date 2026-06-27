import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin, Mail, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { clinicConfig, getPhoneUrl, getWhatsAppUrl } from '../config/clinicConfig';
import { Button } from '../components/ui/Button';

export function ContactPage() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="text-4xl md:text-5xl font-black text-[#1f2937] mb-4">
            {t('contact.heading')}
          </h1>
          <p className="text-[#6b7280] text-lg">{t('contact.description')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {[
              { icon: <Phone size={20} />, label: 'Phone', value: clinicConfig.phoneDisplay, href: getPhoneUrl() },
              { icon: <Mail size={20} />, label: 'Email', value: clinicConfig.email, href: `mailto:${clinicConfig.email}` },
              { icon: <MapPin size={20} />, label: 'Address', value: clinicConfig.address, href: clinicConfig.mapUrl },
              { icon: <Clock size={20} />, label: 'Hours', value: `${clinicConfig.workingHours.weekdays} · ${clinicConfig.workingHours.sunday}`, href: undefined },
            ].map(({ icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 p-5 rounded-2xl border border-gray-100 hover:border-[#0077b6]/30 hover:shadow-sm transition-all duration-300">
                <div className="w-10 h-10 rounded-xl bg-[#0077b6]/10 text-[#0077b6] flex items-center justify-center shrink-0">
                  {icon}
                </div>
                <div>
                  <p className="text-xs text-[#6b7280] font-semibold uppercase tracking-wider mb-0.5">{label}</p>
                  {href ? (
                    <a href={href} className="text-[#1f2937] font-medium hover:text-[#0077b6] transition-colors text-sm">{value}</a>
                  ) : (
                    <p className="text-[#1f2937] font-medium text-sm">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3 mt-2">
              <Button as="a" href={getPhoneUrl()} variant="primary" size="md" icon={<Phone size={16} />} iconPosition="left">
                Call Now
              </Button>
              <Button as="a" href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" variant="outline" size="md" icon={<MessageCircle size={16} />} iconPosition="left">
                WhatsApp
              </Button>
            </div>
          </motion.div>

          {/* Contact form placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gray-50 rounded-3xl p-8 border border-gray-100"
          >
            <h2 className="text-xl font-bold text-[#1f2937] mb-6">Send us a Message</h2>
            <p className="text-[#6b7280] text-sm italic">Full contact form with EmailJS integration coming soon…</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

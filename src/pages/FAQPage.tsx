import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export function FAQPage() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-[#1f2937] mb-4">
            {t('faq.heading')}
          </h1>
          <p className="text-[#6b7280] text-lg">{t('faq.description')}</p>
          <p className="mt-8 text-[#6b7280] italic text-sm">Full FAQ accordion coming soon…</p>
        </motion.div>
      </div>
    </section>
  );
}

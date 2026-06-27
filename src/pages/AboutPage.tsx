import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { clinicConfig } from '../config/clinicConfig';

export function AboutPage() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen pt-28 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-black text-[#1f2937] mb-4">
            {t('about.heading')}
          </h1>
          <p className="text-[#6b7280] text-lg mb-8">{t('about.description')}</p>

          {/* Doctor card */}
          <div className="bg-[#caf0f8] rounded-3xl p-10 flex flex-col items-center gap-4 shadow-inner max-w-md mx-auto">
            <div className="w-24 h-24 rounded-full bg-[#0077b6] flex items-center justify-center text-white text-4xl font-black shadow-lg">
              {clinicConfig.doctorFullName.charAt(4)}
            </div>
            <h2 className="text-2xl font-bold text-[#1f2937]">
              {clinicConfig.doctorFullName}
            </h2>
            <p className="text-[#0077b6] font-semibold">{clinicConfig.doctorTitle}</p>
            <p className="text-[#6b7280] text-sm">{clinicConfig.doctorExperience}</p>
            <p className="text-[#6b7280] italic text-sm mt-2">{t('about.comingSoon')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

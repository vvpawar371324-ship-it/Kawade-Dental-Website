import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { clinicConfig } from '../config/clinicConfig';
import { SectionHeading } from '../components/ui/SectionHeading';
import { CheckCircle2 } from 'lucide-react';

export function AboutPage() {
  const { t } = useLanguage();
  const qualifications = t('about.qualificationsList') as unknown as string[];

  return (
    <section className="min-h-screen pt-28 pb-20 bg-white" aria-label="About the Doctor">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <SectionHeading
            label="About"
            heading={t('about.heading')}
            subheading={t('about.description')}
            align="center"
          />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column - Doctor Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-[#caf0f8] rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center gap-5 shadow-inner border border-white/50"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[#0077b6] flex items-center justify-center text-white text-5xl font-black shadow-xl ring-8 ring-white/40">
              {clinicConfig.doctorFullName.charAt(4)}
            </div>
            <div className="text-center mt-2">
              <h2 className="text-2xl md:text-3xl font-black text-[#0a0f1e] mb-1">
                {clinicConfig.doctorFullName}
              </h2>
              <p className="text-[#0077b6] font-bold tracking-wide">
                {clinicConfig.doctorTitle}
              </p>
              <div className="inline-block mt-4 px-4 py-1.5 bg-white rounded-full shadow-sm text-sm font-semibold text-[#374151]">
                {clinicConfig.doctorExperience}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-10"
          >
            
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-[#1f2937] mb-4 flex items-center gap-2">
                <span className="w-8 h-1 bg-[#0077b6] rounded-full inline-block" />
                {t('about.experience')}
              </h3>
              <p className="text-[#4b5563] text-lg leading-relaxed">
                {t('about.experienceText')}
              </p>
            </div>

            {/* Qualifications */}
            <div>
              <h3 className="text-2xl font-bold text-[#1f2937] mb-5 flex items-center gap-2">
                <span className="w-8 h-1 bg-[#0077b6] rounded-full inline-block" />
                {t('about.qualifications')}
              </h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {Array.isArray(qualifications) && qualifications.map((qual, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <CheckCircle2 className="w-5 h-5 text-[#0077b6] shrink-0 mt-0.5" />
                    <span className="text-[#4b5563] font-medium leading-tight">{qual}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mission */}
            <div className="bg-[#0a0f1e] text-white rounded-3xl p-8 md:p-10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#0077b6]/20 blur-3xl rounded-full" />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t('about.missionTitle')}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed italic">
                  "{t('about.missionDesc')}"
                </p>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}

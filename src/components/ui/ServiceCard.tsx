import { motion } from 'framer-motion';
import { ArrowRight, Stethoscope, Syringe, Sparkles, Activity, Shield, Heart } from 'lucide-react';

export type IconName = 'Stethoscope' | 'Syringe' | 'Sparkles' | 'Activity' | 'Shield' | 'Heart';

interface ServiceCardProps {
  title: string;
  description: string;
  iconName: IconName;
  learnMoreText: string;
  delay?: number;
}

const iconMap = {
  Stethoscope,
  Syringe,
  Sparkles,
  Activity,
  Shield,
  Heart,
};

export function ServiceCard({ title, description, iconName, learnMoreText, delay = 0 }: ServiceCardProps) {
  const IconComponent = iconMap[iconName] || Stethoscope;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-blue-50/50 hover:border-[#0077b6]/20 transition-all duration-300 flex flex-col items-start gap-4 cursor-pointer"
    >
      <div className="w-14 h-14 rounded-2xl bg-[#0077b6]/10 text-[#0077b6] flex items-center justify-center group-hover:bg-[#0077b6] group-hover:text-white transition-colors duration-300">
        <IconComponent size={28} strokeWidth={1.5} />
      </div>
      <h3 className="text-xl font-bold text-[#1f2937] group-hover:text-[#0077b6] transition-colors mt-2">
        {title}
      </h3>
      <p className="text-[#6b7280] leading-relaxed flex-1">
        {description}
      </p>
      <div className="mt-4 flex items-center gap-2 text-[#0077b6] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
        {learnMoreText} <ArrowRight size={16} />
      </div>
    </motion.article>
  );
}

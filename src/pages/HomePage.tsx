import { motion } from 'framer-motion';
import { ArrowRight, Phone, MapPin, Star, Shield, Clock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { clinicConfig, getWhatsAppUrl, getPhoneUrl } from '../config/clinicConfig';
import { Button } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { StatCard } from '../components/ui/StatCard';

/* ─── Animation Variants ──────────────────────────────────── */
const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } },
};

/* ─── Service Card data ───────────────────────────────────── */
interface ServiceItem {
  titleKey: string;
  descKey: string;
  img: string;
  alt: string;
}

const serviceItems: ServiceItem[] = [
  {
    titleKey: 'services.vibrantCheckups.title',
    descKey: 'services.vibrantCheckups.description',
    img: 'https://images.unsplash.com/photo-1588776814546-1ffbb2ae11b4?w=600&q=80&auto=format',
    alt: 'Dental checkup',
  },
  {
    titleKey: 'services.revitalizedCleaning.title',
    descKey: 'services.revitalizedCleaning.description',
    img: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80&auto=format',
    alt: 'Teeth cleaning',
  },
  {
    titleKey: 'services.reinforcedFillings.title',
    descKey: 'services.reinforcedFillings.description',
    img: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80&auto=format',
    alt: 'Dental fillings',
  },
];

/* ─── Why Choose Us ──────────────────────────────────────── */
const chooseUsItems = [
  {
    icon: <Star className="w-6 h-6" />,
    title: 'Premium Quality',
    desc: 'We use only the highest-quality dental materials and state-of-the-art equipment.',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Safe & Hygienic',
    desc: 'Strict sterilization protocols and hygiene standards for every patient.',
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Convenient Hours',
    desc: 'Open six days a week with flexible timing for working professionals and families.',
  },
];

/* ═══════════════════════════════════════════════════════════ */
export function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      {/* ── Hero Section ───────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen bg-[#caf0f8] overflow-hidden flex items-center"
        aria-label="Hero section"
      >
        {/* Background watermark text */}
        <span
          aria-hidden="true"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[14vw] font-black text-[#b0dae8]/40 select-none pointer-events-none whitespace-nowrap tracking-tighter leading-none"
        >
          {clinicConfig.clinicName.split(' ')[0]}
        </span>

        {/* Decorative circles */}
        <div className="absolute top-20 right-10 w-80 h-80 rounded-full bg-white/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-[#90e0ef]/30 blur-2xl pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Left Column – Text */}
            <motion.div
              variants={stagger}
              initial="initial"
              animate="animate"
              className="flex flex-col gap-6"
            >
              {/* Badge */}
              <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 backdrop-blur-sm rounded-full text-xs font-semibold text-[#0077b6] border border-[#0077b6]/20 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#0077b6] animate-pulse" />
                  {t('hero.badge')}
                </span>
              </motion.div>

              {/* Headline */}
              <motion.div variants={fadeUp} transition={{ duration: 0.5 }}>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight text-[#0a0f1e]">
                  {t('hero.headline1')}{' '}
                  <br />
                  <span className="text-[#0077b6]">{t('hero.headline2')}</span>
                  <br />
                  <span className="text-[#374151]">{t('hero.headline3')}</span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="text-[#4b5563] text-base md:text-lg leading-relaxed max-w-md"
              >
                {t('hero.description')}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                <Button
                  as="a"
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="dark"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                >
                  {t('hero.ctaBook')}
                </Button>
                <Button
                  as="a"
                  href={getPhoneUrl()}
                  variant="outline"
                  size="lg"
                  icon={<Phone size={16} />}
                  iconPosition="left"
                >
                  {t('hero.ctaCall')}
                </Button>
              </motion.div>

              {/* Mini stats */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="flex items-start gap-2 mt-2"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-sm border border-white/60">
                  <p className="text-3xl font-black text-[#0a0f1e]">
                    {clinicConfig.stats.surgeries}
                  </p>
                  <p className="text-xs text-[#6b7280] mt-0.5">{t('hero.statsSuffix')}</p>
                </div>
                <div className="self-end bg-white/80 backdrop-blur-sm rounded-2xl p-3 shadow-sm border border-white/60 text-xs text-[#6b7280] max-w-[160px]">
                  {t('hero.statsLabel')}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column – Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="relative flex items-center justify-center min-h-[500px]"
            >
              {/* Decorative Orbital Rings behind the tooth */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
                className="absolute inset-0 m-auto w-[120%] aspect-square rounded-full border border-[#0077b6]/20 border-dashed z-0"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
                className="absolute inset-0 m-auto w-[90%] aspect-square rounded-full border border-white/50 z-0"
              />
              {/* Floating stat badges */}
              <motion.div
                animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="absolute top-10 right-0 lg:-right-8 bg-white/95 backdrop-blur rounded-2xl p-3 shadow-xl border border-gray-100/50 text-xs z-20 min-w-[140px]"
              >
                <div className="absolute -left-12 top-1/2 w-12 h-[1px] bg-[#0077b6]/30 hidden lg:block" />
                <p className="font-bold text-[#0a0f1e]">Root Canal Treatment</p>
                <p className="text-[#0077b6] font-semibold mt-0.5">Pain-free procedure</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-24 left-0 lg:-left-12 bg-white/95 backdrop-blur rounded-2xl p-3 shadow-xl border border-gray-100/50 text-xs z-20 min-w-[150px]"
              >
                <div className="absolute -right-16 top-1/2 w-16 h-[1px] bg-green-500/30 hidden lg:block" />
                <div className="absolute -right-16 top-1/2 w-2 h-2 rounded-full bg-green-500/50 -translate-y-1/2 hidden lg:block" />
                <p className="font-bold text-[#0a0f1e]">Dental Check-Up</p>
                <p className="text-green-600 font-semibold mt-0.5">✓ Available Today</p>
              </motion.div>

              {/* Location badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute top-1/2 lg:top-1/3 -right-2 lg:-right-12 flex items-center gap-1.5 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow-md text-xs font-semibold text-[#374151] z-20"
              >
                <MapPin size={12} className="text-[#0077b6]" />
                Pune, Maharashtra
              </motion.div>

              {/* Stats top-right */}
              <div className="absolute top-0 right-0 lg:right-[-20px] flex flex-col gap-2 z-10">
                <div className="text-right">
                  <p className="text-2xl font-black text-[#0a0f1e]">
                    {clinicConfig.stats.surgeries}
                  </p>
                  <p className="text-xs text-[#6b7280]">Performed<br/>surgeries</p>
                </div>
                <div className="text-right mt-1">
                  <p className="text-2xl font-black text-[#0a0f1e]">
                    {clinicConfig.stats.satisfiedClients}
                  </p>
                  <p className="text-xs text-[#6b7280]">Satisfied<br/>Clients</p>
                </div>
              </div>

              {/* Main hero image with float animation and blend mode */}
              <motion.div 
                className="relative w-full max-w-md mx-auto z-0"
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              >
                <img
                  src="/dental-implant.jpg"
                  alt="3D dental implant model"
                  className="w-full h-auto object-contain mix-blend-multiply drop-shadow-2xl scale-110"
                  loading="eager"
                  style={{ filter: 'contrast(1.1)' }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats Section ─────────────────────────────────── */}
      <section
        id="stats"
        className="bg-[#0a0f1e] py-16 md:py-20"
        aria-label="Statistics"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
            <StatCard
              value={clinicConfig.stats.surgeries}
              label={t('stats.surgeries')}
              light
              delay={0}
            />
            <StatCard
              value={clinicConfig.stats.satisfiedClients}
              label={t('stats.satisfiedClients')}
              light
              delay={0.1}
            />
            <StatCard
              value={clinicConfig.stats.staffMembers}
              label={t('stats.staffMembers')}
              light
              delay={0.2}
            />
            <StatCard
              value={clinicConfig.stats.yearlySurgeries}
              label={t('stats.yearlySurgeries')}
              light
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* ── Services Section ──────────────────────────────── */}
      <section
        id="services"
        className="bg-[#111827] py-20 md:py-28"
        aria-label="Services"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading row */}
          <div className="grid lg:grid-cols-2 gap-8 mb-14">
            <SectionHeading
              heading={t('services.heading')}
              headingAccent={t('services.headingAccent')}
              align="left"
              light
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-base md:text-lg leading-relaxed self-end"
            >
              {t('services.subheading')}
            </motion.p>
          </div>

          {/* Service cards grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceItems.map((item, idx) => (
              <motion.article
                key={item.titleKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group bg-[#1f2937] rounded-2xl overflow-hidden cursor-pointer border border-gray-700/50 hover:border-[#0077b6]/50 transition-colors duration-300"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={item.img}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1f2937] to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-white font-bold text-lg mb-2">{t(item.titleKey)}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{t(item.descKey)}</p>
                  <button className="mt-4 text-[#00b4d8] text-sm font-semibold flex items-center gap-1.5 group-hover:gap-3 transition-all duration-300">
                    Learn More <ArrowRight size={14} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────── */}
      <section
        id="why-us"
        className="py-20 md:py-28 bg-white"
        aria-label="Why choose us"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <SectionHeading
              label="Why Choose Us"
              heading="Excellence in Every"
              headingAccent="Treatment"
              subheading="We combine advanced technology with personalized care to deliver an outstanding dental experience."
              align="center"
            />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {chooseUsItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex flex-col gap-4 p-8 rounded-2xl border border-gray-100 hover:border-[#0077b6]/30 hover:shadow-lg hover:shadow-blue-50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#0077b6]/10 text-[#0077b6] flex items-center justify-center group-hover:bg-[#0077b6] group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-[#1f2937] text-xl">{item.title}</h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Discount / Savings Plan ───────────────────────── */}
      <section
        id="discount"
        className="py-20 md:py-24 bg-gray-50"
        aria-label="Discount plan"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1f2937] leading-tight">
                {t('discount.heading')}
              </h2>
              <p className="text-[#6b7280] text-base md:text-lg leading-relaxed">
                {t('discount.description')}
              </p>
              <Button as="a" href="/contact" variant="primary" size="md">
                {t('discount.cta')} <ArrowRight size={16} />
              </Button>
            </motion.div>

            {/* Badge card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="bg-[#caf0f8] rounded-3xl p-10 flex flex-col items-center gap-4 w-full max-w-sm shadow-inner">
                <div className="flex items-end gap-2">
                  <span className="text-7xl font-black text-[#0a0f1e]">
                    {t('discount.badgeTitle')}
                  </span>
                  {/* Smiley accent */}
                  <span className="text-4xl mb-2 select-none" aria-hidden="true">
                    🙂
                  </span>
                </div>
                <p className="text-sm text-[#374151] text-center leading-relaxed">
                  {t('discount.badgeText')}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Appointment CTA ───────────────────────────────── */}
      <section
        id="appointment-cta"
        className="relative py-24 bg-[#0077b6] overflow-hidden"
        aria-label="Book appointment"
      >
        {/* Decorative blobs */}
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 items-center"
          >
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
              {t('cta.heading')}
            </h2>
            <p className="text-blue-100 text-lg leading-relaxed max-w-xl">
              {t('cta.description')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                as="a"
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="lg"
                className="!border-white !text-white hover:!bg-white hover:!text-[#0077b6]"
                icon={<ArrowRight size={18} />}
              >
                {t('cta.button')}
              </Button>
              <Button
                as="a"
                href={getPhoneUrl()}
                variant="ghost"
                size="lg"
                className="!text-white hover:!bg-white/15"
                icon={<Phone size={16} />}
                iconPosition="left"
              >
                {t('hero.ctaCall')}
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

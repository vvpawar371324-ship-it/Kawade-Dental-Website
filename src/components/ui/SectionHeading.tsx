import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label?: string;
  heading: string;
  headingAccent?: string;
  subheading?: string;
  align?: 'left' | 'center' | 'right';
  light?: boolean;
}

export function SectionHeading({
  label,
  heading,
  headingAccent,
  subheading,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  const alignClass =
    align === 'left'
      ? 'items-start text-left'
      : align === 'right'
        ? 'items-end text-right'
        : 'items-center text-center';

  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`
            inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase
            ${light ? 'text-[#90e0ef]' : 'text-[#0077b6]'}
          `}
        >
          <span className={`w-8 h-0.5 ${light ? 'bg-[#90e0ef]' : 'bg-[#0077b6]'}`} />
          {label}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`
          text-3xl md:text-4xl lg:text-5xl font-bold leading-tight
          ${light ? 'text-white' : 'text-[#1f2937]'}
        `}
      >
        {heading}{' '}
        {headingAccent && (
          <span className={light ? 'text-[#90e0ef]' : 'text-[#0077b6]'}>
            {headingAccent}
          </span>
        )}
      </motion.h2>

      {subheading && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`
            max-w-2xl text-base md:text-lg leading-relaxed
            ${light ? 'text-gray-400' : 'text-[#6b7280]'}
          `}
        >
          {subheading}
        </motion.p>
      )}
    </div>
  );
}

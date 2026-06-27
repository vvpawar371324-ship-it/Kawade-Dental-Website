import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface StatCardProps {
  value: string;
  label: string;
  light?: boolean;
  delay?: number;
}

/** Parses a stat string like "170+" or "85%" into numeric + suffix parts */
function parseStat(raw: string): { num: number; suffix: string } {
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return { num: 0, suffix: raw };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setDisplay(target);
        clearInterval(timer);
      } else {
        setDisplay(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function StatCard({ value, label, light = false, delay = 0 }: StatCardProps) {
  const { num, suffix } = parseStat(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col gap-1"
    >
      <span
        className={`text-4xl md:text-5xl lg:text-6xl font-black tracking-tight ${
          light ? 'text-white' : 'text-[#1f2937]'
        }`}
      >
        <AnimatedNumber target={num} suffix={suffix} />
      </span>
      <span
        className={`text-sm md:text-base font-medium ${
          light ? 'text-gray-400' : 'text-[#6b7280]'
        }`}
      >
        {label}
      </span>
    </motion.div>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
              isOpen ? 'border-[#0077b6] bg-blue-50/30' : 'border-gray-200 bg-white hover:border-[#0077b6]/50'
            }`}
          >
            <button
              onClick={() => toggleItem(index)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-gray-50 cursor-pointer"
              aria-expanded={isOpen}
            >
              <span className={`font-semibold text-lg transition-colors duration-300 ${isOpen ? 'text-[#0077b6]' : 'text-[#1f2937]'}`}>
                {item.question}
              </span>
              <div
                className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                  isOpen ? 'bg-[#0077b6] text-white' : 'bg-gray-100 text-[#6b7280]'
                }`}
              >
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </div>
            </button>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 text-[#6b7280] leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}

import { useLanguage } from '../contexts/LanguageContext';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Accordion } from '../components/ui/Accordion';

export function FAQPage() {
  const { t } = useLanguage();
  
  // Safe access to FAQ items
  const faqItems = (t('faq.items') as unknown as { question: string; answer: string }[]) || [];

  return (
    <section className="min-h-screen pt-28 pb-24 bg-white" aria-label="Frequently Asked Questions">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <SectionHeading
            label="FAQ"
            heading={t('faq.heading')}
            subheading={t('faq.description')}
            align="center"
          />
        </div>

        {Array.isArray(faqItems) && faqItems.length > 0 ? (
          <Accordion items={faqItems} />
        ) : (
          <p className="text-center text-gray-500">FAQs are currently unavailable.</p>
        )}

      </div>
    </section>
  );
}

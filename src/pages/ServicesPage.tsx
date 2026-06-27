import { useLanguage } from '../contexts/LanguageContext';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ServiceCard, type IconName } from '../components/ui/ServiceCard';

export function ServicesPage() {
  const { t } = useLanguage();
  
  // Safe access to services items with a fallback empty array
  const servicesItems = (t('servicesPage.items') as unknown as any[]) || [];
  const learnMoreText = t('servicesPage.learnMore');

  return (
    <section className="min-h-screen pt-28 pb-24 bg-gray-50" aria-label="Our Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <SectionHeading
            label="Services"
            heading={t('servicesPage.heading')}
            subheading={t('servicesPage.description')}
            align="center"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {Array.isArray(servicesItems) && servicesItems.map((item, index) => (
            <ServiceCard
              key={index}
              title={item.title}
              description={item.description}
              iconName={item.icon as IconName}
              learnMoreText={learnMoreText}
              delay={index * 0.1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

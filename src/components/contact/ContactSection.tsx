import { useTranslation } from 'react-i18next';
import { Section } from '../shared/Section';
import { SectionTitle } from '../shared/SectionTitle';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

export const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <Section id="contact">
      <SectionTitle
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <ContactInfo />
        <ContactForm />
      </div>
    </Section>
  );
};
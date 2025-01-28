import { useTranslation } from 'react-i18next';
import { Section } from '../shared/Section';
import { SectionTitle } from '../shared/SectionTitle';
import { Experience } from './Experience';
import { Education } from './Education';
import { PersonalInfo } from './PersonalInfo';
import { AboutContent } from './AboutContent';

export const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <Section id="about" reducedPadding>
      <SectionTitle 
        title={t('about.title')} 
        subtitle={t('about.subtitle')} 
      />
      
      <div className="space-y-16">
        <PersonalInfo />
        <AboutContent />
        <Experience />
        <Education />
      </div>
    </Section>
  );
};
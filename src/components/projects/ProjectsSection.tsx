import { useTranslation } from 'react-i18next';
import { Section } from '../shared/Section';
import { SectionTitle } from '../shared/SectionTitle';
import { ProjectCard } from './ProjectCard';

export const ProjectsSection = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'CapitalTech',
      description: 'AI-powered SaaS platform for multi-family office investment management. Features automated portfolio analysis, risk assessment, and real-time market insights.',
      image: 'https://i.ibb.co/kST9Wp7/Captura-de-pantalla-2025-01-28-a-la-s-10-18-51-a-m.png',
      technologies: ['Python', 'SQL', 'React', 'Vue', 'TypeScript'],
      demoUrl: 'https://capitaltech.app',
      privateRepo: true
    },
    {
      title: 'AI Dashboard',
      description: t('projects.dashboard.description'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
      demoUrl: '#',
      githubUrl: '#'
    },
  ];

  return (
    <Section id="projects">
      <SectionTitle 
        title={t('projects.title')}
        subtitle={t('projects.subtitle')}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            delay={index * 0.2}
          />
        ))}
      </div>
    </Section>
  );
};
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Section } from './shared/Section';
import { SectionTitle } from './shared/SectionTitle';
import { Card } from './shared/Card';

export const Projects = () => {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'E-commerce Platform',
      description: t('projects.ecommerce.description'),
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'AI Dashboard',
      description: t('projects.dashboard.description'),
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      technologies: ['Python', 'TensorFlow', 'React', 'D3.js'],
      demoUrl: '#',
      githubUrl: '#',
    },
    // Add more projects as needed
  ];

  return (
    <Section id="projects">
      <SectionTitle 
        title={t('projects.title')}
        subtitle={t('projects.subtitle')}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} delay={index * 0.2}>
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary rounded-full text-white"
                >
                  <ExternalLink size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary rounded-full text-white"
                >
                  <Github size={20} />
                </motion.a>
              </div>
            </div>
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
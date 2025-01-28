import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Section } from './shared/Section';
import { SectionTitle } from './shared/SectionTitle';
import { Card } from './shared/Card';
import { Code, Database, LineChart } from 'lucide-react';

export const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    {
      title: t('skills.categories.programming'),
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: 'Python', level: 95 },
        { name: 'MySQL', level: 90 },
        { name: 'Power BI', level: 85 },
        { name: 'Looker Studio', level: 85 },
      ],
    },
    {
      title: t('skills.categories.webdev'),
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: 'React', level: 75 },
        { name: 'JavaScript', level: 70 },
        { name: 'TypeScript', level: 65 },
        { name: 'Vue.js', level: 60 },
      ],
    },
    {
      title: t('skills.categories.dataAnalysis'),
      icon: <LineChart className="w-6 h-6" />,
      skills: [
        { name: 'Statistical Analysis', level: 90 },
        { name: 'Data Visualization', level: 85 },
        { name: 'SQL Queries', level: 85 },
        { name: 'ETL Processes', level: 80 },
      ],
    },
  ];

  return (
    <Section id="skills" reducedPadding minHeight={false} className="mb-32">
      <SectionTitle 
        title={t('skills.title')}
        subtitle={t('skills.subtitle')}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((category, categoryIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.2 }}
          >
            <Card>
              <div className="flex items-center gap-2 mb-6">
                <span className="text-primary">{category.icon}</span>
                <h4 className="text-xl font-semibold">{category.title}</h4>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-dark-lighter rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-primary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
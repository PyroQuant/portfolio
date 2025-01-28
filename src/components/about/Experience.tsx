import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card } from '../shared/Card';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience = () => {
  const { t, i18n } = useTranslation();

  const experiences = [
    {
      company: 'Dirección de Postgrado UdeC',
      logo: 'https://i.ibb.co/TLYbq5y/images.png',
      role: t('about.experience.udecPostgrado.role'),
      period: 'Dec 2024 - Present',
      achievements: i18n.language === 'es' ? [
        'Desarrollo y mantenimiento del sitio web institucional',
        'Implementación de mejoras en la experiencia de usuario',
        'Optimización del rendimiento y SEO del sitio'
      ] : [
        'Development and maintenance of the institutional website',
        'Implementation of user experience improvements',
        'Website performance and SEO optimization'
      ]
    },
    {
      company: 'UdeC Asesorías',
      logo: 'https://i.ibb.co/0XYd8qJ/1647097491759-1.jpg',
      role: t('about.experience.udec.role'),
      period: 'Oct 2023 - Dec 2024',
      achievements: i18n.language === 'es' ? [
        'Creé dashboards interactivos en Looker Studio integrando datos de redes sociales',
        'Reduje el tiempo de generación de informes de campañas en un 50% mediante flujos automáticos',
        'Proporcioné insights basados en datos para optimizar campañas publicitarias'
      ] : [
        'Created interactive dashboards in Looker Studio integrating social media data',
        'Reduced campaign reporting time by 50% through automated workflows',
        'Provided data-driven insights to optimize advertising campaigns'
      ]
    },
    {
      company: 'Afitrading',
      logo: 'https://i.ibb.co/wJBjkwL/logoafitranding1-1.png',
      role: t('about.experience.afitrading.role'),
      period: 'Jul 2022 - Dec 2023',
      achievements: i18n.language === 'es' ? [
        'Diseñé scripts en Python para analizar datos de mercado en tiempo real, logrando una reducción del 40% en el tiempo de procesamiento',
        'Desarrollé reportes financieros en Power BI permitiendo un monitoreo eficiente de inversiones',
        'Implementé y gestioné bases de datos SQL mejorando la eficiencia de los procesos analíticos'
      ] : [
        'Designed Python scripts for real-time market data analysis, achieving 40% reduction in processing time',
        'Developed financial reports in Power BI enabling efficient investment monitoring',
        'Implemented and managed SQL databases improving analytical process efficiency'
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
        <Briefcase className="w-6 h-6" />
        {t('about.experience.title')}
      </h3>

      {experiences.map((exp, index) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
        >
          <Card>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-2 overflow-hidden">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-xl font-semibold">{exp.company}</h4>
                  <p className="text-primary">{exp.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Calendar className="w-4 h-4" />
                <span>{exp.period}</span>
              </div>
            </div>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span className="text-gray-300">{achievement}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};
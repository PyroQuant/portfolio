import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Code, Target, Lightbulb, Brain, Rocket, Zap } from 'lucide-react';
import { Card } from '../shared/Card';

export const AboutContent = () => {
  const { t, i18n } = useTranslation();

  const sections = [
    {
      icon: <Target className="w-8 h-8 text-primary" />,
      title: i18n.language === 'es' ? 'Mi Enfoque' : 'My Focus',
      content: i18n.language === 'es' 
        ? 'Especializado en el desarrollo de soluciones digitales que combinan análisis de datos y programación para resolver desafíos empresariales complejos.'
        : "Specialized in developing digital solutions that combine data analysis and programming to solve complex business challenges."
    },
    {
      icon: <Rocket className="w-8 h-8 text-primary" />,
      title: i18n.language === 'es' ? 'Mi Objetivo' : 'My Goal',
      content: i18n.language === 'es'
        ? 'Transformar procesos operativos en soluciones automatizadas que liberen el potencial humano para la innovación y el pensamiento estratégico.'
        : 'Transform operational processes into automated solutions that free human potential for innovation and strategic thinking.'
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: i18n.language === 'es' ? '¿Qué me motiva?' : 'What Drives Me',
      content: i18n.language === 'es'
        ? 'Ver cómo la automatización libera a las personas de tareas repetitivas, permitiéndoles invertir su tiempo en lo que realmente importa y genera valor.'
        : 'Seeing how automation frees people from repetitive tasks, allowing them to invest their time in what truly matters and generates value.'
    }
  ];

  const workApproach = [
    {
      icon: <Code className="w-6 h-6" />,
      title: i18n.language === 'es' ? 'Desarrollo Técnico' : 'Technical Development',
      description: i18n.language === 'es'
        ? 'Combino precisión técnica con creatividad'
        : 'Combining technical precision with creativity'
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: i18n.language === 'es' ? 'Innovación' : 'Innovation',
      description: i18n.language === 'es'
        ? 'Busco constantemente nuevas soluciones'
        : 'Constantly seeking new solutions'
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: i18n.language === 'es' ? 'Mejora Continua' : 'Continuous Improvement',
      description: i18n.language === 'es'
        ? 'Aprendizaje y adaptación constante'
        : 'Constant learning and adaptation'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <Card className="h-full">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {section.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {section.title}
                </h3>
                <p className="text-gray-300">
                  {section.content}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-dark-lighter rounded-xl p-8"
      >
        <h3 className="text-2xl font-bold text-primary mb-6 text-center">
          {i18n.language === 'es' ? 'Mi Enfoque de Trabajo' : 'My Work Approach'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {workApproach.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-primary">
                  {item.icon}
                </span>
              </div>
              <h4 className="text-lg font-semibold mb-2">
                {item.title}
              </h4>
              <p className="text-gray-400">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};
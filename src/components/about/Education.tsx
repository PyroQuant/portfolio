import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Card } from '../shared/Card';
import { GraduationCap, Award } from 'lucide-react';

export const Education = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-primary flex items-center gap-2">
        <GraduationCap className="w-6 h-6" />
        {t('about.education.title')}
      </h3>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Card>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1">
              <img
                src="https://i.ibb.co/zVWSd8W/f1b65857-afd0-4a2e-9707-11a202ea3fff.png"
                alt="Universidad de Concepción"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h4 className="text-xl font-semibold">Universidad de Concepción</h4>
              <p className="text-primary">
                {i18n.language === 'es' ? 'Ingeniero Comercial' : 'Commercial Engineer'}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h5 className="text-lg font-semibold mb-2">{t('about.education.thesis.title')}</h5>
              <p className="text-gray-300 mb-4">{t('about.education.thesis.description')}</p>
            </div>

            <div>
              <h5 className="text-lg font-semibold mb-2">{t('about.education.challenge.title')}</h5>
              <p className="text-gray-300">{t('about.education.challenge.description')}</p>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};
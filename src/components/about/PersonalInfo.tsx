import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { User, Mail, MapPin } from 'lucide-react';
import { Card } from '../shared/Card';

export const PersonalInfo = () => {
  const { t, i18n } = useTranslation();

  return (
    <Card className="relative overflow-hidden">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-shrink-0"
        >
          <div className="relative w-48 h-48">
            <img
              src="https://i.ibb.co/XXncgq4/ALE1223-Editar.jpg"
              alt="Sebastián García"
              className="w-full h-full object-cover object-top rounded-full border-4 border-primary/20"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-grow"
        >
          <h3 className="text-2xl font-bold mb-2 text-primary">Sebastián García Astorga</h3>
          <p className="text-gray-400 mb-4">{t('about.roles')}</p>
          
          <div className="space-y-2 mb-6">
            <div className="flex items-center gap-2 text-gray-300">
              <User size={18} className="text-primary" />
              <span>{i18n.language === 'es' ? 'Ingeniero Comercial' : 'Commercial Engineer'}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <Mail size={18} className="text-primary" />
              <span>{i18n.language === 'en' ? 'contact' : 'contacto'}@sebagarcia.dev</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300">
              <MapPin size={18} className="text-primary" />
              <span>Concepción, Chile</span>
            </div>
          </div>

          <p className="text-gray-300 leading-relaxed">
            {t('about.description')}
          </p>
        </motion.div>
      </div>
    </Card>
  );
};

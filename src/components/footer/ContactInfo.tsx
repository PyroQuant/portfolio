import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';

export const ContactInfo = () => {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h4 className="text-lg font-semibold text-white mb-4">{t('footer.contact')}</h4>
      <ul className="space-y-3">
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 text-gray-400"
        >
          <Mail className="w-5 h-5 text-primary" />
          <a
            href={`mailto:${i18n.language === 'en' ? 'contact' : 'contacto'}@sebastiangarcia.dev`}
            className="hover:text-primary transition-colors"
          >
            {i18n.language === 'en' ? 'contact' : 'contacto'}@sebastiangarcia.dev
          </a>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 text-gray-400"
        >
          <MapPin className="w-5 h-5 text-primary" />
          <span>Concepción, Chile</span>
        </motion.li>
      </ul>
    </div>
  );
};
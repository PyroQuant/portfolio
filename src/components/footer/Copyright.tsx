import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const Copyright = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="flex flex-col sm:flex-row justify-between items-center text-gray-400 text-sm"
    >
      <p>
        © {currentYear} Sebastián García. {' '}
        <span className="hidden sm:inline">{t('footer.rights')}</span>
      </p>
      <p className="mt-2 sm:mt-0">
        {t('footer.madeWith')}
      </p>
    </motion.div>
  );
};
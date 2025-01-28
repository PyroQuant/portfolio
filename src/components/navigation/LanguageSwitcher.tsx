import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggleLanguage = () => {
    i18n.changeLanguage(currentLang === 'en' ? 'es' : 'en');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-primary/10 hover:bg-primary/20 transition-colors"
      aria-label={currentLang === 'en' ? 'Switch to Spanish' : 'Switch to English'}
    >
      <span className="text-primary font-medium">
        {currentLang === 'en' ? 'ES' : 'EN'}
      </span>
      <span className="text-xs text-primary/80">
        {currentLang === 'en' ? '🇪🇸' : '🇬🇧'}
      </span>
    </motion.button>
  );
};
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export const FooterNav = () => {
  const { t } = useTranslation();

  const links = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.contact'), href: '#contact' }
  ];

  return (
    <nav aria-label="Footer Navigation">
      <h4 className="text-lg font-semibold text-white mb-4">{t('footer.navigation')}</h4>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <motion.li
            key={link.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <a
              href={link.href}
              className="text-gray-400 hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          </motion.li>
        ))}
      </ul>
    </nav>
  );
};
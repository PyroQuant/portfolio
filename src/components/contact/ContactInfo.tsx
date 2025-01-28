import { Mail, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const ContactInfo = () => {
  const { t, i18n } = useTranslation();
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: 'https://github.com/sebagarcia',
      label: 'GitHub'
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: 'https://linkedin.com/in/sebagarcia',
      label: 'LinkedIn'
    },
    {
      icon: <Twitter className="w-5 h-5" />,
      href: 'https://twitter.com/sebagarcia',
      label: 'Twitter'
    }
  ];

  return (
    <div className="space-y-6">
      <motion.a
        href={`mailto:${i18n.language === 'en' ? 'contact' : 'contacto'}@sebagarcia.dev`}
        whileHover={{ scale: 1.02 }}
        className="flex items-center gap-4 p-4 bg-dark-lighter rounded-lg hover:bg-dark-lighter/80 transition-colors"
      >
        <div className="p-3 bg-primary/10 rounded-full">
          <Mail className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h4 className="text-sm font-medium text-gray-400">Email</h4>
          <p className="text-white">{i18n.language === 'en' ? 'contact' : 'contacto'}@sebagarcia.dev</p>
        </div>
      </motion.a>

      <div className="space-y-4">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex items-center gap-4 p-4 bg-dark-lighter rounded-lg"
        >
          <div className="p-3 bg-primary/10 rounded-full">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-400">{t('contact.location')}</h4>
            <p className="text-white">Concepción, Chile</p>
          </div>
        </motion.div>

        <div className="flex justify-center gap-3 px-4">
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-dark-lighter rounded-full hover:bg-primary/10 transition-colors group"
              aria-label={link.label}
            >
              <div className="text-primary transition-colors">
                {link.icon}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};
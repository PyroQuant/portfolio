import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { SocialLinks } from './SocialLinks';
import { FooterNav } from './FooterNav';
import { ContactInfo } from './ContactInfo';
import { Copyright } from './Copyright';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-dark-lighter mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Branding and Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src="https://i.ibb.co/XXncgq4/ALE1223-Editar.jpg"
                alt="Sebastián García"
                className="w-12 h-12 rounded-full border-2 border-primary/30 object-cover object-top"
              />
              <h3 className="text-xl font-bold text-primary">Sebastián García</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('footer.tagline')}
            </p>
            <SocialLinks />
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <FooterNav />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <ContactInfo />
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <Copyright />
        </div>
      </div>
    </footer>
  );
};
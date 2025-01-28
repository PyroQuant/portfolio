import React from 'react';
import { useTranslation } from 'react-i18next';
import { Menu } from 'lucide-react';
import { LanguageSwitcher } from './navigation/LanguageSwitcher';
import { Logo } from './navigation/Logo';

export const Navigation = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed w-full z-50 bg-dark-lighter/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Logo />
          </div>
          
          <div className="hidden md:flex md:items-center md:gap-4">
            <div className="flex items-center space-x-4">
              {['home', 'projects', 'skills', 'about'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {t(`nav.${item}`)}
                </a>
              ))}
              <button
                onClick={scrollToContact}
                className="px-4 py-2 bg-primary hover:bg-primary-dark text-white rounded-md text-sm font-medium transition-colors"
              >
                {t('nav.contact')}
              </button>
              <LanguageSwitcher />
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['home', 'projects', 'skills', 'about'].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {t(`nav.${item}`)}
              </a>
            ))}
            <button
              onClick={scrollToContact}
              className="w-full text-left text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              {t('nav.contact')}
            </button>
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
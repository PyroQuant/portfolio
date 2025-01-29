import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Code, LineChart, Database } from 'lucide-react';
import { ParticlesBackground } from './hero/ParticlesBackground';
import { GlowingText } from './hero/GlowingText';
import { FloatingCards } from './hero/FloatingCards';

export const Hero = () => {
  const { t } = useTranslation();
  
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div className="relative min-h-screen pt-16 md:pt-20 flex items-center overflow-hidden">
      <ParticlesBackground />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark to-dark pointer-events-none" />
      
      {/* Content */}
      <div className="relative z-10 w-full py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="flex flex-wrap gap-4 mb-8">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-primary/10 rounded-full flex items-center gap-2"
                >
                  <Code className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary">Python</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-primary/10 rounded-full flex items-center gap-2"
                >
                  <LineChart className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary">Data Analysis</span>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-primary/10 rounded-full flex items-center gap-2"
                >
                  <Database className="w-4 h-4 text-primary" />
                  <span className="text-sm text-primary">Full Stack</span>
                </motion.div>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <GlowingText text={t('hero.title')} />
              </h1>
              
              <p className="text-xl text-gray-300 max-w-xl">
                {t('hero.subtitle')}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={scrollToProjects}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg font-medium flex items-center justify-center gap-2"
                >
                  {t('hero.cta.projects')}
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.a
                  href="https://drive.google.com/file/d/1ROFbwb6vkXj_hWwycYyMmA6Ehcj7U-9S/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(23, 23, 23, 0.9)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-dark-lighter backdrop-blur-sm text-white rounded-lg font-medium flex items-center justify-center gap-2 border border-primary/20"
                >
                  {t('hero.cta.resume')}
                  <Download className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>

            {/* Right Column - Floating Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <FloatingCards />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

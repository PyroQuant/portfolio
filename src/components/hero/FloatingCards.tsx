import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export const FloatingCards = () => {
  const { t } = useTranslation();
  
  const cards = [
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: t('skills.categories.dataAnalysis'),
      subtitle: "Python & Power BI",
      animation: { y: [-10, 10], rotate: [-2, 2] },
      duration: 3,
      className: "top-[5%] right-[5%] sm:top-0 sm:right-[10%]"
    },
    {
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: t('skills.categories.webdev'),
      subtitle: "React & TypeScript",
      animation: { y: [10, -10], rotate: [2, -2] },
      duration: 3.5,
      className: "top-[35%] left-[5%] sm:top-[20%] sm:left-[5%]"
    },
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: t('skills.categories.programming'),
      subtitle: "SQL & Market Data",
      animation: { y: [-5, 5], rotate: [-1, 1] },
      duration: 4,
      className: "top-[65%] right-[15%] sm:bottom-0 sm:right-[15%]"
    }
  ];

  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto scale-[0.65] sm:scale-[0.75] md:scale-85 lg:scale-100">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          animate={card.animation}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: card.duration,
            ease: "easeInOut"
          }}
          className={`absolute w-56 sm:w-64 bg-dark-lighter rounded-xl border border-primary/20 backdrop-blur-lg shadow-xl overflow-hidden transform hover:scale-105 transition-transform ${card.className}`}
          style={{
            zIndex: 10 - index
          }}
        >
          <div className="relative h-32 sm:h-40">
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-lighter/90" />
          </div>
          <div className="p-4">
            <h3 className="text-white font-semibold mb-1">{card.title}</h3>
            <p className="text-primary text-sm">{card.subtitle}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

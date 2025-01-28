import { motion } from 'framer-motion';

interface GlowingTextProps {
  text: string;
  className?: string;
}

export const GlowingText = ({ text, className = '' }: GlowingTextProps) => {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`relative inline-block ${className}`}
    >
      <span className="absolute blur-xl opacity-50 bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
        {text}
      </span>
      <span className="relative bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
        {text}
      </span>
    </motion.span>
  );
};
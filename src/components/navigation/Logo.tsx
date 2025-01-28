import { motion } from 'framer-motion';

export const Logo = () => {
  return (
    <motion.span
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-2xl font-signature text-primary"
      style={{
        textShadow: '0 0 10px rgba(16, 185, 129, 0.3)',
        fontFamily: '"Pacifico", cursive'
      }}
    >
      Sebastián García
    </motion.span>
  );
};
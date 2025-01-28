import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <Github className="w-5 h-5" />,
      url: 'https://github.com/yourusername',
      ariaLabel: 'Visit my GitHub profile'
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-5 h-5" />,
      url: 'https://linkedin.com/in/yourusername',
      ariaLabel: 'Connect with me on LinkedIn'
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: 'https://twitter.com/yourusername',
      ariaLabel: 'Follow me on Twitter'
    }
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.ariaLabel}
          className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-primary/10 rounded-full"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </div>
  );
};
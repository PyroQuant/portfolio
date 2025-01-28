import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '../shared/Card';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl?: string; // Make githubUrl optional
  delay?: number;
  privateRepo?: boolean; // Add flag for private repositories
}

export const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  demoUrl,
  githubUrl,
  delay = 0,
  privateRepo = false
}: ProjectCardProps) => {
  return (
    <Card delay={delay}>
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-primary rounded-full text-white"
          >
            <ExternalLink size={20} />
          </motion.a>
          {!privateRepo && githubUrl && (
            <motion.a
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-primary rounded-full text-white"
            >
              <Github size={20} />
            </motion.a>
          )}
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </Card>
  );
};
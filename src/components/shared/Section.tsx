import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id: string;
  className?: string;
  reducedPadding?: boolean;
  noPaddingBottom?: boolean;
  minHeight?: boolean;
}

export const Section = ({ 
  children, 
  id, 
  className = '', 
  reducedPadding = false,
  noPaddingBottom = false,
  minHeight = true
}: SectionProps) => {
  const getPaddingClasses = () => {
    const basePadding = reducedPadding ? 'pt-12 md:pt-16' : 'pt-20 md:pt-24';
    const bottomPadding = noPaddingBottom ? '' : reducedPadding ? 'pb-12 md:pb-16' : 'pb-20 md:pb-24';
    return `${basePadding} ${bottomPadding}`;
  };

  return (
    <section
      id={id}
      className={`${minHeight ? 'min-h-screen' : ''} ${getPaddingClasses()} px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};
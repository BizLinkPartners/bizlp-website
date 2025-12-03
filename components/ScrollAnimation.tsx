import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  delay = 0 
}: ScrollAnimationProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: "-50px",
    amount: 0.3
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: delay
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

interface StartupAnimationProps {
  onComplete: () => void;
}

export default function StartupAnimation({ onComplete }: StartupAnimationProps) {
  const [isVisible, setIsVisible] = useState(true);
  const companyName = 'BizLP';
  const letters = companyName.split('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out to complete
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-white flex items-center justify-center"
        >
          {/* Company Name Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              delay: 0.2 
            }}
            className="relative"
          >
            {/* Main company name that scales up */}
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.2 }}
              transition={{ 
                duration: 0.6, 
                ease: "easeInOut",
                delay: 1.2 
              }}
              className="text-6xl sm:text-8xl md:text-9xl font-light tracking-wider text-black"
            >
              {companyName}
            </motion.div>

            {/* Individual letters that scatter and reassemble */}
            {letters.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ 
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  x: '-50%',
                  y: '-50%',
                  opacity: 0
                }}
                animate={{
                  opacity: [0, 1, 1, 1, 0],
                  scale: [1, 1.5, 1.5, 1, 1],
                  x: [
                    '-50%',
                    '-50%',
                    `${(index - letters.length / 2) * 100}px`,
                    `${(index - letters.length / 2) * 100}px`,
                    '-50%'
                  ],
                  y: [
                    '-50%',
                    '-50%',
                    `${Math.sin(index) * 50}px`,
                    `${Math.sin(index) * 50}px`,
                    '-50%'
                  ],
                  rotate: [0, 0, 360, 360, 0]
                }}
                transition={{
                  duration: 2.5,
                  times: [0, 0.3, 0.4, 0.7, 1],
                  ease: "easeInOut",
                  delay: 0.5
                }}
                className="absolute text-6xl sm:text-8xl md:text-9xl font-light tracking-wider text-black"
                style={{
                  transformOrigin: 'center'
                }}
              >
                {letter}
              </motion.span>
            ))}

            {/* Final assembled text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                duration: 0.8, 
                ease: "easeInOut",
                delay: 2.2 
              }}
              className="text-6xl sm:text-8xl md:text-9xl font-light tracking-wider text-black"
            >
              {companyName}
            </motion.div>
          </motion.div>

          {/* Subtle background animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute inset-0 bg-black"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

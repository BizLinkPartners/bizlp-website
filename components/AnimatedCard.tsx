import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

// 仕様で定義された fadeUp variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function AnimatedCard({
  children,
  className = '',
  delay = 0
}: AnimatedCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: "-50px",
    amount: 0.3
  });

  // アクセシビリティ: prefers-reduced-motion 対応
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeUp}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: delay
      }}
      // ホバー時のアニメーション: 控えめなスケール + 影の強調
      whileHover={{
        scale: 1.02,
        boxShadow: "0 10px 30px -10px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

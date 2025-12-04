import { motion, useReducedMotion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  showIcon?: boolean;
  href?: string;
}

export default function AnimatedButton({
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  showIcon = true,
  href
}: AnimatedButtonProps) {
  // アクセシビリティ: prefers-reduced-motion 対応
  const shouldReduceMotion = useReducedMotion();

  const buttonContent = (
    <>
      <span className="relative z-10">{children}</span>
      {showIcon && (
        <motion.span
          className="relative z-10 inline-block ml-2"
          initial={{ x: 0 }}
          animate={{ x: 0 }}
          whileHover={shouldReduceMotion ? {} : { x: 4 }}
          transition={{ duration: 0.2, ease: [0.61, 1, 0.88, 1] }}
        >
          →
        </motion.span>
      )}
    </>
  );

  // リンクとして使用する場合
  if (href) {
    return (
      <motion.a
        href={href}
        className={className}
        {...(!shouldReduceMotion && {
          whileHover: { scale: 1.05 },
          whileTap: { scale: 0.98 },
          transition: { duration: 0.2 }
        })}
      >
        {buttonContent}
      </motion.a>
    );
  }

  // ボタンとして使用する場合
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      {...(!shouldReduceMotion && {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.2 }
      })}
    >
      {buttonContent}
    </motion.button>
  );
}

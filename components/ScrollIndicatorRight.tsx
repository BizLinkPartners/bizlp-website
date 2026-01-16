import { motion, useReducedMotion } from 'framer-motion';

/**
 * 右端スクロールインジケータ（kick.co.jp風）
 * - 「SCROLL」縦置き文字
 * - 下方向へ流れる縦線アニメーション
 * - 全画面サイズで表示
 */
export default function ScrollIndicatorRight() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className="absolute right-4 md:right-6 bottom-32 z-40 flex flex-col items-center gap-3 pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* SCROLL 縦置き文字 */}
      <span
        className="text-[10px] tracking-[0.3em] text-black font-light"
        style={{ writingMode: 'vertical-rl' }}
      >
        SCROLL
      </span>

      {/* 動く縦線（伸び縮み） */}
      <div className="relative w-px h-24">
        <motion.div
          className="absolute left-0 w-px bg-black"
          animate={
            shouldReduceMotion
              ? { top: '0%', height: '100%' }
              : {
                  top: ['0%', '0%', '100%'],
                  height: ['0%', '100%', '0%'],
                }
          }
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : {
                  duration: 2.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  times: [0, 0.5, 1],
                }
          }
        />
      </div>
    </div>
  );
}

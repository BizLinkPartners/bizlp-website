import { motion } from 'framer-motion';
import ScrollIndicatorRight from '@/components/ScrollIndicatorRight';

/**
 * タイポグラフィ中心のヒーローセクション
 *
 * 参考デザイン：巨大タイポグラフィと余白を重視したレイアウト
 * - メインコピーを1行で表示
 * - 大きなタイポグラフィと余白を重視
 * - モノクローム配色
 * - 上寄せ配置
 */

// メインコピー
const MAIN_COPY = ['「信じあえる」を科学する'];

// サブコピー（文ごとに配列化）
const SUB_COPY_LINES = [
  '疑い、迷い、探り合う。',
  '私たちはこれまで、人間関係の摩擦に多くの時間を費やしてきました。',
  '社会心理学の知見とAIの予測技術は、その「見えないコスト」をゼロにします。',
  '誰もが根拠を持って信頼し合える、透明でやさしい社会へ'
];

// framer-motion variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export default function TypographyHero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden pt-60 md:pt-40 pb-20 text-black">
      {/* メインコンテンツ */}
      <div className="container-responsive px-4 sm:px-8 md:px-12 lg:px-16">
        {/* メインコピー - 巨大タイポグラフィ（左寄せ） */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <div className="flex flex-wrap justify-start items-baseline gap-x-3 sm:gap-x-4 md:gap-x-6 text-left">
            {MAIN_COPY.map((token, index) => (
              <motion.h1
                key={index}
                variants={itemVariants}
                className="text-[clamp(24px,9vw,160px)] font-bold text-black tracking-tight leading-[0.95] font-sans whitespace-nowrap"
              >
                {token}
              </motion.h1>
            ))}
          </div>
        </motion.div>

        {/* サブコピー - 本文（左寄せ） */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.0,
            ease: [0.25, 0.46, 0.45, 0.94],
            delay: 0.5,
          }}
          className="mb-12 sm:mb-16"
        >
          <div
            className="text-[clamp(9px,1.2vw,18px)] text-black/75 max-w-[58ch] leading-relaxed font-normal text-left"
            style={{ marginLeft: 'calc(clamp(24px, 9vw, 160px) * 0.5)' }}
          >
            {SUB_COPY_LINES.map((line, index) => (
              <p key={index} className="whitespace-nowrap">
                {line}
              </p>
            ))}
          </div>
          {/* 会社名（Follow Us風） */}
          <p
            className="mt-10 sm:mt-12 text-xs sm:text-sm text-black/70 font-light tracking-wide whitespace-nowrap"
            style={{ marginLeft: 'calc(clamp(24px, 9vw, 160px) * 0.5)' }}
          >
            株式会社ビズリンクパートナーズ
          </p>
        </motion.div>
      </div>

      {/* スクロールインジケータ（右端） */}
      <ScrollIndicatorRight />
    </section>
  );
}

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
 * - フォント: Noto Sans JP（全デバイスで統一）
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
  // CSS変数でメインコピーのフォントサイズを定義（マージン計算にも使用）
  const cssVars = {
    '--main-font-size': 'clamp(20px, 6.5vw, 160px)',
  } as React.CSSProperties;

  return (
    <section
      className="relative min-h-screen bg-white overflow-hidden pt-60 md:pt-40 pb-20 text-black"
      style={cssVars}
    >
      {/* メインコンテンツ */}
      <div className="container-responsive px-4 sm:px-8 md:px-12 lg:px-16">
        {/* メインコピー - 巨大タイポグラフィ（左寄せ）- Noto Sans JP Black */}
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
                className="text-black tracking-tight leading-[0.95] whitespace-nowrap"
                style={{
                  fontSize: 'var(--main-font-size)',
                  fontFamily: '"Noto Sans JP", sans-serif',
                  fontWeight: 900,
                }}
              >
                {token}
              </motion.h1>
            ))}
          </div>
        </motion.div>

        {/* サブコピー - 本文（左寄せ、「信」の左端に揃える）- Noto Sans JP Regular */}
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
          {/* 「信」の位置に揃える（Noto Sans JPで統一されているため、1文字分のマージンで正確に揃う） */}
          <div
            className="text-[clamp(10px,1.4vw,18px)] text-black/75 max-w-[58ch] leading-relaxed text-left"
            style={{
              marginLeft: 'var(--main-font-size)',
              fontFamily: '"Noto Sans JP", sans-serif',
              fontWeight: 400,
            }}
          >
            {SUB_COPY_LINES.map((line, index) => (
              <p key={index} className="whitespace-nowrap">
                {line}
              </p>
            ))}
          </div>
          {/* 会社名 - Noto Sans JP Light */}
          <p
            className="mt-10 sm:mt-12 text-xs sm:text-sm text-black/70 tracking-wide whitespace-nowrap"
            style={{
              marginLeft: 'var(--main-font-size)',
              fontFamily: '"Noto Sans JP", sans-serif',
              fontWeight: 300,
            }}
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

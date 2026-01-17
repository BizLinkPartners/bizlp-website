import { useState } from 'react';
import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function About() {
  // アコーディオン開閉状態（null = 全て閉じる、'purpose' | 'mission' | 'vision' = 該当項目を開く）
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (item: string) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <Layout
      title="会社情報 | 株式会社ビズリンクパートナーズ"
      description="AI・DXコンサルティングで企業の成長を支援する株式会社ビズリンクパートナーズの会社情報"
    >
      <div className="min-h-screen bg-white">

        {/* About Overview Table */}
        <section className="bg-white py-20 md:py-32">
          <div className="mx-auto max-w-[840px] px-6 sm:px-8 lg:px-12">
            <ScrollAnimation>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide mb-12 text-center">
                会社概要
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="overflow-hidden border border-gray-200">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base w-1/3">
                        会社名
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        株式会社ビズリンクパートナーズ ／ BizLink Partners Co., Ltd.
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base">
                        代表取締役
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        齋藤 達希
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base">
                        所在地
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        〒915-0075 福井県越前市幸町５番１０号
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base">
                        設立
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        2025年11月
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base">
                        資本金
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        3,000,000円
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base">
                        従業員数
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        1名（2026年1月現在）
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base align-top">
                        事業内容
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>人工知能（AI）、機械学習、生成AI、自然言語処理等の技術を活用したシステム・サービスの企画、開発、運用業務</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>DX（デジタルトランスフォーメーション）推進に関する企画、コンサルティング及び実行支援</span>
                          </li>
                          <li className="flex items-start">
                            <span className="inline-block w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span>経営戦略、事業計画、組織開発、業務改善等に関するコンサルティング業務</span>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base">
                        主要取引銀行
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        福井銀行
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Message Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-8 md:gap-10 lg:gap-14 items-start">
              {/* Profile Image - 円形 */}
              <ScrollAnimation>
                <div className="flex justify-center md:justify-start">
                  <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden">
                    <Image
                      src="/image/profile.jpg"
                      alt="代表取締役 齋藤 達希"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </ScrollAnimation>

              {/* Text Content */}
              <ScrollAnimation delay={0.2}>
                <div>
                  {/* 引用符 + 見出し */}
                  <div className="flex items-start gap-2 mb-4">
                    <span className="text-4xl md:text-5xl font-light text-[#554C51]/30 leading-none select-none">"</span>
                    <p className="text-base md:text-lg lg:text-xl font-light text-[#554C51] leading-relaxed pt-1">
                      研究・コンサルティング・事業開発の知見を融合し、AIでビジネスを変革する
                    </p>
                  </div>

                  {/* 本文 */}
                  <div className="text-sm md:text-base font-light leading-relaxed mb-6 text-[#909397]" style={{lineHeight: '1.8'}}>
                    <p>
                      自動車会社での認知工学研究にキャリアの端を発し、大手コンサルティングファームでの戦略・業務改革、そしてAI・データ事業会社での実務推進と、一貫して「データと技術による価値創出」に従事してきました。金融、小売、製造、公共、人材、エンタテインメントなど、幅広い業界でのプロジェクト経験を持ち、特に近年は生成AI活用やDX組織の立ち上げにおいて多数の実績を有します。「コンサルタントの具体化力」「研究者のモデル化力」「事業主の推進力」を掛け合わせ、お客様のビジネスに実益をもたらすIT・AIソリューションを提供いたします。
                    </p>
                  </div>

                  {/* 専門領域 */}
                  <div className="mb-6">
                    <p className="text-xs md:text-sm font-light text-[#554C51] mb-3">専門領域：</p>
                    <ul className="space-y-1.5">
                      <li className="flex items-start">
                        <span className="inline-block w-1 h-1 bg-[#554C51]/50 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span className="text-sm font-light text-[#909397]"><span className="text-[#554C51]">事業開発・経営企画：</span> 新規事業・組織の立ち上げ、営業企画、管理会計導入</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1 h-1 bg-[#554C51]/50 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span className="text-sm font-light text-[#909397]"><span className="text-[#554C51]">AI・データ活用：</span> 生成AIを活用した新サービス開発、需要予測、最適化アルゴリズム策定</span>
                      </li>
                      <li className="flex items-start">
                        <span className="inline-block w-1 h-1 bg-[#554C51]/50 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                        <span className="text-sm font-light text-[#909397]"><span className="text-[#554C51]">プロジェクト推進：</span> ビジネスおよびIT/AI要件定義、PM/PMO業務</span>
                      </li>
                    </ul>
                  </div>

                  {/* 署名 */}
                  <div className="text-right">
                    <p className="text-xs font-light text-[#909397]">
                      株式会社ビズリンクパートナーズ 代表取締役
                    </p>
                    <p className="text-base md:text-lg font-light text-[#554C51] mt-0.5">
                      齋藤 達希
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </section>

        {/* 経営理念 Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[840px] px-6 sm:px-8 lg:px-12">
            <ScrollAnimation>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide mb-16 text-center">
                経営理念
              </h2>
            </ScrollAnimation>

            {/* PURPOSE */}
            <ScrollAnimation delay={0.1}>
              <div className="border-t border-[#554C51]/20">
                <button
                  onClick={() => toggleItem('purpose')}
                  aria-expanded={openItem === 'purpose'}
                  aria-controls="purpose-content"
                  className="w-full py-8 md:py-10 flex items-center justify-between text-left cursor-pointer group"
                >
                  <div>
                    <p className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.15em] text-[#554C51] mb-2">PURPOSE</p>
                    <p className="text-xs md:text-sm font-light text-[#909397]">わたしたちの存在意義</p>
                  </div>
                  <motion.svg
                    animate={{ rotate: openItem === 'purpose' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 md:w-6 md:h-6 text-[#554C51]/60 flex-shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openItem === 'purpose' && (
                    <motion.div
                      id="purpose-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 md:pb-10">
                        <p className="text-lg md:text-xl lg:text-2xl font-light text-[#554C51] mb-4" style={{lineHeight: '1.6'}}>
                          「信じあえる」を手続きから解放する。
                        </p>
                        <p className="text-sm md:text-base font-light text-[#909397]" style={{lineHeight: '1.8'}}>
                          信じるための確認作業（＝手続き）に費やされる膨大な時間とエネルギーをゼロにすること
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollAnimation>

            {/* MISSION */}
            <ScrollAnimation delay={0.2}>
              <div className="border-t border-[#554C51]/20">
                <button
                  onClick={() => toggleItem('mission')}
                  aria-expanded={openItem === 'mission'}
                  aria-controls="mission-content"
                  className="w-full py-8 md:py-10 flex items-center justify-between text-left cursor-pointer group"
                >
                  <div>
                    <p className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.15em] text-[#554C51] mb-2">MISSION</p>
                    <p className="text-xs md:text-sm font-light text-[#909397]">わたしたちの使命</p>
                  </div>
                  <motion.svg
                    animate={{ rotate: openItem === 'mission' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 md:w-6 md:h-6 text-[#554C51]/60 flex-shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openItem === 'mission' && (
                    <motion.div
                      id="mission-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 md:pb-10">
                        <p className="text-lg md:text-xl lg:text-2xl font-light text-[#554C51] mb-4" style={{lineHeight: '1.6'}}>
                          「信じあえる」を科学にする。
                        </p>
                        <p className="text-sm md:text-base font-light text-[#909397]" style={{lineHeight: '1.8'}}>
                          曖昧な「信頼」という現象を解明し、誰もが扱える力に変えること。
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollAnimation>

            {/* VISION */}
            <ScrollAnimation delay={0.3}>
              <div className="border-t border-[#554C51]/20 border-b">
                <button
                  onClick={() => toggleItem('vision')}
                  aria-expanded={openItem === 'vision'}
                  aria-controls="vision-content"
                  className="w-full py-8 md:py-10 flex items-center justify-between text-left cursor-pointer group"
                >
                  <div>
                    <p className="text-3xl md:text-4xl lg:text-5xl font-light tracking-[0.15em] text-[#554C51] mb-2">VISION</p>
                    <p className="text-xs md:text-sm font-light text-[#909397]">わたしたちが目指す未来</p>
                  </div>
                  <motion.svg
                    animate={{ rotate: openItem === 'vision' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-5 h-5 md:w-6 md:h-6 text-[#554C51]/60 flex-shrink-0 ml-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {openItem === 'vision' && (
                    <motion.div
                      id="vision-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 md:pb-10">
                        <p className="text-lg md:text-xl lg:text-2xl font-light text-[#554C51] mb-4" style={{lineHeight: '1.6'}}>
                          「信じあえる」を、1秒で。
                        </p>
                        <p className="text-sm md:text-base font-light text-[#909397]" style={{lineHeight: '1.8'}}>
                          出会った瞬間に手を取りあえる社会にする。
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* 沿革 Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[840px] px-6 sm:px-8 lg:px-12">
            <ScrollAnimation>
              <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide">
                  沿革
                </h2>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="relative">
                {/* 2025年 */}
                <div className="flex">
                  {/* 年（左カラム） */}
                  <div className="w-16 md:w-20 flex-shrink-0 text-right pr-4 md:pr-6">
                    <span className="text-lg md:text-xl font-light text-[#554C51]">2025</span>
                  </div>
                  {/* タイムライン（中央） */}
                  <div className="relative flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#554C51]/70 flex-shrink-0 mt-1.5"></div>
                    <div className="w-px bg-[#554C51]/30 flex-grow"></div>
                  </div>
                  {/* 内容（右カラム） */}
                  <div className="flex-grow pl-4 md:pl-6 pb-10 md:pb-12">
                    <div className="flex items-baseline">
                      <span className="w-10 md:w-12 text-sm md:text-base font-light text-[#554C51] flex-shrink-0">11月</span>
                      <span className="text-sm md:text-base font-light text-[#909397]">株式会社ビズリンクパートナーズ設立</span>
                    </div>
                  </div>
                </div>

                {/* 2026年 - 1月 */}
                <div className="flex">
                  {/* 年（左カラム） */}
                  <div className="w-16 md:w-20 flex-shrink-0 text-right pr-4 md:pr-6">
                    <span className="text-lg md:text-xl font-light text-[#554C51]">2026</span>
                  </div>
                  {/* タイムライン（中央） */}
                  <div className="relative flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#554C51]/70 flex-shrink-0 mt-1.5"></div>
                    <div className="w-px bg-[#554C51]/30 flex-grow"></div>
                  </div>
                  {/* 内容（右カラム） */}
                  <div className="flex-grow pl-4 md:pl-6 pb-10 md:pb-12">
                    <div className="flex items-baseline">
                      <span className="w-10 md:w-12 text-sm md:text-base font-light text-[#554C51] flex-shrink-0">1月</span>
                      <span className="text-sm md:text-base font-light text-[#909397]">DXコンサルティング事業を開始</span>
                    </div>
                  </div>
                </div>

                {/* 2026年 - 2月（年は省略） */}
                <div className="flex">
                  {/* 年（左カラム）- 空白 */}
                  <div className="w-16 md:w-20 flex-shrink-0"></div>
                  {/* タイムライン（中央） */}
                  <div className="relative flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#554C51]/70 flex-shrink-0 mt-1.5"></div>
                    <div className="w-px bg-[#554C51]/30 flex-grow"></div>
                  </div>
                  {/* 内容（右カラム） */}
                  <div className="flex-grow pl-4 md:pl-6 pb-10 md:pb-12">
                    <div className="flex items-baseline">
                      <span className="w-10 md:w-12 text-sm md:text-base font-light text-[#554C51] flex-shrink-0">2月</span>
                      <span className="text-sm md:text-base font-light text-[#909397]">事業拡大のため事務所を移転</span>
                    </div>
                  </div>
                </div>

                {/* 2026年 - 3月（年は省略、最後の項目） */}
                <div className="flex">
                  {/* 年（左カラム）- 空白 */}
                  <div className="w-16 md:w-20 flex-shrink-0"></div>
                  {/* タイムライン（中央） */}
                  <div className="relative flex flex-col items-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#554C51]/70 flex-shrink-0 mt-1.5"></div>
                  </div>
                  {/* 内容（右カラム） */}
                  <div className="flex-grow pl-4 md:pl-6">
                    <div className="flex items-baseline">
                      <span className="w-10 md:w-12 text-sm md:text-base font-light text-[#554C51] flex-shrink-0">3月</span>
                      <span className="text-sm md:text-base font-light text-[#909397]">コーポレートサイト公開</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

      </div>
    </Layout>
  );
}



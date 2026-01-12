import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import Image from 'next/image';

export default function About() {
  return (
    <Layout
      title="会社情報 | 株式会社ビズリンクパートナーズ"
      description="AI・DXコンサルティングで企業の成長を支援する株式会社ビズリンクパートナーズの会社情報"
    >
      <div className="min-h-screen bg-white">

        {/* Hero Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="mx-auto max-w-[1040px] px-6 sm:px-8 lg:px-12">
            <ScrollAnimation>
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-6">
                  About
                </h1>
                <p className="text-xl md:text-2xl font-light mb-4">
                  株式会社ビズリンクパートナーズ
                </p>
                <p className="body-text leading-relaxed">
                  AI・DXコンサルティングで企業の成長を支援
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

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
                        株式会社ビズリンクパートナーズ
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base">
                        所在地
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        福井県越前市新町８号１番地
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base">
                        代表取締役
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        齋藤達希
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base">
                        設立
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base">
                        2025年11月19日
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Business Content */}
        <section className="bg-gray-50 py-20 md:py-32">
          <div className="mx-auto max-w-[840px] px-6 sm:px-8 lg:px-12">
            <ScrollAnimation>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide mb-12 text-center">
                事業内容
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#554C51] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="body-text leading-relaxed">
                    人工知能（AI）、機械学習、生成AI、自然言語処理等の技術を活用したシステム・サービスの企画、開発、運用業務
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#554C51] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="body-text leading-relaxed">
                    DX（デジタルトランスフォーメーション）推進に関する企画、コンサルティング及び実行支援
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-[#554C51] rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="body-text leading-relaxed">
                    経営戦略、事業計画、組織開発、業務改善等に関するコンサルティング業務
                  </p>
                </li>
              </ul>
            </ScrollAnimation>
          </div>
        </section>

        {/* Profile & Biography Section */}
        <section className="bg-white py-20 md:py-32">
          <div className="mx-auto max-w-[1040px] px-6 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

              {/* Profile Image */}
              <ScrollAnimation>
                <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg bg-gray-50">
                  <Image
                    src="/image/profile.jpg"
                    alt="代表取締役 齋藤達希"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </ScrollAnimation>

              {/* Biography */}
              <ScrollAnimation delay={0.2}>
                <div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide mb-8">
                    経歴
                  </h2>
                  <div className="space-y-4 body-text leading-relaxed" style={{lineHeight: '1.9'}}>
                    <p>
                      千葉大学大学院修了後、日産自動車でデータ分析や経営企画に従事。アビームで経営改革支援に携わり、以後、リクルートなどでAI・データ活用の新規事業を推進。EAGLYSで経営企画を経て、2025年に越前市でビズリンクパートナーズを設立。コンサルタント・研究者・事業主という3つの立場を経験した知見を活かし、「データと経営をつなぐ地方創成の実践家」として活動している。
                    </p>
                  </div>
                </div>
              </ScrollAnimation>

            </div>
          </div>
        </section>

        {/* Message Section */}
        <section className="bg-gray-50 py-20 md:py-32">
          <div className="mx-auto max-w-[840px] px-6 sm:px-8 lg:px-12">
            <ScrollAnimation>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide mb-12 text-center">
                代表メッセージ
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="space-y-6 body-text leading-relaxed">
                <p>
                  テクノロジーは企業の可能性を広げます。AI・DXは単なる技術ではなく、事業成長のための強力な道具です。私たちは、この道具を最大限に活用し、企業の競争力を高めるお手伝いをします。
                </p>
                <p>
                  越前市という地方都市から、全国へ、そして世界へ。地域に根ざしながらも、常に先進的な技術とビジョンを持ち続けることで、未来のビジネスをつくっていきます。
                </p>
                <p>
                  お客様と共に歩み、共に成長する。そんなパートナーシップを大切にしながら、確かな価値を提供してまいります。
                </p>
              </div>

              <div className="mt-12 text-right">
                <p className="small-text">
                  株式会社ビズリンクパートナーズ
                </p>
                <p className="text-base md:text-lg font-light mt-2">
                  代表取締役　齋藤達希
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

      </div>
    </Layout>
  );
}



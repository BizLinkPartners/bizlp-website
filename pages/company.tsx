import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import Image from 'next/image';

export default function Company() {
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
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wider text-black mb-6">
                  Company
                </h1>
                <p className="text-xl md:text-2xl font-light text-gray-600 mb-4">
                  株式会社ビズリンクパートナーズ
                </p>
                <p className="text-base md:text-lg font-light text-gray-500 leading-relaxed">
                  AI・DXコンサルティングで企業の成長を支援
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="flex justify-center mt-16">
                <div className="relative w-full max-w-[480px] aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
                  <Image
                    src="/image/profile.jpg"
                    alt="株式会社ビズリンクパートナーズ 代表取締役 齋藤達希"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Message Section */}
        <section className="bg-gray-50 py-20 md:py-32">
          <div className="mx-auto max-w-[840px] px-6 sm:px-8 lg:px-12">
            <ScrollAnimation>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-black mb-12 text-center">
                代表メッセージ
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="space-y-6 text-base md:text-lg font-light leading-relaxed text-gray-700">
                <p>
                  私たちは、AI・機械学習・生成AIといった最新のテクノロジーと、
                  長年培ってきた経営コンサルティングの知見を融合させ、
                  企業の持続的な成長を支援しています。
                </p>
                <p>
                  地域に根ざしながらも、常に先進的な技術とビジョンを持ち続けること。
                  それが、私たちビズリンクパートナーズの使命です。
                </p>
                <p>
                  お客様と共に歩み、共に成長する。
                  そんなパートナーシップを大切にしながら、
                  確かな価値を提供してまいります。
                </p>
              </div>

              <div className="mt-12 text-right">
                <p className="text-sm md:text-base font-light text-gray-600">
                  株式会社ビズリンクパートナーズ
                </p>
                <p className="text-base md:text-lg font-light text-black mt-2">
                  代表取締役　齋藤達希
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Company Overview Table */}
        <section className="bg-white py-20 md:py-32">
          <div className="mx-auto max-w-[840px] px-6 sm:px-8 lg:px-12">
            <ScrollAnimation>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-black mb-12 text-center">
                会社概要
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <div className="overflow-hidden border border-gray-200">
                <table className="w-full">
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base text-gray-600 w-1/3">
                        会社名
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base text-black">
                        株式会社ビズリンクパートナーズ
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base text-gray-600">
                        所在地
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base text-black">
                        福井県越前市新町８号１番地
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base text-gray-600">
                        代表取締役
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base text-black">
                        齋藤達希
                      </td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <th className="text-left px-6 py-5 bg-gray-50 font-light text-sm md:text-base text-gray-600">
                        設立
                      </th>
                      <td className="px-6 py-5 font-light text-sm md:text-base text-black">
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
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-wide text-black mb-12 text-center">
                事業内容
              </h2>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                    AI・機械学習・生成AI・自然言語処理を活用したシステム企画開発・運用
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                    DX推進の企画、コンサルティング、実行支援
                  </p>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                  <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                    経営戦略・事業計画・組織開発・業務改善のコンサルティング業務
                  </p>
                </li>
              </ul>
            </ScrollAnimation>
          </div>
        </section>

      </div>
    </Layout>
  );
}



import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Privacy() {
  return (
    <Layout
      title="プライバシーポリシー | 株式会社ビズリンクパートナーズ"
      description="株式会社ビズリンクパートナーズのプライバシーポリシー"
    >
      <div className="min-h-screen bg-white">
        <div className="container-responsive py-24">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-light tracking-wide text-black mb-16 text-center">
              プライバシーポリシー
            </h1>
          </ScrollAnimation>

          <div className="max-w-3xl mx-auto space-y-12">
            <ScrollAnimation delay={0.1}>
              <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                株式会社ビズリンクパートナーズ（以下「当社」）は、個人情報保護の重要性を認識し、以下の方針に基づき適切に取り扱います。
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <section>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-black mb-6">
                  1. 取得する個人情報
                </h2>
                <p className="text-base md:text-lg font-light leading-relaxed text-gray-700 mb-4">
                  当社は、お問い合わせフォーム等を通じ、以下の情報を取得する場合があります。
                </p>
                <ul className="space-y-2 text-base md:text-lg font-light leading-relaxed text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span>氏名</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span>メールアドレス</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span>電話番号</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span>所属企業名</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span>相談内容</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span>その他、フォームに利用者が入力した情報</span>
                  </li>
                </ul>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <section>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-black mb-6">
                  2. 個人情報の利用目的
                </h2>
                <p className="text-base md:text-lg font-light leading-relaxed text-gray-700 mb-4">
                  取得した個人情報は、以下の目的のために利用します。
                </p>
                <ol className="space-y-2 text-base md:text-lg font-light leading-relaxed text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">1)</span>
                    <span>お問い合わせへの回答・連絡</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">2)</span>
                    <span>当社サービスの提供および案内</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">3)</span>
                    <span>サービス改善・品質向上のための分析</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">4)</span>
                    <span>必要に応じた緊急の連絡</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">5)</span>
                    <span>各種資料の送付</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">6)</span>
                    <span>契約・取引の管理</span>
                  </li>
                </ol>
                <p className="text-base md:text-lg font-light leading-relaxed text-gray-700 mt-4">
                  ※利用目的を超えて利用することはありません。
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <section>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-black mb-6">
                  3. 第三者提供について
                </h2>
                <p className="text-base md:text-lg font-light leading-relaxed text-gray-700 mb-4">
                  当社は、以下の場合を除き、個人情報を第三者に提供することはありません。
                </p>
                <ul className="space-y-2 text-base md:text-lg font-light leading-relaxed text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span>本人の同意がある場合</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span>法令に基づく場合</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span>生命・身体・財産の保護のため必要で、本人の同意が得られない場合</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span>業務委託先に必要な範囲で提供する場合（例：メール配信事業者）</span>
                  </li>
                </ul>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.5}>
              <section>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-black mb-6">
                  4. 個人情報の管理
                </h2>
                <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                  当社は、個人情報への不正アクセス、紛失、破壊、改ざん、漏えい等を防止するため、適切な対策を講じます。
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.6}>
              <section>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-black mb-6">
                  5. 個人情報の開示・訂正・削除等の請求
                </h2>
                <p className="text-base md:text-lg font-light leading-relaxed text-gray-700 mb-4">
                  本人からの以下の請求には、合理的な範囲で対応します。
                </p>
                <ul className="space-y-2 text-base md:text-lg font-light leading-relaxed text-gray-700 mb-4">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span>開示</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span>訂正</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span>追加</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span>利用停止</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span>削除</span>
                  </li>
                </ul>
                <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                  請求方法は本ポリシー末尾の連絡先までお問い合わせください。
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.7}>
              <section>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-black mb-6">
                  6. クッキー（Cookie）等の利用について
                </h2>
                <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                  当社は、アクセス解析のため Cookie を利用する場合があります。Cookie により個人を特定することはありません。
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.8}>
              <section>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-black mb-6">
                  7. 変更について
                </h2>
                <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                  本ポリシーは予告なく改訂される場合があります。
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.9}>
              <section>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-black mb-6">
                  8. 個人情報に関するお問い合わせ窓口
                </h2>
                <div className="text-base md:text-lg font-light leading-relaxed text-gray-700 space-y-2">
                  <p>株式会社ビズリンクパートナーズ</p>
                  <p>代表者：齋藤達希</p>
                  <p>住所：福井県越前市新町８号１番地</p>
                  <p>メール：info@bizlp.co.jp</p>
                </div>
              </section>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </Layout>
  );
}



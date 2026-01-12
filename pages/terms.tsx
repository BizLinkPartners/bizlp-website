import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Terms() {
  return (
    <Layout
      title="利用規約 | 株式会社ビズリンクパートナーズ"
      description="株式会社ビズリンクパートナーズのウェブサイト利用規約"
    >
      <div className="min-h-screen bg-white">
        <div className="container-responsive py-24">
          <ScrollAnimation>
            <h1 className="heading-1 mb-16 text-center">
              利用規約
            </h1>
          </ScrollAnimation>

          <div className="max-w-3xl mx-auto space-y-12">
            <ScrollAnimation delay={0.1}>
              <p className="body-text">
                本利用規約（以下「本規約」）は、株式会社ビズリンクパートナーズ（以下「当社」）が運営するウェブサイト（https://bizlp.co.jp/、以下「当サイト」）をご利用いただく際の条件を定めるものです。利用者は、本規約に同意したものとみなします。
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <section>
                <h2 className="heading-2 mb-6">
                  第1条（本規約の適用）
                </h2>
                <div className="space-y-4 body-text">
                  <p>1. 本規約は、利用者の当サイト利用に関する一切の行為に適用されます。</p>
                  <p>2. 当社は、必要に応じて本規約を変更することができ、変更後の規約は当サイト上に掲載した時点で効力を生じます。</p>
                </div>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <section>
                <h2 className="heading-2 mb-6">
                  第2条（定義）
                </h2>
                <div className="space-y-4 body-text">
                  <p>1. 「当サイト」とは、当社が運営する https://bizlp.co.jp/ を指します。</p>
                  <p>2. 「利用者」とは、当サイトを閲覧・利用するすべての者を指します。</p>
                </div>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <section>
                <h2 className="heading-2 mb-6">
                  第3条（禁止事項）
                </h2>
                <p className="body-text mb-4">
                  利用者は、当サイトの利用に際し、以下の行為を行ってはなりません。
                </p>
                <ol className="space-y-3 body-text">
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">1.</span>
                    <span>法令または公序良俗に反する行為</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">2.</span>
                    <span>犯罪行為およびその助長につながる行為</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">3.</span>
                    <span>当社または第三者の権利・利益を侵害する行為</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">4.</span>
                    <span>当サイトの運営を妨害する行為</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">5.</span>
                    <span>虚偽の情報を送信する行為</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">6.</span>
                    <span>有害なプログラム等を送信・提供する行為</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">7.</span>
                    <span>その他、当社が不適切と判断する行為</span>
                  </li>
                </ol>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.5}>
              <section>
                <h2 className="heading-2 mb-6">
                  第4条（免責事項）
                </h2>
                <div className="space-y-4 body-text">
                  <p>1. 当社は、当サイトに掲載される情報の正確性・完全性を保証しません。</p>
                  <p>2. 当サイトの利用により生じたいかなる損害についても、当社は一切責任を負いません。</p>
                  <p>3. 当社は、当サイトの内容や提供方法を予告なく変更・中断・終了することがあります。</p>
                </div>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.6}>
              <section>
                <h2 className="heading-2 mb-6">
                  第5条（著作権・知的財産権）
                </h2>
                <div className="space-y-4 body-text">
                  <p>1. 当サイトに掲載される文章・画像・ロゴ等の著作権は当社または権利者に帰属します。</p>
                  <p>2. 利用者は、当社の許可なくコンテンツの複製・改変・頒布等を行うことはできません。</p>
                </div>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.7}>
              <section>
                <h2 className="heading-2 mb-6">
                  第6条（外部リンクについて）
                </h2>
                <p className="body-text">
                  当サイトには外部サイトへのリンクが含まれる場合がありますが、リンク先の内容について当社は一切責任を負いません。
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.8}>
              <section>
                <h2 className="heading-2 mb-6">
                  第7条（個人情報の取り扱い）
                </h2>
                <div className="space-y-4 body-text">
                  <p>1. 当社は、利用者の個人情報を適切に取り扱います。</p>
                  <p>2. 個人情報の取り扱いは、別途定める「プライバシーポリシー」に従います。</p>
                </div>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.9}>
              <section>
                <h2 className="heading-2 mb-6">
                  第8条（サービスの変更・停止）
                </h2>
                <p className="body-text mb-4">
                  当社は、以下の場合、利用者に通知なく当サイトの全部または一部を停止・中断できます。
                </p>
                <ol className="space-y-3 body-text">
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">1.</span>
                    <span>システム保守点検</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">2.</span>
                    <span>災害・停電など不可抗力が発生した場合</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 flex-shrink-0">3.</span>
                    <span>運営上必要であると当社が判断した場合</span>
                  </li>
                </ol>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={1.0}>
              <section>
                <h2 className="heading-2 mb-6">
                  第9条（規約の変更）
                </h2>
                <p className="body-text">
                  当社は、必要に応じて本規約を変更できます。変更後の規約は、当サイトに掲載した時点で適用されます。
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={1.1}>
              <section>
                <h2 className="heading-2 mb-6">
                  第10条（準拠法・管轄裁判所）
                </h2>
                <p className="body-text">
                  本規約の解釈には日本法を適用します。当サイトに関して紛争が生じた場合、当社所在地を管轄する裁判所を第一審の専属的合意管轄裁判所とします。
                </p>
              </section>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </Layout>
  );
}



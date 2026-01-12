import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Antisocial() {
  return (
    <Layout
      title="反社会的勢力排除に関する基本方針 | 株式会社ビズリンクパートナーズ"
      description="株式会社ビズリンクパートナーズの反社会的勢力排除に関する基本方針"
    >
      <div className="min-h-screen bg-white">
        <div className="container-responsive py-24">
          <ScrollAnimation>
            <h1 className="heading-1 mb-16 text-center">
              反社会的勢力排除に関する基本方針
            </h1>
          </ScrollAnimation>

          <div className="max-w-3xl mx-auto space-y-12">
            <ScrollAnimation delay={0.1}>
              <p className="body-text">
                株式会社ビズリンクパートナーズ（以下「当社」）は、健全な社会の発展に寄与する企業として、反社会的勢力との関係遮断に取り組むことを宣言します。
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <section>
                <h2 className="heading-2 mb-6">
                  1. 基本方針
                </h2>
                <p className="body-text">
                  当社は、暴力団、暴力団関係企業、総会屋、その他反社会的勢力（以下「反社会的勢力」）との一切の関係を持ちません。
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <section>
                <h2 className="heading-2 mb-6">
                  2. 具体的な取組
                </h2>
                <ul className="space-y-4 body-text">
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span>反社会的勢力からの不当要求には、断固として拒絶します。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span>不当要求に対しては警察・弁護士等と連携し、組織的に対応します。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span>反社会的勢力との取引・協力・便宜供与は一切行いません。</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-black rounded-full mt-2.5 mr-4 flex-shrink-0"></span>
                    <span>反社会的勢力排除のため、社内体制の整備と教育に努めます。</span>
                  </li>
                </ul>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <section>
                <h2 className="heading-2 mb-6">
                  3. 契約解除
                </h2>
                <p className="body-text">
                  取引先が反社会的勢力であることが判明した場合、当社は契約を解除できるものとします。
                </p>
              </section>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </Layout>
  );
}

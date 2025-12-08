import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Disclaimer() {
  return (
    <Layout
      title="免責事項 | 株式会社ビズリンクパートナーズ"
      description="株式会社ビズリンクパートナーズの免責事項"
    >
      <div className="min-h-screen bg-white">
        <div className="container-responsive py-24">
          <ScrollAnimation>
            <h1 className="text-4xl md:text-5xl font-light tracking-wide text-black mb-16 text-center">
              免責事項
            </h1>
          </ScrollAnimation>

          <div className="max-w-3xl mx-auto space-y-12">
            <ScrollAnimation delay={0.1}>
              <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                株式会社ビズリンクパートナーズ（以下「当社」）は、本ウェブサイト（https://bizlp.co.jp/、以下「当サイト」）の利用に関して、以下の内容について免責されるものとします。
              </p>
            </ScrollAnimation>

            <ScrollAnimation delay={0.2}>
              <section>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-black mb-6">
                  1. 情報の正確性について
                </h2>
                <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                  当サイトに掲載する情報については、正確性・最新性の確保に努めていますが、その内容についていかなる保証を行うものではありません。当社は、予告なく情報を変更・削除する場合があります。
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.3}>
              <section>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-black mb-6">
                  2. 利用による損害について
                </h2>
                <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                  当サイトの利用または利用不能により生じた損害について、当社は一切の責任を負いません。
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.4}>
              <section>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-black mb-6">
                  3. 外部リンクについて
                </h2>
                <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                  当サイトからリンクされている外部サイトの内容について、当社は管理しておらず、その利用によって生じたいかなる損害についても責任を負いません。
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.5}>
              <section>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-black mb-6">
                  4. サービス提供の停止・中断
                </h2>
                <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                  当社は、システム保守、障害、災害等により、当サイトの運営を停止・中断する場合があります。これにより利用者に発生した損害について、当社は責任を負いません。
                </p>
              </section>
            </ScrollAnimation>

            <ScrollAnimation delay={0.6}>
              <section>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-black mb-6">
                  5. 免責事項の変更
                </h2>
                <p className="text-base md:text-lg font-light leading-relaxed text-gray-700">
                  当社は、本免責事項を予告なく変更する場合があります。変更後の免責事項は、当サイトに掲載された時点で効力を生じます。
                </p>
              </section>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </Layout>
  );
}

import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Company() {
  return (
    <Layout title="Company | BizLP" description="About our company">
      <div className="min-h-screen bg-white">
        <div className="container-responsive py-24">
          <ScrollAnimation>
            <h1 className="heading-2 text-center mb-20 text-black">
              Company
            </h1>
          </ScrollAnimation>
          
          <div className="max-w-4xl mx-auto">
            {/* Company Overview */}
            <ScrollAnimation delay={0.2}>
              <section className="mb-20">
                <h2 className="heading-3 mb-8 text-black">Overview</h2>
                <p className="body-text text-gray-500 mb-8">
                  BizLPはモダンなWeb技術で企業のDXを支援します。高速で美しいUIとメンテナブルなコードで、
                  ビジネス成長に貢献します。
                </p>
                <p className="body-text text-gray-500">
                  私たちは、テクノロジーとデザインの力で、クライアントのビジネスを次のレベルへと押し上げます。
                  シンプルで洗練されたソリューションを通じて、持続可能な成長を実現します。
                </p>
              </section>
            </ScrollAnimation>

            {/* Company Information */}
            <ScrollAnimation delay={0.4}>
              <section className="mb-20">
                <h2 className="heading-3 mb-8 text-black">Information</h2>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <div>
                      <h3 className="small-text text-gray-500 mb-2">Company Name</h3>
                      <p className="body-text text-black">BizLP Inc.</p>
                    </div>
                    <div>
                      <h3 className="small-text text-gray-500 mb-2">Established</h3>
                      <p className="body-text text-black">January 2020</p>
                    </div>
                    <div>
                      <h3 className="small-text text-gray-500 mb-2">Location</h3>
                      <p className="body-text text-black">Tokyo, Japan</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="small-text text-gray-500 mb-2">Business</h3>
                      <p className="body-text text-black">Web Development<br />Digital Consulting</p>
                    </div>
                    <div>
                      <h3 className="small-text text-gray-500 mb-2">Team</h3>
                      <p className="body-text text-black">15+ Professionals</p>
                    </div>
                    <div>
                      <h3 className="small-text text-gray-500 mb-2">Clients</h3>
                      <p className="body-text text-black">50+ Companies</p>
                    </div>
                  </div>
                </div>
              </section>
            </ScrollAnimation>

            {/* Values */}
            <ScrollAnimation delay={0.6}>
              <section>
                <h2 className="heading-3 mb-8 text-black">Values</h2>
                <div className="grid md:grid-cols-3 gap-12">
                  <div>
                    <h3 className="heading-3 mb-4 text-black">Innovation</h3>
                    <p className="body-text text-gray-500">
                      最新のテクノロジーを活用し、革新的なソリューションを提供します。
                    </p>
                  </div>
                  <div>
                    <h3 className="heading-3 mb-4 text-black">Quality</h3>
                    <p className="body-text text-gray-500">
                      高い品質基準を維持し、クライアントに最高の価値を提供します。
                    </p>
                  </div>
                  <div>
                    <h3 className="heading-3 mb-4 text-black">Partnership</h3>
                    <p className="body-text text-gray-500">
                      クライアントとの長期的なパートナーシップを重視します。
                    </p>
                  </div>
                </div>
              </section>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </Layout>
  );
}



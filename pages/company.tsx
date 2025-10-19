import Layout from '@/components/Layout';

export default function Company() {
  return (
    <Layout title="会社概要">
      <div className="container-responsive py-12">
        <h1 className="heading-2 mb-6">会社概要</h1>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <p><span className="font-semibold">会社名:</span> BizLP Inc.</p>
            <p><span className="font-semibold">設立:</span> 2020年1月</p>
            <p><span className="font-semibold">所在地:</span> 東京都サンプル区1-2-3</p>
            <p><span className="font-semibold">事業内容:</span> Web開発、コンサルティング</p>
          </div>
          <div className="space-y-3">
            <p>
              BizLPはモダンなWeb技術で企業のDXを支援します。高速で美しいUIとメンテナブルなコードで、
              ビジネス成長に貢献します。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}



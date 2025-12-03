import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Recruit() {
  return (
    <Layout title="Recruit | BizLP" description="Career opportunities at BizLP">
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="container-responsive py-24">
          <ScrollAnimation>
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-light tracking-wider text-black mb-8">
                Coming Soon
              </h1>
              <p className="text-lg md:text-xl font-light text-gray-500 tracking-wide">
                Recruit
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </Layout>
  );
}

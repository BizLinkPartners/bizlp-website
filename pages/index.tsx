import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import TypographyHero from '@/components/home/TypographyHero';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { fetchNewsList, News } from '../lib/microcms';

type Props = {
  latestNews: News[];
};

export default function Home({ latestNews }: Props) {

  return (
    <Layout title="BizLP | ホーム" description="「信じる」を科学する - 株式会社ビズリンクパートナーズ">
      {/* Hero Section - タイポグラフィ中心のヒーロー */}
      <TypographyHero />

      {/* Latest News Section */}
      <section className="py-24 bg-white">
        <div className="container-responsive">
          <ScrollAnimation>
            <h2 className="heading-2 text-center mb-16 text-black">
              Latest News
            </h2>
          </ScrollAnimation>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {latestNews.slice(0, 3).map((news, index) => (
                <ScrollAnimation key={news.id} delay={index * 0.1}>
                  <Link href={`/news/${news.id}`} className="block group">
                    <div className="border-b border-gray-100 pb-8 group-hover:border-gray-300 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="heading-3 text-black group-hover:text-gray-600 transition-colors">
                          {news.title}
                        </h3>
                        <span className="small-text mt-2 sm:mt-0 sm:ml-4">
                          {news.eventDate 
                            ? new Date(news.eventDate).toLocaleDateString('ja-JP')
                            : new Date(news.publishedAt).toLocaleDateString('ja-JP')
                          }
                        </span>
                      </div>
                      <p className="body-text text-gray-500">
                        {news.description}
                      </p>
                    </div>
                  </Link>
                </ScrollAnimation>
              ))}
            </div>
            
            <ScrollAnimation delay={0.4}>
              <div className="text-center mt-16">
                <Link 
                  href="/news" 
                  className="text-black border-b border-gray-300 pb-1 hover:border-black transition-colors font-light tracking-wide"
                >
                  View All News
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { contents } = await fetchNewsList(5, 0);
  return {
    props: { latestNews: contents },
    revalidate: 60
  };
};



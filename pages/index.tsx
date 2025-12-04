import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { fetchNewsList, News } from '../lib/microcms';
import { motion } from 'framer-motion';

type Props = {
  latestNews: News[];
};

export default function Home({ latestNews }: Props) {

  return (
    <Layout title="BizLP | ホーム" description="モダンなビジネスソリューション">
      {/* Hero Section - Minimal Monochrome Design */}
      <section className="min-h-screen flex items-center justify-center bg-white overflow-hidden">
        <div className="container-responsive text-center">
          {/* Company Name - Elegant Fade and Rise */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
            className="mb-8"
          >
            <motion.h1
              className="heading-1 text-black"
              initial={{ letterSpacing: '0.3em' }}
              animate={{ letterSpacing: '0.05em' }}
              transition={{
                duration: 1.5,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.3
              }}
            >
              BizLP
            </motion.h1>
          </motion.div>

          {/* Subtitle - Smooth Fade */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.4
            }}
            className="mb-16"
          >
            <p className="heading-3 text-gray-600 max-w-2xl mx-auto">
              Modern Business Solutions
            </p>
          </motion.div>

          {/* Description - Gentle Fade Up */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              ease: [0.25, 0.46, 0.45, 0.94],
              delay: 0.6
            }}
            className="mb-20"
          >
            <p className="body-text text-gray-500 max-w-xl mx-auto">
              モダンなテクノロジーと洗練されたデザインで、<br />
              ビジネスの未来を創造します。
            </p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: [0.42, 0, 0.58, 1],
              }}
              className="w-px h-12 bg-gray-300"
            />
          </motion.div>
        </div>
      </section>

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



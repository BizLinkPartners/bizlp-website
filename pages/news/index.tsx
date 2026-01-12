import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { fetchNewsList, News } from '@/lib/microcms';

type Props = {
  news: News[];
};

export default function NewsIndex({ news }: Props) {
  return (
    <Layout title="News | BizLP" description="Latest news and updates">
      <div className="min-h-screen bg-white">
        <div className="container-responsive py-24">
          <ScrollAnimation>
            <h1 className="heading-2 text-center mb-20">
              News
            </h1>
          </ScrollAnimation>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-16">
              {news.map((newsItem, index) => (
                <ScrollAnimation key={newsItem.id} delay={index * 0.1}>
                  <Link href={`/news/${newsItem.id}`} className="block group">
                    <article className="border-b border-gray-100 pb-12 group-hover:border-gray-300 transition-colors">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                        <h2 className="heading-3 group-hover:opacity-70 transition-opacity mb-4 sm:mb-0">
                          {newsItem.title}
                        </h2>
                        <time className="small-text sm:ml-8 sm:whitespace-nowrap">
                          {newsItem.eventDate
                            ? new Date(newsItem.eventDate).toLocaleDateString('ja-JP')
                            : new Date(newsItem.publishedAt).toLocaleDateString('ja-JP')
                          }
                        </time>
                      </div>
                      <p className="body-text">
                        {newsItem.description}
                      </p>
                    </article>
                  </Link>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const { contents } = await fetchNewsList(20, 0);
  return {
    props: { news: contents },
    revalidate: 60
  };
};



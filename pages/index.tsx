import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { GetStaticProps } from 'next';
import { fetchNewsList, News } from '../lib/microcms';

type Props = {
  latestNews: News[];
};

export default function Home({ latestNews }: Props) {
  return (
    <Layout title="BizLP | ホーム" description="Next.js + microCMS サンプル">
      {/* TOP画像セクション（画面いっぱい） */}
      <section className="relative w-full h-screen overflow-hidden">
        <Image
          src="/image/TOP.png"
          alt="TOP画像"
          fill
          className="object-cover"
          priority
        />
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* ヒーローセクション（TOP画像の上に重ねる） */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="container-responsive w-full">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-12 w-full max-w-6xl mx-auto">
              {/* 最新ニュースセクション */}
              <div className="w-full">
                <h2 className="heading-2 mb-6 sm:mb-8 text-center">最新ニュース</h2>
                <div className="grid gap-4 sm:gap-6 md:grid-cols-1 lg:grid-cols-1">
                  {latestNews.map((n) => (
                    <div key={n.id} className="bg-white rounded-xl border p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                      <Link href={`/news/${n.id}`} className="block">
                        <h3 className="font-semibold text-base sm:text-lg mb-2 hover:text-brand-600 transition-colors line-clamp-2">
                          {n.title}
                        </h3>
                        <div className="text-xs sm:text-sm text-gray-500 mb-3">
                          {n.eventDate ? new Date(n.eventDate).toLocaleString('ja-JP') : new Date(n.publishedAt).toLocaleString('ja-JP')}
                        </div>
                        <p className="text-sm sm:text-base text-gray-700 line-clamp-3">
                          {n.description}
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="text-center mt-6 sm:mt-8">
                  <Link href="/news" className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-md bg-brand-600 text-white hover:bg-brand-700 transition-colors text-sm sm:text-base">
                    ニュース一覧を見る
                  </Link>
                </div>
              </div>
            </div>
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



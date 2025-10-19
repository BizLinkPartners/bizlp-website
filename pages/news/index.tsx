import Layout from '@/components/Layout';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { fetchNewsList, News } from '@/lib/microcms';

type Props = {
  news: News[];
};

export default function NewsIndex({ news }: Props) {
  return (
    <Layout title="ニュース一覧">
      <div className="container-responsive py-12">
        <h1 className="heading-2 mb-6">ニュース</h1>
        <ul className="divide-y">
          {news.map((n) => (
            <li key={n.id} className="py-5">
              <Link href={`/news/${n.id}`} className="text-lg font-semibold hover:text-brand-600">{n.title}</Link>
              <div className="text-sm text-gray-500">{n.eventDate ? new Date(n.eventDate).toLocaleString('ja-JP') : new Date(n.publishedAt).toLocaleString('ja-JP')}</div>
              <p className="mt-2 text-gray-700">{n.description}</p>
            </li>
          ))}
        </ul>
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



import Layout from '@/components/Layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { fetchNewsById, fetchNewsList, News } from '@/lib/microcms';
import { sanitizeHtml } from '@/lib/sanitize';

type Props = { news: News };

export default function NewsDetail({ news }: Props) {
  return (
    <Layout title={news.title} description={news.body.slice(0, 100)}>
      <article className="container-responsive py-12">
        <h1 className="heading-2 mb-2">{news.title}</h1>
        <div className="small-text mb-6">{news.eventDate ? new Date(news.eventDate).toLocaleString('ja-JP') : new Date(news.publishedAt).toLocaleString('ja-JP')}</div>
        <div className="prose-basic" dangerouslySetInnerHTML={{ __html: sanitizeHtml(news.body) }} />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { contents } = await fetchNewsList(10, 0);
  const paths = contents.map((n) => ({ params: { id: n.id } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = String(params?.id);
  const news = await fetchNewsById(id);
  if (!news) {
    return { notFound: true, revalidate: 60 };
  }
  return {
    props: { news },
    revalidate: 60
  };
};



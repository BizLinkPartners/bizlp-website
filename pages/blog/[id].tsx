import Layout from '@/components/Layout';
import { GetStaticPaths, GetStaticProps } from 'next';
import { fetchBlogById, fetchBlogList, Blog } from '@/lib/microcms';
import { sanitizeHtml } from '@/lib/sanitize';
import Link from 'next/link';

type Props = { blog: Blog };

export default function BlogDetail({ blog }: Props) {
  return (
    <Layout title={blog.title} description={blog.description}>
      <article className="container-responsive py-12">
        {/* カテゴリとパンくずリスト */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex items-center gap-2 small-text mb-6">
            <Link href="/blog" className="hover:opacity-70 transition-opacity">
              Blog
            </Link>
            <span>/</span>
            <span className="text-primary">{blog.category.name}</span>
          </div>
        </div>

        {/* 記事ヘッダー */}
        <header className="max-w-3xl mx-auto mb-12">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 text-xs font-light tracking-wide bg-gray-100 rounded">
              {blog.category.name}
            </span>
          </div>
          <h1 className="heading-2 mb-4">{blog.title}</h1>
          <div className="flex items-center gap-4 small-text">
            <time>
              {new Date(blog.publishedAt).toLocaleDateString('ja-JP', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          </div>
        </header>

        {/* 記事本文 */}
        <div className="max-w-3xl mx-auto">
          <div className="prose-basic" dangerouslySetInnerHTML={{ __html: sanitizeHtml(blog.body) }} />
        </div>

        {/* 戻るリンク */}
        <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-gray-100">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 small-text hover:opacity-70 transition-opacity"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            ブログ一覧へ戻る
          </Link>
        </div>
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { contents } = await fetchBlogList(100, 0);
  const paths = contents.map((blog) => ({ params: { id: blog.id } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const id = String(params?.id);
  const blog = await fetchBlogById(id);
  if (!blog) {
    return { notFound: true, revalidate: 60 };
  }
  return {
    props: { blog },
    revalidate: 60
  };
};

import Layout from '@/components/Layout';
import ScrollAnimation from '@/components/ScrollAnimation';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { fetchBlogList, fetchCategories, Blog, Category } from '@/lib/microcms';
import { useState } from 'react';

type Props = {
  blogs: Blog[];
  categories: Category[];
};

export default function BlogIndex({ blogs, categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // カテゴリでフィルタリング
  const filteredBlogs = selectedCategory
    ? blogs.filter(blog => blog.category.id === selectedCategory)
    : blogs;

  return (
    <Layout title="Blog | BizLP" description="Latest blog posts and articles">
      <div className="min-h-screen bg-white">
        <div className="container-responsive py-24">
          <ScrollAnimation>
            <h1 className="heading-2 text-center mb-20">
              Blog
            </h1>
          </ScrollAnimation>

          {/* カテゴリフィルタ */}
          {categories.length > 0 && (
            <ScrollAnimation delay={0.1}>
              <div className="max-w-4xl mx-auto mb-16">
                <div className="flex flex-wrap gap-4 justify-center">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`px-6 py-2 rounded-full text-sm font-light tracking-wide transition-all ${
                      selectedCategory === null
                        ? 'bg-[#554C51] text-white'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-6 py-2 rounded-full text-sm font-light tracking-wide transition-all ${
                        selectedCategory === category.id
                          ? 'bg-[#554C51] text-white'
                          : 'bg-gray-100 hover:bg-gray-200'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          )}

          {/* ブログ一覧 */}
          <div className="max-w-4xl mx-auto">
            {filteredBlogs.length > 0 ? (
              <div className="space-y-16">
                {filteredBlogs.map((blog, index) => (
                  <ScrollAnimation key={blog.id} delay={index * 0.1}>
                    <Link href={`/blog/${blog.id}`} className="block group">
                      <article className="border-b border-gray-100 pb-12 group-hover:border-gray-300 transition-colors">
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="inline-block px-3 py-1 text-xs font-light tracking-wide bg-gray-100 rounded">
                                {blog.category.name}
                              </span>
                              <time className="small-text">
                                {new Date(blog.publishedAt).toLocaleDateString('ja-JP')}
                              </time>
                            </div>
                            <h2 className="heading-3 group-hover:opacity-70 transition-opacity">
                              {blog.title}
                            </h2>
                          </div>
                        </div>
                        <p className="body-text">
                          {blog.description}
                        </p>
                      </article>
                    </Link>
                  </ScrollAnimation>
                ))}
              </div>
            ) : (
              <ScrollAnimation>
                <div className="text-center py-20">
                  <p className="body-text">
                    選択されたカテゴリのブログ記事はありません
                  </p>
                </div>
              </ScrollAnimation>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const [blogData, categoryData] = await Promise.all([
    fetchBlogList(50, 0),
    fetchCategories()
  ]);

  return {
    props: {
      blogs: blogData.contents,
      categories: categoryData.contents
    },
    revalidate: 60
  };
};

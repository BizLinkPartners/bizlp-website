import { createClient } from 'microcms-js-sdk';

export type News = {
    id: string;
    title: string;
    description: string;
    body: string;   
    eventDate: string;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
    revisedAt: string;
}

if (!process.env.MICROCMS_SERVICE_DOMAIN) {
    throw new Error("MICROCMS_SERVICE_DOMAIN is required");
}

if (!process.env.MICROCMS_API_KEY) {
    throw new Error("MICROCMS_API_KEY is required");
}

export const client = createClient({
    serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
    apiKey: process.env.MICROCMS_API_KEY,
});

// お知らせブログ一覧を取得
export const getNews = async () => {
    const news = await client.getList<News>({
        endpoint: "news"
    });
    return news;
}

// お知らせ一覧を取得（ページネーション対応）
export const fetchNewsList = async (limit: number = 10, offset: number = 0) => {
    try {
        console.log('Fetching news with:', { limit, offset, serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN });
        const news = await client.getList<News>({
            endpoint: "news",
            queries: {
                limit,
                offset,
                orders: '-publishedAt'
            }
        });
        console.log('News fetched successfully:', news);
        return news;
    } catch (error) {
        console.error('Error fetching news:', error);
        throw error;
    }
}

// お知らせの詳細を取得
export const getDetail = async (contentId: string) => {
    try {
        const news = await client.getListDetail<News>({
            endpoint: 'news',
            contentId,
        });
        return news;
    } catch {
        return null;
    }
};

// お知らせの詳細を取得（fetchNewsByIdとしてエイリアス）
export const fetchNewsById = async (contentId: string) => {
    return await getDetail(contentId);
};
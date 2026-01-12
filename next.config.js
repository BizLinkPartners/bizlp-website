/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'images.microcms-assets.io' }
        ]
    },
    async redirects() {
        return [
            {
                source: '/company',
                destination: '/about',
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;



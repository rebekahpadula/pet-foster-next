/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
        {
            protocol: 'https',
            hostname: 'placedog.net',
            port: '',
            pathname: '/300/300',
        },
        ],
    },
};

export default nextConfig;

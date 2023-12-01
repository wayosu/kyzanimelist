/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "placehold.co",
            }
        ]
    }
}

module.exports = nextConfig

module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            issuer: {
                test: /\.(js|ts)x?$/,
            },
            use: ['@svgr/webpack'],
        });

        return config;
    },
    target: "serverless",
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://still-chamber-03197.herokuapp.com/:path*' // Proxy to Backend
            }
        ];
    }
};
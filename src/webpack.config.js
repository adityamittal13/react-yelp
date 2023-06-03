module.exports = {
    resolve: {
        fallback: {
            assert: require.resolve('assert'),
            crypto: require.resolve('crypto-browserify'),
            http: require.resolve('stream-http'),
            https: require.resolve('https-browserify'),
            os: require.resolve('os-browserify/browser'),
            stream: require.resolve('stream-browserify'),
            buffer: require.resolve('buffer'),
            url: require.resolve('url'),
            util: require.resolve('util'),
            timers: require.resolve('timers-browserify'),
            process: require.resolve('process/browser'),
            zlib: require.resolve('browserify-zlib')
        },
    },
};
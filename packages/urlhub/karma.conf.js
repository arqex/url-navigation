module.exports = function (config) {
    config.set({
        basePath: 'tests',
        frameworks: ['jasmine'],

        files: [
            '../dist/hashStrategy.js',
            '../dist/pushStrategy.js',
            '../dist/nodeStrategy.js',
            '../dist/urlhub.js',
            'routeData.js',
            'test-routes.js',
            'test-navigation.js',
            'test-navigation-hash.js'
        ],

        plugins: [
            require('karma-jasmine'),
            require('karma-phantomjs-launcher')
        ],

        port: 9876,
        browsers: ['PhantomJS'],
        singleRun: false,
        // Allow remote debugging when using PhantomJS
        customLaunchers: {
            'PhantomJS_custom': {
                base: 'PhantomJS',
                debug: true,
            },
        },
    });
};

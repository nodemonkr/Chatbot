const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware("/chatbot", { target: "http://somensomes.iptime.org:8888/", changeOrigin: true }));
};

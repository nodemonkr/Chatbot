const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // app.use(
  //   createProxyMiddleware('/chatbot', {
  //     target: 'http://somensomes.iptime.org:8888/',
  //     changeOrigin: true,
  //   }),
  // ),
  app.use(
    createProxyMiddleware('/chatbot', {
      target: 'http://somensomes.iptime.org:8888/',
      changeOrigin: true,
    }),
  );
  app.use(
    createProxyMiddleware('/userRegister', {
      target: 'http://somensomes.iptime.org:7000/',
      changeOrigin: true,
    }),
  );
};

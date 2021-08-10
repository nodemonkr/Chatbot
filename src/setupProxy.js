const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  // app.use(
  //   createProxyMiddleware('/chatbot', {
  //     target: 'http://somensomes.iptime.org:8888/',
  //     changeOrigin: true,
  //   }),
  // ),

  // 챗봇
  app.use(
    createProxyMiddleware('/chatbot', {
      target: 'http://somensomes.iptime.org:8888/',
      changeOrigin: true,
    }),
  );
  // 회원가입
  app.use(
    createProxyMiddleware('/userRegister', {
      target: 'http://somensomes.iptime.org:7000/',
      changeOrigin: true,
    }),
  );
  // 로그인
  app.use(
    createProxyMiddleware('/userLogin', {
      target: 'http://somensomes.iptime.org:7000/',
      changeOrigin: true,
    }),
  );
  // 위키백과
  app.use(
    createProxyMiddleware('/dataSearch', {
      target: 'http://somensomes.iptime.org:7000/',
      changeOrigin: true,
    }),
  );
};

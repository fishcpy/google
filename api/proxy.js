const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (req, res) => {
   let target = "https://www.deviantart.com/";//your website url
 // let target = "https://www.deviantart.com/:5244";
  //   if (
  //     req.url.startsWith("/api") ||
  //     req.url.startsWith("/auth") ||
  //     req.url.startsWith("/banner") ||
  //     req.url.startsWith("/CollegeTask")
   //  )
//     {
//       target = "http://zzz.fishcpy.us.kg:8880";
//     }

  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      // rewrite request path `/backend`
      //  /backend/user/login => http://google.com/user/login
      //   "^/backend/": "/",
    },
  })(req, res);
};

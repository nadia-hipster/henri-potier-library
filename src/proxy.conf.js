// This configuration file specifies that any HTTP request which starts with the /app/ path will be sent to the proxy which will redirect it to the target hostname.
const PROXY_CONFIG = [
  {
    context: [
      "/api"
    ],
    target: "http://henri-potier.xebia.fr/books",
    secure: false,
    logLevel: "debug",
    changeOrigin: true,
    pathRewrite: {
      "^/api": ""
    }
  }
];

module.exports = PROXY_CONFIG;

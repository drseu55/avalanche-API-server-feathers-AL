const networkMiddleware = require('./network');


module.exports = function (app) {
  app
    .get('/network', networkMiddleware.getNetWorkActivity);
};

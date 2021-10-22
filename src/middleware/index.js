const networkMiddleware = require('./network');
const blockMiddleware = require('./block');
const addressMiddleware = require('./address');

module.exports = function (app) {
  app
    .get('/network', networkMiddleware.getNetWorkActivity)
    .get('/blocks/hash/:hash', blockMiddleware.getBlockByHash)
    .get('/blocks/number/:blocknumber', blockMiddleware.getBlockByNumber)
    .get('/blocks/numbers/:blocknumber/:count', blockMiddleware.getXBlocksFromNthFromCChain)
    .get('/address/hash/:hash', addressMiddleware.getAddressInfoByHash);
};

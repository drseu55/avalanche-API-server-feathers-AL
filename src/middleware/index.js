const networkMiddleware = require('./network');
const blockMiddleware = require('./block');
const addressMiddleware = require('./address');
const transactionMiddleware = require('./transaction');

module.exports = function (app) {
  app
    .get('/network', networkMiddleware.getNetWorkActivity)
    .get('/blocks/hash/:hash', blockMiddleware.getBlockByHash)
    .get('/blocks/number/:blocknumber', blockMiddleware.getBlockByNumber)
    .get('/blocks/numbers/:blocknumber/:count', blockMiddleware.getXBlocksFromNthFromCChain)
    .get('/address/hash/:hash', addressMiddleware.getAddressInfoByHash)
    .get('/transactions/hash/:hash', transactionMiddleware.getTransactionByHash)
    .get('/transactions/:address/:n/:x', transactionMiddleware.getXTransactionsAfterNthFromAddress)
    .get('/transactions/:n/:x', transactionMiddleware.getXPendingTransactionsAfterNth)
    .get('/transactions/recentxchain', transactionMiddleware.getRecentTransactionsFromXChain)
    .get('/transactions/recentpchain', transactionMiddleware.getRecentTransactionsFromPChain);
};

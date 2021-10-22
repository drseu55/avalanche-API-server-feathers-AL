const dotenv = require('dotenv');

dotenv.config();

const cChainMethods = require('../modules/c-chain');
const xChainMethods = require('../modules/x-chain');
const pChainMethods = require('../modules/p-chain');

const X_CHAIN = 'X';
const P_CHAIN = 'P';
const C_CHAIN = '0x';

//GET address info by hash
exports.getAddressInfoByHash = async (req, res, next) => {
  let addressInfoFromXChain;
  let addressInfoFromCChain;
  let addressInfoFromPChain;

  if ((req.params.hash).charAt(0) == X_CHAIN) {
    addressInfoFromXChain = await xChainMethods.getAddressInfoByHashFromXChain(req.params.hash);

    if (addressInfoFromXChain[0] == 1) {
      res.send(addressInfoFromXChain[1]);
    } else {
      res.send(addressInfoFromXChain);
    }
  } else if ((req.params.hash).charAt(0) == P_CHAIN) {
    addressInfoFromPChain = await pChainMethods.getAddressInfoFromPChain(req.params.hash);

    if (addressInfoFromPChain[0] == 1) {
      res.send(addressInfoFromPChain[1]);
    } else {
      res.send(addressInfoFromPChain[1]);
    }
  } else if ((req.params.hash).slice(0, 2) == C_CHAIN){
    addressInfoFromCChain = await cChainMethods.getAddressInfoFromCChain(req.params.hash);

    if (addressInfoFromCChain[0] == 1) {
      res.send(addressInfoFromCChain[1]);
    } else {
      res.send(addressInfoFromCChain);
    }
  } else {
    res.send(JSON.parse('{"result":"wrong input"}'));
  }
};
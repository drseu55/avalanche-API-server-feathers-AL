const dotenv = require('dotenv');

const cChainMethods = require('../modules/c-chain');

dotenv.config();

//get block by hash 
exports.getBlockByHash = async (req, res, next) => {
    const blockFromCChain = await cChainMethods.getBlockByHashFromCChain(req.params.hash);

    if (blockFromCChain[0] == 1) {
        res.send(blockFromCChain[1]);
    } else {
        res.send(blockFromCChain[1]);
    }
};


//get block by number 
exports.getBlockByNumber = async (req, res, next) => {
    const cChainNumber = await cChainMethods.getBlockByNumberFromCChain(req.params.blocknumber);

    if (cChainNumber[0] == 1) {
        res.send(cChainNumber[1]);
    } else {
        res.send(cChainNumber[0]);
    }
};


//GET X blocks after N-th
exports.getXBlocksFromNthFromCChain = async (req, res, next) => {
    const cChainArray = [];
    let k = 0;

    const blockNumber = req.params.blocknumber;
    const count = req.params.count;

    for (let i = blockNumber - count; i < blockNumber; ++i)
    {
        let hashValue = await cChainMethods.getBlockByNumberFromCChain(i);
        
        if (hashValue[0] == 1) {
            return res.send(hashValue[1]);
        } else {
            cChainArray[k] = hashValue[1];
            k++;
        }
    }

    res.send(cChainArray);
};



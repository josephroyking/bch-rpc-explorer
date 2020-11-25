const axios = require("axios");
const restBase = 'https://rest.kingbch.com/v3'

// Balance by address


// Determine whether a BCHA transaction is a valid SLPA transaction
// Sample output
// {"txid":"9f9e574b906097d4f770dbb71899e3038c3d6b2cdd9649255bea5d8e00c7aa3c","valid":true}
function validateSlpTx(txid) {
  return axios.get(`${restBase}/slp/validateTxid/${txid}`)
}

// Tx details for an SLPA transaction (note: typically only works after 1 conf)
// Base URL: https://rest.kingbch.com/v3/slp/txDetails/9f9e574b906097d4f770dbb71899e3038c3d6b2cdd9649255bea5d8e00c7aa3c
// Sample output
/*
{"retData":
  {
    "txid":"eb6ec82bad393ed16a74f030249d998cd2936a2e59005bf5e1445cf05683050d",
    "hash":"eb6ec82bad393ed16a74f030249d998cd2936a2e59005bf5e1445cf05683050d",
    "version":2,"size":480,"locktime":0,
    "vin":
      [
        {
          "txid":"19dea491d654a9acd4ceddf38c81b79f3c1e0928c3c73862bbff5d4cb4c52889",
          "vout":3,
          "scriptSig":
            {
              "asm":"304402205dd1e9a0054f93275be477e2955ede1017f0402b4d8992e5dad06b702c4fffad02201a00479996473a53c610656294a02142a35c53dc13606c80db589edac029da00[ALL|FORKID] 031d730f088e406e924b6fd28f2d120a260a66a09dce3e31eb4b71dff4265240f5",
              "hex":"47304402205dd1e9a0054f93275be477e2955ede1017f0402b4d8992e5dad06b702c4fffad02201a00479996473a53c610656294a02142a35c53dc13606c80db589edac029da004121031d730f088e406e924b6fd28f2d120a260a66a09dce3e31eb4b71dff4265240f5"
            },
          "sequence":4294967295
        },
        {
            "txid":"19dea491d654a9acd4ceddf38c81b79f3c1e0928c3c73862bbff5d4cb4c52889",
            "vout":2,
            "scriptSig":
              {
                "asm":"3045022100f953dec31822f6ffbd80ae15c82c033249158b4c83d29319df827a8c7914dbdc022044128872e65cf1f4eb45a16be02a66ea2796479375640b082a809971a546e5bc[ALL|FORKID] 02fbfb43325b979b48966f0652127c0e1ee6ca566eef1a6c4d1ee7c5e4460c2a0b",
                "hex":"483045022100f953dec31822f6ffbd80ae15c82c033249158b4c83d29319df827a8c7914dbdc022044128872e65cf1f4eb45a16be02a66ea2796479375640b082a809971a546e5bc412102fbfb43325b979b48966f0652127c0e1ee6ca566eef1a6c4d1ee7c5e4460c2a0b"
              },
            "sequence":4294967295}
      ],
    "vout":
      [
        {
          "value":0,
          "n":0,
          "scriptPubKey":
            {
              "asm":"OP_RETURN 5262419 1 1145980243 bef614aac85c0c866f4d39e4d12a96851267d38d1bca5bdd6488bbd42e28b6b1 000009184e72a000 0de0ae6a5578da00",
              "hex":"6a04534c500001010453454e4420bef614aac85c0c866f4d39e4d12a96851267d38d1bca5bdd6488bbd42e28b6b108000009184e72a000080de0ae6a5578da00",
              "type":"nulldata"
            }
        },
        {
          "value":0.00000546,
          "n":1,
          "scriptPubKey":
            {
              "asm":"OP_DUP OP_HASH160 740b0728a1b61c017cd731405ae2c9915801ef2c OP_EQUALVERIFY OP_CHECKSIG",
              "hex":"76a914740b0728a1b61c017cd731405ae2c9915801ef2c88ac",
              "reqSigs":1,
              "type":"pubkeyhash",
              "addresses":
                ["bitcoincash:qp6qkpeg5xmpcqtu6uc5qkhzexg4sq009ss5darnsa"]
            }
        },
        {
          "value":0.00000546,
          "n":2,
          "scriptPubKey":
            {
              "asm":"OP_DUP OP_HASH160 58549b5b93428fac88e36617456cd99a411bd0eb OP_EQUALVERIFY OP_CHECKSIG",
              "hex":"76a91458549b5b93428fac88e36617456cd99a411bd0eb88ac",
              "reqSigs":1,
              "type":"pubkeyhash",
              "addresses":["bitcoincash:qpv9fx6mjdpgltygudnpw3tvmxdyzx7savhphtzswu"]
            }
        },
        {
          "value":0.09992015,
          "n":3,
          "scriptPubKey":
            {
              "asm":"OP_DUP OP_HASH160 438a162355ef683062a7fde9d08dd720397aaee8 OP_EQUALVERIFY OP_CHECKSIG",
              "hex":"76a914438a162355ef683062a7fde9d08dd720397aaee888ac",
              "reqSigs":1,
              "type":"pubkeyhash",
              "addresses":["bitcoincash:qppc593r2hhksvrz5l77n5yd6usrj74waqnqemgjgf"]
            }
        }
      ],
    "hex":"02000000028928c5b44c5dffbb6238c7c328091e3c9fb7818cf3ddced4aca954d691a4de19030000006a47304402205dd1e9a0054f93275be477e2955ede1017f0402b4d8992e5dad06b702c4fffad02201a00479996473a53c610656294a02142a35c53dc13606c80db589edac029da004121031d730f088e406e924b6fd28f2d120a260a66a09dce3e31eb4b71dff4265240f5ffffffff8928c5b44c5dffbb6238c7c328091e3c9fb7818cf3ddced4aca954d691a4de19020000006b483045022100f953dec31822f6ffbd80ae15c82c033249158b4c83d29319df827a8c7914dbdc022044128872e65cf1f4eb45a16be02a66ea2796479375640b082a809971a546e5bc412102fbfb43325b979b48966f0652127c0e1ee6ca566eef1a6c4d1ee7c5e4460c2a0bffffffff040000000000000000406a04534c500001010453454e4420bef614aac85c0c866f4d39e4d12a96851267d38d1bca5bdd6488bbd42e28b6b108000009184e72a000080de0ae6a5578da0022020000000000001976a914740b0728a1b61c017cd731405ae2c9915801ef2c88ac22020000000000001976a91458549b5b93428fac88e36617456cd99a411bd0eb88ac4f779800000000001976a914438a162355ef683062a7fde9d08dd720397aaee888ac00000000",
    "blockhash":"00000000000000001962023891aca3732a968eadd58a29382d9c1c3c2d45fecd",
    "confirmations":297,
    "time":1606018391,
    "blocktime":1606018391
  },
  "tokenInfo":
    {
      "versionType":1,
      "transactionType":"SEND",
      "tokenIdHex":"bef614aac85c0c866f4d39e4d12a96851267d38d1bca5bdd6488bbd42e28b6b1",
      "sendOutputs":["0","1000000000000","99999088900000000"]},
      "tokenIsValid":true
    }
*/
function txDetails(txid) {
  return axios.get(`${restBase}/slp/txDetails/${txid}`)
  // Relevant output is response.data.tokenInfo
}

module.exports = {validateSlpTx, txDetails }

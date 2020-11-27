var request = require("request");
const restBase = 'https://rest.kingbch.com/v3'

// Determine whether a BCHA transaction is a valid SLPA transaction
// Sample output
// {"txid":"9f9e574b906097d4f770dbb71899e3038c3d6b2cdd9649255bea5d8e00c7aa3c","valid":true}
function validateSlpTx(txid) {
  return new Promise(function(resolve, reject) {
		var options = {
			url: `${restBase}/slp/validateTxid/${txid}`,
			headers: {
				'User-Agent': 'request'
			}
    };
    
    request(options, function(error, response, body) {
			if (error == null && response && response.statusCode && response.statusCode == 200) {				

				var response = JSON.parse(body);				

				resolve(response);

			} else {
				var fullError = {error:error, response:response, body:body};

				utils.logError("wfzm39z83s9", fullError);

				reject(fullError);
			}
		});
	});
}

function txDetails(txid) {
  return new Promise(function(resolve, reject) {
		var options = {
			url: `${restBase}/slp/txDetails/${txid}`,
			headers: {
				'User-Agent': 'request'
			}
    };
    
    request(options, function(error, response, body) {
			if (error == null && response && response.statusCode && response.statusCode == 200) {				

				var response = JSON.parse(body);				

				resolve(response);

			} else {
				var fullError = {error:error, response:response, body:body};

				utils.logError("t0c5gyddy1r", fullError);

				reject(fullError);
			}
		});
	});
}

module.exports = {validateSlpTx, txDetails}

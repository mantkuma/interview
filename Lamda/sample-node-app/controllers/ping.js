const ping = {};
const util = require('../helper/util');
ping.pingApp = async(req, res) => {
    console.log("inside ping");
    let jsonRes = {
        statusCode: 200,
        success: true,
        result: "PingOK",
    }
    util.sendResponse(res, jsonRes);
};

module.exports = ping;
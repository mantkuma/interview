const util = {};
util.sendResponse = (res, msg) => {
    const response = msg;
    res.setHeader('Content-Type', 'application/json');
    res.statusCode = response.statusCode;
    delete response.statusCode;
    res.json(response);
};
module.exports = util;
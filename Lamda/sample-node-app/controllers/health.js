const health = {};
const util = require('../helper/util');
health.getHealth = (req, res) => {
    console.log('inside getHealth()...');

    const jsonRes = {
        statusCode: 200,
        success: true,
        message: 'Server is up!',
        status: 'UP',
    };

    util.sendResponse(res, jsonRes);
};

module.exports = health;
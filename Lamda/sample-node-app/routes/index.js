const express = require('express');
const router = express.Router();
const health = require('./health');
const ping = require('./ping');
router.use('/health', health);
router.use('/ping', ping);
module.exports = router;
const express = require('express');
const pingCtrl = require('../controllers/ping');
const router = express.Router();
router.get('/', pingCtrl.pingApp);
module.exports = router;
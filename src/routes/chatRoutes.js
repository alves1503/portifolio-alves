const express = require('express');
const chatController = require('../controllers/chatController');
const rateLimit = require('../middleware/rateLimit');

const router = express.Router();

router.post('/', rateLimit, chatController.reply);

module.exports = router;
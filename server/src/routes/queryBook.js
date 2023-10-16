const express = require('express');
const router = express.Router();

const queryBookController = require('../app/controllers/QueryBookController');

router.get('/queryBook', queryBookController.queryBook);

module.exports = router;
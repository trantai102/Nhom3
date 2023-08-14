const express = require('express');
const router = express.Router();

const bookControllers = require('../app/controllers/BookControllers');

router.post('/create', bookControllers.create);

module.exports = router;
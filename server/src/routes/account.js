var express = require('express');
var router = express.Router();

const AccountController = require('../app/controllers/AccountController');

router.post('/signin', AccountController.signin);
router.post('/signup', AccountController.signup);

module.exports = router;
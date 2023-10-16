const express = require('express');
const router = express.Router();

const bookControllers = require('../app/controllers/BookControllers');

router.post('/create', bookControllers.create);
router.post('/update/:id', bookControllers.update);
router.delete('/delete/:id', bookControllers.delete);
// router.get('/queryBook', bookControllers.queryBook);
module.exports = router;
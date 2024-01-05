const express = require('express');
const route = express.Router();

const router = express.Router();
const newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.show);

router.use('/', newsController.index);

module.exports = router;

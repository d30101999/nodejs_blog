const express = require('express');
const route = express.Router();

const router = express.Router();
const newsController = require('../app/controllers/NewsController');

router.get('/:slug', newsController.show);

router.get('/', newsController.index);

module.exports = router;

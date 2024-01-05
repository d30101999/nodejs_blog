const express = require('express');
const route = express.Router();

const router = express.Router();
const siteController = require('../app/controllers/SiteController');

router.get('/:search', siteController.search);

router.get('/', siteController.index);

module.exports = router;

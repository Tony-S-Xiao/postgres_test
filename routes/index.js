var express = require('express');
var router = express.Router();
var db = require('../query.js');
/* GET home page. */
console.log(db);
router.get('/', db);
module.exports = router;
/**
 * Created by Scott on 25 Apr 17.
 */
var express = require('express');
var router = express.Router();
var casAuthController = require('../controllers/casController');

router.get('/cas-auth', function(req, res, next) {
    res.render('cas-auth', { title: 'CAS-AUTH' });
});


module.exports = router;
/**
 * Created by Scott on 25 Apr 17.
 */
var models = require('../models');

module.exports.casLogin = function(req, res){
    console.log('Okay, got activated.')
    return res.status(500).send({ 'error': 'unable to login through cas' });
};
'use strict';

var express = require('express');
var controller = require('./charge.controller');
var auth = require('../../auth/auth.service');

var router = express.Router();


router.post('/', auth.hasRole('admin') ,controller.charge);


module.exports = router;
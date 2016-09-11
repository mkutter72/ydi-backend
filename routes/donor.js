 'use strict';


var express = require('express');
var router = express.Router();
var mdonorCtrl = require('../controllers/donor');


router.get('/', mdonorCtrl.donor.get);

router.route('/makenew').
get(mdonorCtrl.deny).
post(mdonorCtrl.makenew.post);




module.exports = router;

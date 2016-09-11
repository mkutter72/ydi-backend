'use strict';


var Donor = require('../models').model('Donor');

module.exports = {
    deny : function(req, res) {
        res.sendStatus(405);
    },
    makenew : {
        post : function(req, res, next) {
            if(!req.body.name || !req.body.email || !req.body.amount) {
                var err = new Error("Empty fields.");
                return next(err);
            }

            var pDonor = new Promise(function(resolve, reject) {
                Donor.create({
                    name : req.body.name,
                    email : req.body.email,
                    amount : req.body.amount

                }, function(err, user) {
                    if(err) {
                        reject(err);
                        return;
                    }

                    resolve(user);
                });
            });
            pDonor.then(function() {
                res.sendStatus(200);
            }).catch(function(err) {
                next(err);
            });
        }
    },


    update : {
        patch : function(req, res, next) {
            res.json({title: "patch appointment"});


        }

    },

    donor : {
        get : function(req, res, next){
         Donor.find().exec().then(
               function(result) {
                res.json(result);
            }).catch(function(error) {
                next(error);
            });

         }
    }


};

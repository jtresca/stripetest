'use strict';

var _ = require('lodash');

var stripe = require("stripe")(
  "sk_test_c3nkh9tJ5PCAPUHDqq3qPl48"
);



// Get list of things
exports.index = function(req, res) {
  // Thing.find(function (err, things) {
  //   if(err) { return handleError(res, err); }
  //   return res.json(200, things);
  // });
console.log("CALLED INTRO CONTROLLER!");
	stripe.customers.retrieve(
	  "cus_6vDKrIGGz1o3Ai",
	  function(err, customer) {
	    console.log("CALLED INTRO CONTROLLER!");
	  }
	);		
};
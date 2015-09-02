'use strict';

var _ = require('lodash');

// Creates a new thing in the DB.
exports.charge = function(req, err) {

var stripe = require("stripe")("sk_test_c3nkh9tJ5PCAPUHDqq3qPl48");

// Get the credit card details submitted by the form
var stripeToken = req.body.token;
console.log('The STRIPE TOKEN IS: ',stripeToken);

var charge = stripe.charges.create({
  amount: 1000, // amount in cents, again
  currency: "usd",
  source: stripeToken,
  description: "Example charge"
}, function(err, charge) {
  if (err && err.type === 'StripeCardError') {
    // The card has been declined
  }
});
};

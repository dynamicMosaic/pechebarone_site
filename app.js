var express = require('express');
var stripe = require("stripe")("sk_test_QBFgGPGDkNwAL2dvtEc19vWZ");
var hbs = require('hbs');
var bodyParser = require('body-parser');

// publishable key pk_test_Y8hkTKOxpnylqxM5z3ag5mxl
var app = require('express')


app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res) {


})

app.listen(3000, function(){
console.log('stripe is running')

})





// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys

// Token is created using Checkout or Elements!
// Get the payment token ID submitted by the form:
const token = request.body.stripeToken; // Using Express

const charge = stripe.charges.create({
  amount: 999,
  currency: 'usd',
  description: 'Example charge',
  source: token,
});
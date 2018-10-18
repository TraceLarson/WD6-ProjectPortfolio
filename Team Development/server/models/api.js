class Api {

	static Stripe ()  {
		// Set your secret key: remember to change this to your live secret key in production
		// See your keys here: https://dashboard.stripe.com/account/apikeys
		var stripe = require("stripe")("sk_test_Z19q1EQexLd7k5BkBmr4tRUu");

		const charge = stripe.charges.create({
			amount: 999,
			currency: 'usd',
			source: 'tok_visa',
			receipt_email: 'jenny.rosen@example.com',
		});

		return charge
	}
}

module.exports = Api
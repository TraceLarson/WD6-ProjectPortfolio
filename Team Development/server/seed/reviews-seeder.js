const mongoose = require('mongoose')
const Review = require('../models/Review')

mongoose.connect('mongodb://localhost/gamedrop', { useNewUrlParser: true })

const reviews = [
	new Review({
		name: 'trace@email.com',
		message: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo.',
	}),
	new Review({
		name: 'chris@email.com',
		message: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo.',
	}),
	new Review({
		name: 'dan@email.com',
		message: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo.',
	}),
	new Review({
		name: 'fia@email.com',
		message: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo.',
	}),
	new Review({
		name: 'jim@email.com',
		message: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo.e',
	}),
	new Review({
		name: 'joe@email.com',
		message: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Cras mattis consectetur purus sit amet fermentum. Nullam quis risus eget urna mollis ornare vel eu leo.',
	})
]

var done = 0;
for (var i = 0; i < reviews.length; i++) {
	reviews[i].save(function(err, result) {
		err ? console.error('Error seeding reviews',err) : console.log('Reviews seeded')
		done++;
		if (done === reviews.length) {
			exit();
		}
	})
}

function exit() {
	mongoose.disconnect();
}
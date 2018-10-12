var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema ({
  email: {type: String, required: true},
  password: {type: String, required: true},
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  saveList: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}]
});

module.exports = mongoose.model('User', UserSchema);

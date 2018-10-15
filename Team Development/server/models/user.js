const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema ({
  email: {type: String, required: true},
  password: {type: String, required: true},
  saveList: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}]
});

// Schema methods
UserSchema.methods = {
  checkPassword: function (password) {
    return bcrypt.compareSync(password, this.password)
  },
  hashPassword: plainTextPassword => {
    return bcrypt.hashSync(plainTextPassword, 10)
  }
}

// Schema pre method before save
UserSchema.pre('save', function (next) {
  if (!this.password) {
    console.log('No password')
    next()
  } else {
    console.log('hashPassword');
    this.password = this.hashPassword(this.password)
    next()
  }
})

module.exports = mongoose.model('User', UserSchema)

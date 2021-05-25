const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  pseudo: { type: String, required: true },
  name: { type: String, required: false },
  firstname: { type: String, required: false },
  mail: { type: String, required: false },
  age: { type: Number, required: true },
  password : {type: String,required:true}
});

const User = mongoose.model('user', userSchema);

module.exports = User;
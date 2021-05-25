const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  pseudo: { type: String, required: true },
  nom: { type: String, required: false },
  prenom: { type: String, required: false },
  mail: { type: String, required: false },
  age: { type: Number, required: true }
});

const User = mongoose.model('user', userSchema);

module.exports = User;
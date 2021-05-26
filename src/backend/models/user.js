const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  pseudo: { type: String, required: true },
  name: { type: String, required: false },
  firstname: { type: String, required: false },
  mail: { type: String, required: false },
  age: { type: Number, required: false },
  password : {type: String,required:true}
});

userSchema.virtual('survey', {
  ref: 'Survey',
  localField: '_id',
  foreignField: 'author',
  justOne: false
})


const User = mongoose.model('user', userSchema);

module.exports = User;
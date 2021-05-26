const mongoose = require('mongoose');
const { Schema } = mongoose;

const optionSchema = new Schema({
  value: {type: String, required: true},
});

optionSchema.virtual('question', {
    ref: 'Question',
    localField: '_id',
    foreignField: 'options',
    justOne: true
})

const Option = mongoose.model('Option', optionSchema);

module.exports = Option;
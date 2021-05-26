const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {type: String, required: true},
});

categorySchema.virtual('survey', {
    ref: 'Survey',
    localField: '_id',
    foreignField: 'category',
    justOne: false,
})

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
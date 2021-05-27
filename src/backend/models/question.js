const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
  title: {type: String, required: true},
  type: {type: String, required: true},
  options: [{type: Schema.Types.ObjectId, required: true, ref:'Option'}], 
  range: {
    min: {type: Number, min:0, max:9, required: false}, 
    max:{type: Number, min:1, max:10, required: false}
  }, 
  mandatory : {type: Boolean, required: true}
},{timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});


questionSchema.virtual('survey', {
    ref: 'Survey',
    localField: '_id',
    foreignField: 'questions',
    justOne: true
})

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
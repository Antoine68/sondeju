const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionResponseSchema = new Schema({
  question: {type: Schema.Types.ObjectId, required: true, ref:'Question'}, 
  type: {type: String, required: true},
  value: {type: String, required: false},
  options: [{type: Schema.Types.ObjectId, required: true, ref:'Option'}], 
  rangeValue: {type: Number, min:0, max:10, required: false}, 
});

questionResponseSchema.virtual('surveyResponse', {
    ref: 'SurveyResponse',
    localField: '_id',
    foreignField: 'responses',
    justOne: true
})

const QuestionResponse = mongoose.model('QuestionResponse', questionResponseSchema);

module.exports = QuestionResponse;
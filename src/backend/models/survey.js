const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveySchema = new Schema({
  author: { type: Schema.Types.ObjectId, required: true, ref:'User'},
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: {type: Schema.Types.ObjectId, required: true, ref:'Category'},
  questions: [{type: Schema.Types.ObjectId, required: true, ref:'Question'}],
},{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

surveySchema.virtual('surveyResponses', {
  ref: 'SurveyResponse',
  localField: '_id',
  foreignField: 'survey',
  justOne: false
})

const Survey = mongoose.model('Survey', surveySchema);

module.exports = Survey;
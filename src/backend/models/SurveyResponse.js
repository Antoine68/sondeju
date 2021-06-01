const mongoose = require('mongoose');
const { Schema } = mongoose;

const surveyResponseSchema = new Schema({
  survey: { type: Schema.Types.ObjectId, required: true, ref:'Survey'},
  responses: [{type: Schema.Types.ObjectId, required: true, ref:'QuestionResponse'}],
},{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

const SurveyResponse = mongoose.model('SurveyResponse', surveyResponseSchema);

module.exports = SurveyResponse;
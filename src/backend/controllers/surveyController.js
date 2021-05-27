const Category = require('../models/category');
const Option = require('../models/Option');
const Question = require('../models/Question');
const Survey = require('../models/Survey');
const User = require('../models/user');

module.exports = {
  //# create survey
  create: async (request, reply) => {
    try {
        try {
            let survey = request.body;
            survey.questions.map(async(question) => {
                await Option.insertMany(question.options)
            });
            let questions = await Question.insertMany(survey.questions);
            let newSurvey = await Survey.create(survey);
          } catch (e) {
            console.log(e)
            reply.code(500).send(e);
          }

    } catch (e) {
      console.log(e)
      reply.code(500).send(e);
    }
  },
  
  //#get survey
  get: async (request, reply) => {
    try {
      const surveyId = request.params.id;
      const survey = await Survey.findById(surveyId).populate({path:"category author questions", populate: {path: "options"}});
      reply.code(200).send(survey);
    } catch (e) {
      reply.code(500).send(e);
    }
  },
  
  
};
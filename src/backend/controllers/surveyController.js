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
            let author = await User.findOne({});
            let newSurvey = await Survey.create({...survey, author:author});
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
      const survey = await Survey.findById(surveyId).populate({path:"category questions", populate: {path: "options"}});
      reply.code(200).send(survey);
    } catch (e) {
      reply.code(500).send(e);
    }
  },
  
  //#get all surveys
  getAll: async (request, reply) => {
    try {
        const resultsPerPage = Number(request.query.size);
        const page = Number(request.query.page)-1;
        const params = request.query.category ? {category: request.query.category} : {}
        const surveys = await Survey.find(params)
            .populate({path:"category"})
            .sort({created_at:-1})
            .limit(resultsPerPage)
            .skip(resultsPerPage * page);
        reply.code(200).send(surveys);
    } catch (e) {
        reply.code(500).send(e);
    }
  },
  
  
  
};
const Category = require('../models/category');
const Option = require('../models/Option');
const Question = require('../models/Question');
const Survey = require('../models/Survey');
const User = require('../models/user');

module.exports = {
  //# create survey
  create: async (request, reply) => {
    try {
        let survey = request.body;
        survey.questions.map(async(question) => {
            await Option.insertMany(question.options)
        });
        let questions = await Question.insertMany(survey.questions);
        //let author = await User.findOne({});
        let newSurvey = await Survey.create({...survey});
        reply.code(200).send("okok");
      } catch (e) {
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
        let resultsPerPage = Number(request.query.size);
        let params = {};
        if(request.query.category) params.category = request.query.category;
        if(request.query.lastId) {
            let lastSurvey = await Survey.findById(request.query.lastId);
            params.created_at = {$lt: lastSurvey.created_at};
        } 
        let surveys = await Survey.find(params)
            .populate({path:"category"})
            .sort({created_at:-1})
            .limit(resultsPerPage)
        reply.code(200).send(surveys);
    } catch (e) {
        reply.code(500).send(e);
    }
  },
  
  getRandomId: async (request, reply) => {
    try {
      let count = await Survey.countDocuments();
      let random = Math.floor(Math.random() * count);
      let survey = await Survey.findOne({}).skip(random);
      reply.code(200).send(survey._id);
    } catch (e) {
        reply.code(500).send(e);
    }
  }
  
  
};
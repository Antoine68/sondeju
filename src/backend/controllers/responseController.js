const QuestionResponse = require("../models/QuestionResponse");
const Survey = require("../models/Survey");
const SurveyResponse = require("../models/SurveyResponse");


module.exports = {
  //# create response
    create: async (request, reply) => {
        try {
            let surveyResponse = request.body;
            await QuestionResponse.insertMany(surveyResponse.responses);
            await SurveyResponse.create(surveyResponse);
            reply.code(200).send("okok");
        } catch (e) {
            reply.code(500).send(e);
        }
    },

    getAll: async (request, reply) => {
        try {
            const survey_id = request.params.id;
            console.log(survey_id);
            const responses = await Survey.find({_id: survey_id}).populate({path:"questions", populate: {path :"questionResponses", model: "QuestionResponse"}});
            console.log(responses);
            reply.code(200).send(responses);
        } catch (e) {
            reply.code(500).send(e);
        }
    }
};
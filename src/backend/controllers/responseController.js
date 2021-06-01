const QuestionResponse = require("../models/QuestionResponse");
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
    }
};
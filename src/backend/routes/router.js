const categoryController = require("../controllers/categoryController");
const responseController = require("../controllers/responseController");
const surveyController = require("../controllers/surveyController");
const usersController = require("../controllers/usersController");

module.exports = (app) => {
    // create a user
    app.post('/api/user', usersController.create);
    // get a user
    app.get('/api/connection/:pseudo/:password', usersController.get);
    
    // update a user
    app.put('/api/user/:pseudo', usersController.update);
    
    // delete a user
    //app.delete('/api/notes/:id', (request, reply) => {});
    
    // create a survey
    app.post('/api/survey', surveyController.create);
    
    // get a survey
    app.get('/api/survey/:id', surveyController.get);
    
    app.get('/api/random/survey', surveyController.getRandomId);
    
    // get surveys
    app.get('/api/surveys', surveyController.getAll);
    
    
    //create a category
    app.post('/api/category', categoryController.create);
    
    //get all categories
    app.get('/api/categories', categoryController.getAll);
    
    //response
    app.post('/api/survey/response', responseController.create);
    
    app.get('/api/user/:id/surveys', surveyController.getSurveysByUser);

    app.get('/api/response/:id', responseController.getAll);
  };
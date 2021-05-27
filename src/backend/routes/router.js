const categoryController = require("../controllers/categoryController");
const surveyController = require("../controllers/surveyController");
const usersController = require("../controllers/usersController");

module.exports = (app) => {
    // create a user
    console.log("rtoute")
    app.post('/api/user', usersController.create);
    // get a user
    app.get('/api/user/:pseudo', usersController.get);
    
    // update a user
    app.put('/api/user/:pseudo', usersController.update);
    
    // delete a user
    //app.delete('/api/notes/:id', (request, reply) => {});
    
    // create a survey
    app.post('/api/survey', surveyController.create);
    
    // get surveys paginate
    app.get('/api/surveys/:page', surveyController.getPaginate);
    
    
    //create a category
    app.post('/api/category', categoryController.create);
    
    //get all categories
    app.get('/api/categories', categoryController.getAll);
  };
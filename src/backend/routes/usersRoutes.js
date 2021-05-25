const usersController = require("../controllers/usersController");

module.exports = (app) => {
    // create a user
    app.post('/api/user', usersController.create);
    
    // get a user
    app.get('/api/user/:pseudo', usersController.get);
    
    // update a user
    app.put('/api/user/:pseudo', usersController.update);
    
    // delete a user
    //app.delete('/api/notes/:id', (request, reply) => {});
  };
const User = require('../models/user');

module.exports = {
  //# create user
  create: async (request, reply) => {
    try {
      const user = request.body;
      const pseudo = request.body.pseudo;
      console.log(request.body.pseudo)
      const pseudotrouver = await User.find({ pseudo: pseudo }).exec();
      console.log(pseudotrouver)
      console.log(pseudotrouver.length)
      if (pseudotrouver.length == 0){
        const newUser = await User.create(user);
        reply.code(201).send(newUser);
      }else{
        reply.code(200).send("ce pseudo est déjà utilisé");
      }

    } catch (e) {
      console.log(e)
      reply.code(500).send(e);
    }
  },
  
  //#get user
  get: async (request, reply) => {
    try {
      const userId = request.params.id;
      const user = await Note.findById(userId);
      reply.code(200).send(user);
    } catch (e) {
      reply.code(500).send(e);
    }
  },
  
  //#update user
  update: async (request, reply) => {
    try {
      const userId = request.params.id;
      const updates = request.body;
      await User.findByIdAndUpdate(userId, updates);
      const userToUpdate = await User.findById(userId);
      reply.code(200).send({ data: userToUpdate });
    } catch (e) {
      reply.code(500).send(e);
    }
  },
  
  //#delete a user 
  //delete: async (request, reply) => {},
};
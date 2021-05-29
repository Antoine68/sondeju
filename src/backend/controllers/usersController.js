const User = require('../models/user');

module.exports = {
  //# create user
  create: async (request, reply) => {
    try {
      const user = request.body;
      const pseudo = request.body.pseudo;
      const pseudotrouver = await User.find({ pseudo: pseudo }).exec();
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
      const userPseudo = request.params.pseudo;
      console.log(request.params)
      const user = await User.find({ pseudo: userPseudo }).exec();
      console.log(user)
      if (user.length == 0){
        reply.code(200).send("Votre pseudo ou mot de passe est incorrect.");
      }
      console.log(request.params.password)
      console.log(user[0].password)
      if (request.params.password != user[0].password){
        reply.code(200).send("Votre pseudo ou mot de passe est incorrect.");
      }
      reply.code(201).send(user);
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
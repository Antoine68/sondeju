const Category = require('../models/category');


module.exports = {
  //# create survey
  create: async (request, reply) => {
    try {
      let category = request.body;
      let newCategory = await Category.create(category);
      reply.code(201).send(newCategory);
    } catch (e) {
      console.log(e)
      reply.code(500).send(e);
    }
  },
  
  //#get survey
  getAll: async (request, reply) => {
    try {
      let categories = await Category.find({});
      reply.code(200).send(categories);
    } catch (e) {
      reply.code(500).send(e);
    }
  },
  
  
};
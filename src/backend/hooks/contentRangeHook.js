const User = require('../models/user');

module.exports = (request, reply, done) => {
  User.count({}, (err, count) => {
    if (err) {
      console.error(err);
      reply.code(500).send('Error!');
    }
    reply.header('Content-Range', `notes 0-10}/${count}`);
    done();
  });
};
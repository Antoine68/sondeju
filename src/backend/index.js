//import fastify & mongoose
const fastify = require('fastify');
const mongoose = require('mongoose');

//initialized Fastify App
const app = fastify();

//connected fastify to mongoose
try {
    mongoose.connect('mongodb+srv://lhug:ZER2k66*o5@cluster-zebvi.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
} catch (e) {
  console.error(e);
}

//handle root route
app.get('/', (request, reply) => {
  try{
    reply.send("Hello world!");
  } catch(e) {
    console.error(e);
  }
})

//set application listening on port 5000 of localhost
app.listen(5000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});
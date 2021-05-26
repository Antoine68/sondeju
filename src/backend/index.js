//import fastify & mongoose
const fastify = require('fastify');
const mongoose = require('mongoose');
const router = require('./routes/router');



//initialized Fastify App
const app = fastify();
app.register(require('fastify-cors'), { 
  origin: "*"
})
//connected fastify to mongoose
try {
    mongoose.connect('mongodb+srv://lhug:ZER2k66*o5@cluster-zebvi.mongodb.net/Sondeju?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
} catch (e) {
  console.error(e);
}

//handle root route
router(app);

//app.get('/', (request, reply) => {
 // try{
 //   reply.send("Hello world!");
 // } catch(e) {
 ///   console.error(e);
 // }
//})

//set application listening on port 5000 of localhost
app.listen(5000, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});
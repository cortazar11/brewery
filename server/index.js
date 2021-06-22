const express= require('express');
const mongoose=require('mongoose');
const cookieSession=require('cookie-session');
const passport=require('passport');
require('./models/User');
require('./services/passport');

const authRoutes=require('./routes/authRoutes');
const keys=require('./config/keys')

const app= express();
app.use(cookieSession({
  maxAge: 30 * 24* 60 *60 *1000,
  keys: [keys.cookieKey],
  secure: false
}))

app.use(passport.initialize())
app.use(passport.session())

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
},()=>{
  console.log('mongoose connectedddd')
});

authRoutes(app);



const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>{
  console.log('v1000')
  console.log('Starting up up...')

})



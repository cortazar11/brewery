const express= require('express');
const mongoose=require('mongoose');
const cookieSession=require('cookie-session');
const passport=require('passport');
const bodyParser=require('body-parser');
require('./models/User');
require('./services/passport');

const authRoutes=require('./routes/authRoutes');
const billingRoutes=require('./routes/billingRoutes');

const keys=require('./config/keys')

const app= express();

app.use(bodyParser.json())
app.use(cookieSession({
  maxAge: 30 * 24* 60 *60 *1000,
  keys: [keys.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
},()=>{
  console.log('mongoose connected')
});

authRoutes(app);
billingRoutes(app);



const PORT= process.env.PORT || 5000;

app.listen(PORT,()=>{
  console.log('v1000')
  console.log('Start up...')

})



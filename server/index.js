<<<<<<< Updated upstream
const express= require('express');
const mongoose=require('mongoose');
const cookieSession=require('cookie-session');
const passport=require('passport');
=======
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
>>>>>>> Stashed changes
require('./models/User');
require('./services/passport');

<<<<<<< Updated upstream
const authRoutes=require('./routes/authRoutes');
const keys=require('./config/keys')

const app= express();
=======
const authRoutes = require('./routes/authRoutes');
const billingRoutes = require('./routes/billingRoutes');
const detailsRoutes = require('./routes/detailsRoutes');

const keys = require('./config/keys')

const app = express();

app.use(bodyParser.json())
>>>>>>> Stashed changes
app.use(cookieSession({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey],
  secure: false
}))

app.use(passport.initialize())
app.use(passport.session())

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
<<<<<<< Updated upstream
},()=>{
  console.log('mongoose connectedddd')
=======
}, () => {
  console.log('mongoose connectedddddd')
>>>>>>> Stashed changes
});

authRoutes(app);



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log('v1000')
  console.log('Starting up...')

})



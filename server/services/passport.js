const passport=require('passport');
const GoogleStrategy= require('passport-google-oauth20').Strategy;
const FacebookStrategy= require('passport-facebook').Strategy;
const keys= require('../config/keys');
const mongoose=require('mongoose');

const User=mongoose.model('users')

passport.serializeUser((user,done)=>{
  done(null,user.id)
})

passport.deserializeUser((id,done)=>{
  User.findById(id).then(user=>done(null,user))
})

passport.use(new GoogleStrategy({
  // clientID: keys.googleClientID,
  // clientSecret: keys.googleClientSecret
  clientID: process.env.googleClientID,
  clientSecret: process.env.googleClientSecret,
  callbackURL: '/auth/google/callback'
},async (accessToken, refreshToken,profile,done)=>{
  const existingUser=await User.findOne({googleId:profile.id})
  if(existingUser){
    done(null,existingUser)
  } else {
    new User({googleId: profile.id}).save().then(user=>done(null,user))
  }
  
}))

passport.use(new FacebookStrategy({
  // clientID: keys.fbClientID,
  // clientSecret: keys.fbClientSecret,
  clientID: process.env.fbClientID,
  clientSecret: process.env.fbClientSecret,
  callbackURL: '/auth/facebook/callback'
}, async (accessToken, refreshToken, profile, done)=>{
  console.log('fbAccessToken',accessToken)
  console.log('fbrefreshToken',refreshToken)
  console.log('fbprofile',profile)
  console.log('fbdone',done)
  const existingUser= await User.findOne({facebookId: profile.id})
  if(existingUser){
    done(null,existingUser)
  } else {
    new User({facebookId:profile.id}).save().then(user=>done(null,user))
  }
}))
const passport= require('passport');

module.exports=(app)=>{
  /* Google */
  app.get('/auth/google',passport.authenticate('google',{scope: ['profile','email']}))

  app.get('/auth/google/callback',passport.authenticate('google'),(req,res)=>{
        res.redirect('/dashboard')
  })

  app.get('/api/logout',(req,res)=>{
      req.logout()
      res.redirect('/')
  })

  app.get('/api/current_user',(req,res)=>{
      res.send(req.user)
  })

  /* Facebook */
  app.get('/auth/facebook',passport.authenticate('facebook',{scope: ['profile','email']}))
  app.get('/auth/facebook/callback',passport.authenticate('facebook'),(req,res)=>{
    res.redirect('/dashboard')
  })
  app.get('/api/current_user',(req,res)=>{
      res.send(req.user)
  })
}


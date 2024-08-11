import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/google', (req, res, next) => {
  console.log('Starting Google authentication');
  next();
}, passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', (req, res, next) => {
  console.log('Google callback hit');
  next();
}, passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect('https://apnablogapp.com/home');
});

router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    req.session = null;
    // res.redirect('http://localhost:5000');
    res.redirect('https://apnablogapp.com')
  });
});

router.get('/current_user', (req, res) => {
  console.log('Fetching current user');
  console.log('Authenticated:', req.isAuthenticated());  // Check if the user is authenticated
  console.log('User:', req.user);  // Check the user object
  res.send(req.user);
  
});

export default router;

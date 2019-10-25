const passport = require('passport');

// make app available here! 
module.exports = ( app ) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    
    app.get('/auth/google/callback', passport.authenticate('google'));
}

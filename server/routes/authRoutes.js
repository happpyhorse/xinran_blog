const passport = require('passport');

// make app available here! 
module.exports = ( app ) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    
    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/api/current_user', (req, res) => {res.send(req.user);});

    app.get('/api/logout', (req,res) => {
        req.logout();
        res.send(req.user);
    });
}

// common js modules
const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");
const passport = require("passport");
const cookieSession = require("cookie-session");
const bodyParser = require('body-parser');

mongoose.connect(keys.mongoURI);

require("./models/User");
require("./models/Post");

const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({ maxAge: 20 * 24 * 60 * 60 * 1000, keys: [keys.cookieKey] })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);
require("./routes/postRoutes")(app);

require("./services/passport");

if (process.env.NODE_ENV === 'production') {

  // express will serve up production assets 
  //like our main.js file, or main.css file
  app.use(express.static('client/build'));

  // express will serve up the index,html
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });

}

// injected by heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);

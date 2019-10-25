// common js modules
const express = require("express");
const moogoose = require("mongoose");
const keys = require("./config/keys");
const passport = require("passport");
const cookieSession = require("cookie-session");

moogoose.connect(keys.mongoURI);

require("./models/User");

const app = express();
app.use(
  cookieSession({ maxAge: 20 * 24 * 60 * 60 * 1000, keys: [keys.cookieKey] })
);
app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

app.get("/", (req, res) => {
  res.send();
});

require("./services/passport");

// injected by heroku
const PORT = process.env.PORT || 5050;
app.listen(PORT);

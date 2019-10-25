// common js modules
const express = require('express');
const moogoose = require('mongoose');
const keys = require('./config/keys');



moogoose.connect(keys.mongoURI);

require('./models/User');

const app = express();
require('./routes/authRoutes')(app);

app.get('/', (req, res) => {
    res.send();
});

require('./services/passport');

// injected by heroku
const PORT = process.env.PORT || 6000;
app.listen(PORT);

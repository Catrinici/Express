const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

const app = express();
app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname, '/views')));

app.set('view engine', 'ejs');
app.set('trust proxy', 1) // trust first proxy
app.use(session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: true }
    }))
    // I will have /routes/index.js handle all of our routing
require('./routes/index.js')(app);






app.listen(8000, function() {
    console.log('listening on port 8000!');
});
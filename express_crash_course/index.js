const express = require('express');
const path = require('path');
const members = require('./Members');
const moment = require('moment');



const app = express();

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} : ${moment().format()}`);
    next();
}

//Init midleware
app.use(logger);

//Gets all members
app.get('/api/members', (req, res) => {
    res.json(members)
});

//Set a static folder
app.use(express.static(path.join(__dirname, 'public')));







const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
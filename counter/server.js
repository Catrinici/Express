// const session = require('express-session');
// const bodyParser = require('body-parser');
// const express = require('express');
// const path = require('path');
// const port = process.env.PORT || 8000;
// const app = express();

// const sessionConfig = {
//     saveUninitialized: true,
//     resave: false,
//     name: 'session',
//     secret: 'thisisASecret'
// };

// app.set('view engine', 'ejs');
// app.set('views', path.resolve('views'));

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.resolve('assets')));
// app.use(session(sessionConfig));

// app.get('/', (request, response) => {
//     response.render('index', { counter: addOneToCounter(request) });
// });
// app.post('/addtwo', (request, response) => {
//     addOneToCounter(request);
//     response.redirect('/');
// });

// app.post('/reset', (request, response) => {
//     request.session.destroy();
// });

// function addOneToCounter(request) {
//     return (request.session.counter = request.session.counter ?
//         request.session.counter + 1 :
//         1);
// }

// app.listen(port, () => console.log(`listening on port ${port}`));

const session = require('express-session');
const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

const sessionConfig = {
    saveUninitialized: true,
    resave: false,
    name: 'session',
    secret: 'thisIsSuperSekret'
};

app.set('view engine', 'ejs');
app.set('views', path.resolve('views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session(sessionConfig));

app.get('/', (request, response) => {
    response.render('index', { counter: addTwoToCounter(request) });
});

app.post('/addtwo', (request, response) => {
    addOneToCounter(request);

    response.redirect('/');
});

app.post('/reset', (request, response) => {
    request.session.destroy();
    response.redirect('/');
});

function addTwoToCounter(request) {
    return (request.session.counter = request.session.counter ?
        request.session.counter + 2 :
        2);
}

app.listen(port, () => console.log(`listening on port ${port}`));
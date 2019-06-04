const express = require('express');
const app = express();
const router = express.Router();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const db = require('./models');

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/******************
 * HTML Endpoints *
 ******************/
//  route to serve landing page
app.get('/', function homepage(req, res) {
    res.sendFile(__dirname + '/views/index.html');
  });

app.get('/api', (req, res) => {
    res.json({
        message: 'These are the endpoints of this API',
        documentationUrl: 'GITHUB LINK HERE',
        baseUrl: 'HEROKU LINK HERE',
        endpoints: [
            {method: 'GET', path: '/api', description: 'Describes all endpoints'}
        ]
    });
});

/**************
 * APP ROUTES *
 **************/

// GET all flowers from database
app.get('/api/all', (req, res) => {
    db.Flower.find( (err, foundFlowers) => {
        if (err) {console.log('there was an error with api/all')}
        res.json(foundFlowers)
    })
})

// GET flowers with a certain name
app.get("/name/:name", (req, res) => {
    console.log(req.params.name);
    let name = req.params.name;
    // res.send('searched, ' + name);
    db.Flower.find( {name:name}, (err, foundFlower) => {
        if (err) {
            return res.json({foundFlowers:null})
        }
        res.json(foundFlower)
    })
  });

// GET flowers with a certain meaning
app.get("/meaning/:meaning", (req, res) => {
    let meaning = req.params.meaning
    db.Flower.find( {meaning: meaning}, (err, foundFlowers) => {
        if (err) {
        return res.json({foundFlowers:null})
        }
        res.json(foundFlowers)
    })
})

// Partial search for name
app.get("/search/name", (req, res, next) => {
    // console.log(req.query.q)
    let name = req.query.q;
    db.Flower.find(
        {name: {$regex: new RegExp(name)} }, 
        {_id: 0,__v: 0}, 
        (err, data) => {
            res.json(data)
        }
    )
})

// Partial search for meaning
app.get("/search/meaning", (req, res, next) => {
    // console.log(req.query.q)
    let meaning = req.query.q;
    db.Flower.find(
        {meaning: {$regex: new RegExp(meaning)} }, 
        {_id: 0,__v: 0}, 
        (err, data) => {
            res.json(data)
        }
    )
})

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log('Express server is up and running on http://localhost:3000/');
});
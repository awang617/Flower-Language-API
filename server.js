const express = require('express');
const app = express();

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

/*
 * HTML Endpoints
 */
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

app.get('/all', (req, res) => {
    db.Flower.find( (err, foundFlowers) => {
        if (err) {console.log('there was an error with all')}
        res.json(foundFlowers)
    })
})

/**********
 * SERVER *
 **********/

// listen on the port that Heroku prescribes (process.env.PORT) OR port 3000
app.listen(process.env.PORT || 3000, () => {
    console.log('Express server is up and running on http://localhost:3000/');
});
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const app = express();

// node middleware
// public is the 'alias' for 'static' folder
app.use('/public', express.static(path.join(__dirname, 'static')))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'static', 'index.html'));
});

app.post('/post', (req, res) => {
    console.log('=====');
    console.log('[Server log] req.body:\n', req.body)
    // res.send('Successfully posted data')
    res.json({success: true});
});



// example
app.get('/example', (req, res) => {
    res.send('hitting example route');
});

// params and query
app.get('/example/:name/:age', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.name + ' : ' + req.params.age)
});

app.listen(3000);
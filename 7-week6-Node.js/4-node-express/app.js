const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/example', (req, res) => {
    res.send('hitting example route');
});

app.listen(3000);
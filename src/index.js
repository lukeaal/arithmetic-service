const express = require('express');
// if the origin is not the same, accept it, but we can specify
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.get('/', (req, res) => {
    res.send('Arithmetic service - Hello World!');
});

app.get('/add/:n/:m', (req, res) => {
    res.json(Number(req.params.n) + Number(req.params.m));
});

app.get('/sub/:n/:m', (req, res) => {
    res.json(Number(req.params.n) - Number(req.params.m));
});

app.listen(port);

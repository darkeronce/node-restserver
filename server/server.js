require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.json('Hola Mundo');
});

app.get('/usuario', (req, res) => {
    res.json('Get User');
});

app.post('/usuario', (req, res) => {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            message: 'nombre must be entered'
        });
    } else {
        res.json({
            user: body
        });
    }
});

app.put('/usuario/:id', (req, res) => {

    let id = req.params.id;

    res.json({
        id
    });
});

app.delete('/usuario', (req, res) => {
    res.json('Delete User');
});

let port = process.env.PORT;

app.listen(port, () => {
    console.log(`listen in port ${ port }`);
});
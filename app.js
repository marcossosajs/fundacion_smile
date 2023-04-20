const express = require('express');
require('dotenv').config();
const app = express();

const router = express.Router();

const puerto = process.env.puerto;


app.use(express.json());
app.use(express.static(__dirname + "/src/"));

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/src/pages/index.html');
});

app.listen(puerto, () => {
    console.log(`server escuchando en puerto ${puerto}`);
});
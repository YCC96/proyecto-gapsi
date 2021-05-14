## iniciar proyecto
crear carpeta
npm init

## crear estructura
index.js
carpeta/src

## instalar express
npm instal express --save

## instalar nodemon
npm install nodemon --save-dev

## instalar body-parse
npm install body-parser --save

## configurar package
"start": "nodemon src/index.js"

## configurar index
const express = require('express');
const app = express();

const bodyParser = require("body-parser");

const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.json({ message: "Welcome to yordy's application." });
});

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Access-Control-Allow-Headers','*',
    );
    next();
});

require('./routes/cliente.routes.js')(app);

app.listen(port, function () {
    console.log(`Server running at: ${port}/`);
});

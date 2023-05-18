const express = require('express')
const bodyParser = require('body-parser');
const app = express()

const database = require('./database.js');

function useBodyParser() {
    const app = express()
    app.use(bodyParser.json());
}

exports.useBodyParser = useBodyParser;
exports.app = app;


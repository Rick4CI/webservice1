const express = require('express')
const bodyParser = require('body-parser');
const app = express()

const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express')

const database = require('./database.js');

const options = {
    definition: {
        info: {
            title: 'api-pella',
            version: '1.0.0'
        },
        servers: [
            {
                api: 'http://localhost:8080/'

            }
        ]
    },
    apis: ['./appServer.js']
}

const swaggerSpec = swaggerJSDoc(options)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

function useBodyParser() {
    const app = express()
    app.use(bodyParser.json());
}

exports.useBodyParser = useBodyParser;
exports.app = app;


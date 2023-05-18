const express = require('express')
const body = require('body-parser')
const appServer = require('./lib/appServer.js')
const app = appServer.app;
const port = 3000


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    const appServer = require('./lib/appServer.js')
    appServer.useBodyParser();


    const health = require('./routes/health.js')
    app.use('/health', health);

})

